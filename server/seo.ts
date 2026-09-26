import fs from "fs";
import path from "path";
import type { Express } from "express";
import { storage } from "./storage";
import { STATIC_META, type PageMeta } from "@shared/seo-meta";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@shared/social-proof";
import { FAQ_ITEMS, faqAnswerText } from "@shared/faq-content";
import type { BlogPost } from "@shared/schema";
import { createPagePrerenderer, defaultPrerenderBundlePath } from "./prerender-html";

const SITE_URL = "https://www.canineconfidence.com.au";

const NOT_FOUND_META: PageMeta = {
  title: "Page Not Found | Canine Confidence",
  description: "The page you're looking for doesn't exist.",
  canonicalPath: "",
  noindex: true,
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Canine Confidence",
  description:
    "Professional dog training services in North Brisbane. NDTF certified trainer offering play-based training, behaviour modification, and puppy programs.",
  url: SITE_URL,
  telephone: "+61409521358",
  email: "info@canineconfidence.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boondall",
    addressRegion: "QLD",
    postalCode: "4034",
    addressCountry: "AU",
  },
  // Suburb-level centroid: this is a mobile, in-home service with no public
  // shopfront address, so the coordinates describe Boondall, not a street.
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.3486,
    longitude: 153.0602,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "North Brisbane" },
    { "@type": "AdministrativeArea", name: "Boondall" },
    { "@type": "AdministrativeArea", name: "Sandgate and Shorncliffe" },
    { "@type": "AdministrativeArea", name: "Northgate" },
    { "@type": "AdministrativeArea", name: "Chermside" },
    { "@type": "AdministrativeArea", name: "Aspley" },
    { "@type": "AdministrativeArea", name: "Ascot" },
  ],
  // Training hours (when sessions actually run), matching the footer. Phone
  // hours are deliberately not modelled here — this describes service delivery.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  // Reflects the public Google Business Profile rating. Google does not show
  // review stars for self-hosted LocalBusiness ratings, so this is here for
  // entity understanding rather than rich results.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    reviewCount: GOOGLE_REVIEW_COUNT,
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$45 - $1050",
  image: `${SITE_URL}/attached_assets/DSC_0096_1758792971820.webp`,
  sameAs: [
    "https://www.facebook.com/p/Canine-Confidence-61571910674491/",
    "https://www.instagram.com/canine_confidence/",
    "https://share.google/NJfyc690NWAMVb3LX",
  ],
};

const PUBLISHER = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Canine Confidence",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/email-logo.png`,
    width: 395,
    height: 150,
  },
};

function absoluteUrl(url: string): string {
  return /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function buildBlogPostingSchema(post: BlogPost) {
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const published = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(published ? { datePublished: published, dateModified: published } : {}),
    author: {
      "@type": "Person",
      name: "Tristan Pearson",
      url: `${SITE_URL}/about`,
    },
    publisher: PUBLISHER,
    ...(post.imageUrl ? { image: absoluteUrl(post.imageUrl) } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    url: canonicalUrl,
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
  };
}

// Built from the same FAQ_ITEMS list the /faq page renders.
export function buildFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
    })),
  };
}

async function resolvePageSchemas(urlPath: string): Promise<object[]> {
  if (urlPath === "/faq") return [buildFaqPageSchema()];

  const blogMatch = urlPath.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = await storage.getBlogPostBySlug(blogMatch[1]);
    if (post) return [buildBlogPostingSchema(post)];
  }

  return [];
}

// Escapes characters that could close the script tag or break parsing when
// JSON-LD is embedded in HTML.
function jsonLdScript(schema: object): string {
  const json = JSON.stringify(schema)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
  return `<script type="application/ld+json">${json}</script>`;
}

interface SitemapEntry {
  path: string;
  changefreq: string;
  priority: string;
}

