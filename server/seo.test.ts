import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import express from "express";
import { registerSeoMiddleware } from "./seo";
import { toSemanticHtml } from "./prerender-html";
import { FAQ_ITEMS } from "@shared/faq-content";

const template = `<!doctype html>
<html>
  <head>
    <title>Fallback</title>
    <meta name="description" content="Fallback" />
    <link rel="canonical" href="https://www.canineconfidence.com.au/" />
    <meta property="og:url" content="https://www.canineconfidence.com.au/" />
    <meta property="og:title" content="Fallback" />
    <meta property="og:description" content="Fallback" />
    <meta name="twitter:title" content="Fallback" />
    <meta name="twitter:description" content="Fallback" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
  </head>
  <body><div id="root"></div></body>
</html>`;

async function withSeoServer(
  run: (baseUrl: string) => Promise<void>,
  prerenderBundlePath?: string,
): Promise<void> {
  const distPath = fs.mkdtempSync(path.join(os.tmpdir(), "canine-seo-test-"));
  fs.writeFileSync(path.join(distPath, "index.html"), template);

  const app = express();
  registerSeoMiddleware(app, distPath, { prerenderBundlePath });
  const server = app.listen(0, "127.0.0.1");

  try {
    await new Promise<void>((resolve, reject) => {
      server.once("listening", resolve);
      server.once("error", reject);
    });
    const address = server.address();
    assert(address && typeof address === "object");
    await run(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
    fs.rmSync(distPath, { recursive: true, force: true });
  }
}

test("known blog routes return crawlable HTML for GET and 200 for HEAD", async () => {
  await withSeoServer(async (baseUrl) => {
    const route = "/blog/dog-only-listens-with-food-brisbane";
    const getResponse = await fetch(`${baseUrl}${route}`);
    const html = await getResponse.text();
    const headResponse = await fetch(`${baseUrl}${route}`, { method: "HEAD" });

    assert.equal(getResponse.status, 200);
    assert.match(html, /<main data-prerendered="true">/);
    assert.match(html, /Your Dog Only Listens When You Have Food/);
    assert.equal(headResponse.status, 200);
    assert.equal(await headResponse.text(), "");
  });
});

test("unknown routes remain 404 for GET and HEAD", async () => {
  await withSeoServer(async (baseUrl) => {
    const route = "/blog/not-a-real-post";
    const getResponse = await fetch(`${baseUrl}${route}`);
    const headResponse = await fetch(`${baseUrl}${route}`, { method: "HEAD" });

    assert.equal(getResponse.status, 404);
    assert.equal(headResponse.status, 404);
  });
});

test("semantic prerender HTML keeps copy and links but drops styling and controls", () => {
  const reactHtml =
    '<div class="min-h-screen"><section class="py-20"><h1 class="text-4xl"><span class="block">North Brisbane</span><span class="block">Dog Training</span></h1>' +
    '<p class="text-lg">I train dogs<!-- --> across North Brisbane.</p><span aria-hidden="true">1</span>' +
    '<svg viewBox="0 0 24 24"><path d="M0 0"></path></svg><img src="/a.webp" alt=""/>' +
    '<a class="btn" href="https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/" target="_blank"><svg></svg>Book an Assessment</a>' +
    '<button type="button">Free Phone Consult</button><form><label>Name</label><input name="x"/></form>' +
    '<ul class="space-y-3"><li class="flex"><span>Home pickup included</span></li></ul><p class="x"></p></section></div>';

  assert.equal(
    toSemanticHtml(reactHtml),
    '<section><h1>North Brisbane Dog Training</h1><p>I train dogs across North Brisbane.</p>' +
      '<a href="https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/">Book an Assessment</a>' +
      "<ul><li>Home pickup included</li></ul></section>",
  );
});

test("missing prerender bundle falls back to the summary content", async () => {
  await withSeoServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/puppy`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /<main data-prerendered="true"><section><h1>/);
  });
});

function jsonLdBlocks(html: string): Record<string, unknown>[] {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]),
  );
}

test("FAQ page carries FAQPage JSON-LD built from the rendered FAQ list", async () => {
  await withSeoServer(async (baseUrl) => {
    const html = await (await fetch(`${baseUrl}/faq`)).text();
    const blocks = jsonLdBlocks(html);
    const faq = blocks.find((block) => block["@type"] === "FAQPage") as
      | { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }
      | undefined;

    assert(blocks.some((block) => block["@type"] === "LocalBusiness"));
    assert(faq);
    assert.equal(faq.mainEntity.length, FAQ_ITEMS.length);
    assert.equal(faq.mainEntity[0].name, FAQ_ITEMS[0].question);
    assert.match(faq.mainEntity[9].acceptedAnswer.text, /listed on the puppy page\. Adult behaviour/);
  });
});

test("blog posts carry BlogPosting JSON-LD alongside LocalBusiness", async () => {
  await withSeoServer(async (baseUrl) => {
    const route = "/blog/dog-only-listens-with-food-brisbane";
    const blocks = jsonLdBlocks(await (await fetch(`${baseUrl}${route}`)).text());
    const posting = blocks.find((block) => block["@type"] === "BlogPosting") as
      | Record<string, any>
      | undefined;

    assert(blocks.some((block) => block["@type"] === "LocalBusiness"));
    assert(posting);
    assert.match(posting.headline, /^Your Dog Only Listens When You Have Food/);
    assert.equal(posting.author.name, "Tristan Pearson");
    assert.equal(posting.mainEntityOfPage["@id"], `https://www.canineconfidence.com.au${route}`);
    assert.match(posting.datePublished, /^\d{4}-\d{2}-\d{2}T/);
    assert.match(posting.image, /^https:\/\//);
  });
});

const builtBundle = path.resolve(import.meta.dirname, "..", "dist", "ssr", "prerender.js");

test(
  "built prerender bundle serves the real page copy for core pages",
  { skip: !fs.existsSync(builtBundle) && "run npm run build first" },
  async () => {
    await withSeoServer(async (baseUrl) => {
      const faqHtml = await (await fetch(`${baseUrl}/faq`)).text();
      for (const item of FAQ_ITEMS) {
        assert(faqHtml.includes(escapeForHtml(item.question)), item.question);
      }

      const homeHtml = await (await fetch(`${baseUrl}/`)).text();
      assert.match(homeHtml, /<h1>North Brisbane Dog Training<\/h1>/);
      assert.match(homeHtml, /href="https:\/\/canineconfidence\.simplybook\.net\/v2\/#book\/service\/16\/count\/1\/"/);
    }, builtBundle);
  },
);

function escapeForHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;");
}
