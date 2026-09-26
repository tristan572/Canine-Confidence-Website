import { createHash } from "crypto";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

// Turns the React server render of a page into lean, semantic HTML for the
// prerendered block: headings, paragraphs, lists and links keep their text
// exactly, while styling, icons, images and interactive controls are removed.

const KEEP_TAGS = new Set([
  "section",
  "article",
  "header",
  "footer",
  "nav",
  "aside",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "ul",
  "ol",
  "li",
  "a",
  "strong",
  "em",
  "b",
  "i",
  "blockquote",
  "figure",
  "figcaption",
  "details",
  "summary",
  "dl",
  "dt",
  "dd",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "br",
]);

// Dropped together with everything inside them: decorative or interactive
// elements whose content only makes sense with JavaScript running.
const DROP_TAGS = new Set([
  "svg",
  "script",
  "style",
  "button",
  "form",
  "input",
  "select",
  "option",
  "textarea",
  "label",
  "img",
  "picture",
  "source",
  "iframe",
  "noscript",
  "video",
  "audio",
  "canvas",
  "template",
]);

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

const BLOCK_TAGS =
  "section|article|header|footer|nav|aside|h[1-6]|p|ul|ol|li|blockquote|figure|figcaption|details|summary|dl|dt|dd|table|thead|tbody|tr|th|td";

const TOKEN_PATTERN =
  /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:\s+[^\s"'>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>|[^<]+|</g;

function getAttribute(attributes: string, name: string): string | undefined {
  const match = attributes.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*"([^"]*)"`));
  return match?.[1];
}

export function toSemanticHtml(reactHtml: string): string {
  let output = "";
  let skipDepth = 0;

  const tokenPattern = new RegExp(TOKEN_PATTERN.source, "g");
  let match: RegExpExecArray | null;
  while ((match = tokenPattern.exec(reactHtml)) !== null) {
    const [token, closingSlash, rawTag, attributes = "", selfClosingSlash] = match;

    if (token.startsWith("<!--")) continue;

    if (!rawTag) {
      if (skipDepth === 0) output += token === "<" ? "&lt;" : token;
      continue;
    }

    const tag = rawTag.toLowerCase();
    const isClosing = closingSlash === "/";
    const isVoid = VOID_TAGS.has(tag) || selfClosingSlash === "/";

    if (skipDepth > 0) {
      if (isVoid) continue;
      skipDepth += isClosing ? -1 : 1;
      continue;
    }

    if (!isClosing && (DROP_TAGS.has(tag) || getAttribute(attributes, "aria-hidden") === "true")) {
      if (!isVoid) skipDepth = 1;
      continue;
    }

    if (!KEEP_TAGS.has(tag)) {
      // Unwrapped layout elements still separate words visually.
      output += " ";
      continue;
    }

    if (tag === "br") {
      output += "<br>";
    } else if (isClosing) {
      output += `</${tag}>`;
    } else if (tag === "a") {
      const href = getAttribute(attributes, "href");
      output += href !== undefined ? `<a href="${href}">` : "<a>";
    } else {
      output += `<${tag}>`;
    }
  }

  let html = output
    .replace(/\s+/g, " ")
    .replace(new RegExp(`(<(?:${BLOCK_TAGS})>)\\s+`, "g"), "$1")
    .replace(new RegExp(`\\s+(</(?:${BLOCK_TAGS})>)`, "g"), "$1")
    .replace(/\s+([.,;:!?)\]\u2019\u201D])/g, "$1")
    .replace(/([(\[\u2018\u201C])\s+/g, "$1");

  // Remove elements left empty after dropping icons, images and controls.
  let previous: string;
  do {
    previous = html;
    html = html.replace(/<([a-z0-9]+)(?: href="[^"]*")?>\s*<\/\1>/g, "");
  } while (html !== previous);

  return html.trim();
}

interface PrerenderModule {
  renderPage: (urlPath: string, data: Record<string, unknown>) => string | null;
  PRERENDER_ROUTES: Record<string, unknown>;
}

const LAYOUT_EFFECT_WARNING = "useLayoutEffect does nothing on the server";

export function createPagePrerenderer(bundlePath: string) {
  let modulePromise: Promise<PrerenderModule | null> | undefined;
  const cache = new Map<string, { signature: string; html: string }>();

  function loadModule(): Promise<PrerenderModule | null> {
    if (!modulePromise) {
      modulePromise = fs.existsSync(bundlePath)
        ? import(pathToFileURL(bundlePath).href).catch((error) => {
            console.error("Page prerender bundle failed to load:", error);
            return null;
          })
        : Promise.resolve(null);
    }
    return modulePromise;
  }

  return {
    async hasRoute(urlPath: string): Promise<boolean> {
      const mod = await loadModule();
      return Boolean(mod && Object.prototype.hasOwnProperty.call(mod.PRERENDER_ROUTES, urlPath));
    },

    // Returns semantic HTML for the page, or null so the caller can fall back.
    async render(urlPath: string, data: Record<string, unknown>): Promise<string | null> {
      const mod = await loadModule();
      if (!mod || !Object.prototype.hasOwnProperty.call(mod.PRERENDER_ROUTES, urlPath)) {
        return null;
      }

      // Match what the browser receives from the API (dates as strings).
      const json = JSON.stringify(data);
      const signature = createHash("sha1").update(json).digest("hex");
      const cached = cache.get(urlPath);
      if (cached && cached.signature === signature) return cached.html;

      const originalConsoleError = console.error;
      console.error = (...args: unknown[]) => {
        if (typeof args[0] === "string" && args[0].includes(LAYOUT_EFFECT_WARNING)) return;
        originalConsoleError(...args);
      };
      try {
        const reactHtml = mod.renderPage(urlPath, JSON.parse(json));
        if (!reactHtml) return null;
        const html = toSemanticHtml(reactHtml);
        cache.set(urlPath, { signature, html });
        return html;
      } catch (error) {
        originalConsoleError(`Page prerender failed for ${urlPath}:`, error);
        return null;
      } finally {
        console.error = originalConsoleError;
      }
    },
  };
}

export function defaultPrerenderBundlePath(distPath: string): string {
  return path.resolve(distPath, "..", "ssr", "prerender.js");
}
