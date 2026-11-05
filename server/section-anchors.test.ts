import test from "node:test";
import assert from "node:assert/strict";
import { toSemanticHtml } from "./prerender-html";
import { programAnchorId } from "../client/src/lib/funnel";

test("program anchor ids derive from names", () => {
  assert.equal(programAnchorId("The Foundation Program"), "the-foundation-program");
  assert.equal(programAnchorId("The Real World Reliability Package"), "the-real-world-reliability-package");
});

test("prerender keeps div anchor ids", () => {
  const html = toSemanticHtml('<div id="the-adventure-pack" class="x"><h3>The Adventure Pack</h3></div><div id=":r1:"><p>x</p></div>');
  assert.match(html, /<span id="the-adventure-pack"><\/span>/);
  assert.doesNotMatch(html, /:r1:/);
});
