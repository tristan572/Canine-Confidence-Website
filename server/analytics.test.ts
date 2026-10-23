import assert from "node:assert/strict";
import test from "node:test";
import { trackLead } from "../client/src/lib/analytics";

type Call = unknown[];

function withWindow(gtag: ((...args: unknown[]) => void) | undefined, run: () => void) {
  const g = globalThis as any;
  const previous = g.window;
  g.window = {
    gtag,
    location: { pathname: "/contact", href: "https://www.canineconfidence.com.au/contact" },
  };
  try {
    run();
  } finally {
    if (previous === undefined) delete g.window;
    else g.window = previous;
  }
}

test("contact form lead event carries service_area and no personal data", () => {
  const calls: Call[] = [];
  withWindow((...args) => calls.push(args), () => {
    trackLead("contact_form", "walk-train", "meet");
  });

  assert.equal(calls.length, 1);
  const [command, eventName, params] = calls[0] as [string, string, Record<string, unknown>];
  assert.equal(command, "event");
  assert.equal(eventName, "generate_lead");
  assert.deepEqual(Object.keys(params).sort(), [
    "lead_type",
    "page_location",
    "page_path",
    "service",
    "service_area",
  ]);
  assert.equal(params.lead_type, "contact_form");
  assert.equal(params.service, "walk-train");
  assert.equal(params.service_area, "meet");
});

test("lead events without a service area omit the parameter", () => {
  const calls: Call[] = [];
  withWindow((...args) => calls.push(args), () => {
    trackLead("free_consultation");
  });
  const params = (calls[0] as [string, string, Record<string, unknown>])[2];
  assert.equal(params.service_area, undefined);
});

test("trackLead does not throw when gtag is unavailable", () => {
  withWindow(undefined, () => {
    assert.doesNotThrow(() => trackLead("contact_form", "walks", "home"));
  });
  assert.doesNotThrow(() => trackLead("contact_form", "walks", "home"));
});
