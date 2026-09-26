import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import express from "express";
import { registerSeoMiddleware } from "./seo";

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
): Promise<void> {
  const distPath = fs.mkdtempSync(path.join(os.tmpdir(), "canine-seo-test-"));
  fs.writeFileSync(path.join(distPath, "index.html"), template);

  const app = express();
  registerSeoMiddleware(app, distPath);
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
