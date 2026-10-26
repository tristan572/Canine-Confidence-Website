import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import express from "express";
import { registerSeoMiddleware } from "./seo";
import { storage } from "./storage";

const SITE_URL = "https://www.canineconfidence.com.au";
const DEFAULT_IMAGE = `${SITE_URL}/attached_assets/IMG_0177_hero_1200_opt.webp`;
const STORM_SHARE_IMAGE = `${SITE_URL}/attached_assets/dog-scared-of-storms-brisbane-share.jpg`;

const template = `<!doctype html>
<html>
  <head>
    <title>Fallback</title>
    <meta name="description" content="Fallback" />
    <link rel="canonical" href="${SITE_URL}/" />
    <meta property="og:url" content="${SITE_URL}/" />
    <meta property="og:title" content="Fallback" />
    <meta property="og:description" content="Fallback" />
    <meta property="og:image" content="${DEFAULT_IMAGE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Fallback" />
    <meta name="twitter:description" content="Fallback" />
    <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
  </head>
  <body><div id="root"></div></body>
</html>`;

function metaContent(html: string, attr: string, name: string): string | undefined {
  const match = html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`));
  return match?.[1];
}

test("each blog post shares its own hero (or override) as og:image and twitter:image", async () => {
  const distPath = fs.mkdtempSync(path.join(os.tmpdir(), "canine-og-test-"));
  fs.writeFileSync(path.join(distPath, "index.html"), template);
  const app = express();
  registerSeoMiddleware(app, distPath);
  const server = app.listen(0, "127.0.0.1");
  try {
    await new Promise<void>((resolve) => server.once("listening", resolve));
    const address = server.address();
    assert(address && typeof address === "object");
    const base = `http://127.0.0.1:${address.port}`;

    const posts = await storage.getBlogPosts();
    assert(posts.length > 0);
    for (const post of posts) {
      const html = await (await fetch(`${base}/blog/${post.slug}`)).text();
      const expected =
        post.slug === "dog-scared-of-storms-brisbane"
          ? STORM_SHARE_IMAGE
          : post.imageUrl
            ? `${SITE_URL}${post.imageUrl}`
            : DEFAULT_IMAGE;
      assert.equal(metaContent(html, "property", "og:image"), expected, post.slug);
      assert.equal(metaContent(html, "name", "twitter:image"), expected, post.slug);
      assert.equal(metaContent(html, "name", "twitter:card"), "summary_large_image");
    }

    const storm = await (await fetch(`${base}/blog/dog-scared-of-storms-brisbane`)).text();
    assert.equal(metaContent(storm, "property", "og:image"), STORM_SHARE_IMAGE);
    assert(fs.existsSync(path.resolve("attached_assets/dog-scared-of-storms-brisbane-share.jpg")));

    const home = await (await fetch(`${base}/`)).text();
    assert.equal(metaContent(home, "property", "og:image"), DEFAULT_IMAGE);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    fs.rmSync(distPath, { recursive: true, force: true });
  }
});