const STATIC_SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/puppy", changefreq: "monthly", priority: "0.9" },
  { path: "/behaviour-obedience", changefreq: "monthly", priority: "0.9" },
  { path: "/walking-adventure", changefreq: "monthly", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.7" },
  { path: "/packages", changefreq: "monthly", priority: "0.7" },
  { path: "/method", changefreq: "monthly", priority: "0.8" },
  { path: "/reviews", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/dog-training-chermside", changefreq: "monthly", priority: "0.7" },
  { path: "/dog-training-sandgate", changefreq: "monthly", priority: "0.7" },
  { path: "/dog-training-northgate", changefreq: "monthly", priority: "0.7" },
  { path: "/dog-training-aspley", changefreq: "monthly", priority: "0.7" },
  { path: "/dog-training-ascot", changefreq: "monthly", priority: "0.7" },
  { path: "/local-resources", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
  { path: "/terms", changefreq: "yearly", priority: "0.2" },
];

// Built from storage on each request (like /rss.xml already does) so new blog
// posts and local pages appear without hand-editing a static XML file.
export function buildSitemapXml(blogPosts: { slug: string }[]): string {
  const blogEntries: SitemapEntry[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const urls = [...STATIC_SITEMAP_ENTRIES, ...blogEntries]
    .map(
      (entry) => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const INITIAL_PAGE_CONTENT: Record<string, { h1: string; body: string[] }> = {
  "/": {
    h1: "North Brisbane Dog Training",
    body: [
      "Calmer homes. Stronger bonds. Dogs that are fulfilled and thriving.",
      "Canine Confidence provides in-home dog training, behaviour support, puppy coaching, walking and adventure services across North Brisbane.",
    ],
  },
  "/puppy": {
    h1: "Stop guessing through the hard parts. Start building the dog you always pictured.",
    body: ["Private in-home puppy coaching to build confidence, connection and clear communication from the start."],
  },
  "/behaviour-obedience": {
    h1: "Stop managing the symptoms. Start changing what drives them.",
    body: ["Personalised support for manners, barking, pulling, anxiety, over-excitement and dog reactivity."],
  },
  "/walking-adventure": {
    h1: "Your dog's walk should not be the most stressful part of your day",
    body: ["Trainer-led walks, adventures and real-world skill building for North Brisbane dogs."],
  },
  "/method": {
    h1: "The goal is a dog you can take anywhere.",
    body: ["My method combines play, fulfilment and clear communication around the dog and life in front of me."],
  },
  "/reviews": {
    h1: "Real Dogs. Real Owners. Real Results.",
    body: ["Read feedback from Canine Confidence clients about their dogs, their homes and their progress together."],
  },
  "/blog": {
    h1: "Free Training Advice & Tips",
    body: ["Practical dog training articles, behaviour insights and guidance from Canine Confidence."],
  },
  "/services": {
    h1: "Dog training services",
    body: ["The old Services page is now organised around three clearer paths: puppy training, behaviour and obedience, and walking and adventure."],
  },
  "/packages": {
    h1: "Dog training programs and packages",
    body: ["The old Packages page is now organised around the support your dog needs: puppy training, behaviour and obedience, or walking and adventure."],
  },
  "/about": { h1: "About Canine Confidence", body: ["Meet Tristan Pearson, a North Brisbane dog trainer focused on practical, personalised coaching."] },
  "/contact": { h1: "Contact Canine Confidence", body: ["Get in touch to discuss dog training, coaching, walking or adventure services in North Brisbane."] },
  "/faq": { h1: "Frequently asked questions", body: ["Straight answers about Canine Confidence dog training services, booking and what to expect."] },
  "/dog-training-chermside": { h1: "Chermside Dog Training", body: ["Canine Confidence provides dog training services in Chermside, Kedron and Stafford Heights from its Boondall base."] },
  "/dog-training-sandgate": { h1: "Sandgate, Shorncliffe & Brighton Dog Training", body: ["Canine Confidence provides dog training services across Sandgate, Shorncliffe and Brighton from its Boondall base."] },
  "/dog-training-northgate": { h1: "Northgate & Nundah Dog Training", body: ["Canine Confidence provides dog training services across Northgate, Nundah and Kalinga from its Boondall base."] },
  "/dog-training-aspley": {
    h1: "Dog Training in Aspley",
    body: [
      "Personalised in-home and local dog training across Aspley, Carseldine and Bridgeman Downs.",
      "Training can cover puppy development, behaviour and obedience, walking skills and practical work around suitable local environments including Marchant Park.",
    ],
  },
  "/dog-training-ascot": {
    h1: "Dog Training in Ascot",
    body: [
      "Personalised in-home and local dog training across Ascot, Hamilton and Hendra.",
      "Training can cover puppy development, behaviour and obedience, cafe manners, walking skills and practical work around suitable local environments including the Racecourse Road precinct.",
    ],
  },
  "/local-resources": { h1: "Local dog-friendly resources in North Brisbane", body: ["A practical collection of local dog-friendly resources recommended by Canine Confidence."] },
  "/privacy": { h1: "Privacy Policy", body: ["How Canine Confidence collects, uses and protects personal information."] },
  "/terms": { h1: "Terms & Conditions", body: ["Terms and conditions for Canine Confidence dog training services."] },
};

// Tidies the brief pre-JS view of the prerendered block. Every selector is
// scoped to [data-prerendered] children of #root, which React replaces on
// mount, so none of this can touch the rendered app. Colours and font match
// the site (Manrope, charcoal headings, primary blue links).
export const PRERENDER_STYLE =
  "<style data-prerender-style>" +
  "#root>[data-prerendered]{box-sizing:border-box;width:100%;max-width:46rem;margin:0 auto;padding:1.5rem 1.25rem;" +
  "font:1rem/1.65 Manrope,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2A2B4A}" +
  "#root>[data-prerendered] :is(h1,h2,h3,h4,h5,h6){color:#1F2159;font-weight:800;line-height:1.25;margin:1.6em 0 .5em}" +
  "#root>[data-prerendered] h1{font-size:2rem;margin-top:0}" +
  "#root>[data-prerendered] h2{font-size:1.5rem}" +
  "#root>[data-prerendered] h3{font-size:1.2rem}" +
  "#root>[data-prerendered] :is(h4,h5,h6){font-size:1.05rem}" +
  "#root>[data-prerendered] :is(p,ul,ol,dl,blockquote,figure,details,section,article){margin:0 0 1em}" +
  "#root>[data-prerendered] :is(ul,ol){padding-left:1.4em}" +
  "#root>[data-prerendered] ul{list-style:disc}" +
  "#root>[data-prerendered] ol{list-style:decimal}" +
  "#root>[data-prerendered] li{margin:.3em 0}" +
  "#root>[data-prerendered] dt{font-weight:700}" +
  "#root>[data-prerendered] dd{margin:0 0 .5em}" +
  "#root>[data-prerendered] a{color:#0A6A97;text-decoration:underline;font-weight:600}" +
  "#root>[data-prerendered] blockquote{border-left:3px solid #0A6A97;padding-left:1em;font-style:italic}" +
  // Prerendered images carry alt text but no src (so nothing downloads twice),
  // which browsers draw as a broken-image icon: keep them out of the view.
  "#root>[data-prerendered] img{display:none}" +
  "</style>";

// Elements are separated by a space so text extractors that simply delete
// tags never run words from neighbouring elements together.
function renderStaticContent(h1: string, body: string[]): string {
  return `<main data-prerendered="true"><section><h1>${escapeHtml(h1)}</h1> ${body
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join(" ")}</section></main>`;
}

function renderBlogContent(post: { title: string; excerpt: string; content: string }): string {
  const paragraphs = post.content
    .replace(/^#\s+[^\r\n]+\r?\n+/, "")
    .split(/\n{2,}/)
    .slice(0, 40)
    .map((paragraph) => paragraph.replace(/^#{1,6}\s+/, "").trim())
    .filter(Boolean);
  return renderStaticContent(post.title, [post.excerpt, ...paragraphs]);
}

type PagePrerenderer = ReturnType<typeof createPagePrerenderer>;

// The API responses the page components read, taken straight from storage so
// services, packages and prices come from the same catalogue as the live API.
async function loadPrerenderData(): Promise<Record<string, unknown>> {
  const [services, packages, testimonials, blogPosts] = await Promise.all([
    storage.getServices(),
    storage.getPackages(),
    storage.getTestimonials(),
    storage.getBlogPosts(),
  ]);
  return {
    "/api/services": services,
    "/api/packages": packages,
    "/api/testimonials": testimonials,
    "/api/blog": blogPosts,
  };
}

async function renderInitialContent(urlPath: string, prerenderer?: PagePrerenderer): Promise<string> {
  // Core and suburb pages: render the real React page so the no-JS HTML
  // carries exactly the copy visitors see. Falls back to the summary below if
  // the prerender bundle is missing or a render fails.
  if (prerenderer && (await prerenderer.hasRoute(urlPath))) {
    const pageHtml = await prerenderer.render(urlPath, await loadPrerenderData());
    if (pageHtml) return `<main data-prerendered="true">${pageHtml}</main>`;
  }

  const page = INITIAL_PAGE_CONTENT[urlPath];
  if (page) {
    if (urlPath === "/blog") {
      const posts = await storage.getBlogPosts();
      return `${renderStaticContent(page.h1, page.body)} <section data-prerendered="true">${posts
        .map((post) => `<article><h2>${escapeHtml(post.title)}</h2> <p>${escapeHtml(post.excerpt)}</p> <a href="/blog/${encodeURIComponent(post.slug)}">Read article</a></article>`)
        .join(" ")}</section>`;
    }
    if (urlPath === "/reviews") {
      const testimonials = await storage.getTestimonials();
      return `${renderStaticContent(page.h1, page.body)} <section data-prerendered="true">${testimonials
        .map((testimonial) => `<blockquote><p>${escapeHtml(testimonial.reviewText)}</p> <footer>${escapeHtml(testimonial.clientName)}</footer></blockquote>`)
        .join(" ")}</section>`;
    }
    return renderStaticContent(page.h1, page.body);
  }

  const blogMatch = urlPath.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = await storage.getBlogPostBySlug(blogMatch[1]);
    if (post) return renderBlogContent(post);
  }

  return "";
}

async function resolveMeta(urlPath: string): Promise<PageMeta> {
  if (STATIC_META[urlPath]) {
    return STATIC_META[urlPath];
  }

  const blogMatch = urlPath.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = await storage.getBlogPostBySlug(blogMatch[1]);
    if (post) {
      return {
        title: post.metaTitle ?? `${post.title} | Canine Confidence`,
        description: post.excerpt,
        canonicalPath: `/blog/${post.slug}`,
      };
    }
  }

  return NOT_FOUND_META;
}

export function registerSeoMiddleware(
  app: Express,
  distPath: string,
  options: { prerenderBundlePath?: string } = {},
) {
  const templateHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  const jsonLdTag = jsonLdScript(LOCAL_BUSINESS_SCHEMA);
  const prerenderer = createPagePrerenderer(
    options.prerenderBundlePath ?? defaultPrerenderBundlePath(distPath),
  );

  app.use(async (req, res, next) => {
    const isPageRequest = req.method === "GET" || req.method === "HEAD";
    if (!isPageRequest || path.extname(req.path)) {
      return next();
    }

    const meta = await resolveMeta(req.path);
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath}`;
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);

    const initialContent = await renderInitialContent(req.path, prerenderer);
    let html = templateHtml
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta name="description" content="[^"]*"\s*\/>/,
        `<meta name="description" content="${description}" />`,
      )
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*"\s*\/>/,
        `<meta property="og:url" content="${canonicalUrl}" />`,
      )
      .replace(
        /<meta property="og:title" content="[^"]*"\s*\/>/,
        `<meta property="og:title" content="${title}" />`,
      )
      .replace(
        /<meta property="og:description" content="[^"]*"\s*\/>/,
        `<meta property="og:description" content="${description}" />`,
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*"\s*\/>/,
        `<meta name="twitter:title" content="${title}" />`,
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*"\s*\/>/,
        `<meta name="twitter:description" content="${description}" />`,
      )
      .replace('<div id="root"></div>', `<div id="root">${initialContent}</div>`);

    if (meta.noindex) {
      html = html
        .replace(
          '<meta name="robots" content="index, follow" />',
          '<meta name="robots" content="noindex, nofollow" />',
        )
        .replace(
          '<meta name="googlebot" content="index, follow" />',
          '<meta name="googlebot" content="noindex, nofollow" />',
        );
    }

    const schemaTags = [
      PRERENDER_STYLE,
      jsonLdTag,
      ...(await resolvePageSchemas(req.path)).map(jsonLdScript),
    ];
    html = html.replace("</head>", `  ${schemaTags.join("\n  ")}\n  </head>`);

    res.status(meta === NOT_FOUND_META ? 404 : 200);
    res.set("Content-Type", "text/html");
    res.send(html);
  });
}
