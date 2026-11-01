import assert from "node:assert/strict";
import test from "node:test";
import { storage } from "./storage";
import { STATIC_META } from "@shared/seo-meta";
import { FAQ_ITEMS } from "@shared/faq-content";

test("assessment price is $150 in the catalogue", async () => {
  const services = await storage.getServices();
  const a = services.find((s) => s.name === "Initial Canine Success Assessment");
  assert.equal(a?.price, "$150");
});

test("SEO meta and FAQ quote the $150 assessment, never $99", () => {
  const text = JSON.stringify(STATIC_META) + JSON.stringify(FAQ_ITEMS);
  assert.ok(text.includes("$150 assessment"));
  assert.ok(text.includes("Assessment ($150)"));
  assert.ok(!/\$99\b/.test(text));
});
