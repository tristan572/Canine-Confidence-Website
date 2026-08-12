import fs from "fs";
import path from "path";
import type { Express } from "express";
import { storage } from "./storage";
import { STATIC_META, type PageMeta } from "@shared/seo-meta";

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
  priceRange: "$45 - $1050",
  image: `${SITE_URL}/attached_assets/DSC_0096_1758792971820.webp`,
  sameAs: [
    "https://www.facebook.com/p/Canine-Confidence-61571910674491/",
    "https://www.instagram.com/canine_confidence/",
    "https://share.google/NJfyc690NWAMVb3LX",
  ],
};

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

function renderStaticContent(h1: string, body: string[]): string {
  return `<main data-prerendered="true"><section><h1>${escapeHtml(h1)}</h1>${body
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("")}</section></main>`;
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

async function renderInitialContent(urlPath: string): Promise<string> {
  const page = INITIAL_PAGE_CONTENT[urlPath];
  if (page) {
    if (urlPath === "/blog") {
      const posts = await storage.getBlogPosts();
      return `${renderStaticContent(page.h1, page.body)}<section data-prerendered="true">${posts
        .map((post) => `<article><h2>${escapeHtml(post.title)}</h2><p>${escapeHtml(post.excerpt)}</p><a href="/blog/${encodeURIComponent(post.slug)}">Read article</a></article>`)
        .join("")}</section>`;
    }
    if (urlPath === "/reviews") {
      const testimonials = await storage.getTestimonials();
      return `${renderStaticContent(page.h1, page.body)}<section data-prerendered="true">${testimonials
        .map((testimonial) => `<blockquote><p>${escapeHtml(testimonial.reviewText)}</p><footer>${escapeHtml(testimonial.clientName)}</footer></blockquote>`)
        .join("")}</section>`;
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

export function registerSeoMiddleware(app: Express, distPath: string) {
  const templateHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>`;

  app.use(async (req, res, next) => {
    if (req.method !== "GET" || path.extname(req.path)) {
      return next();
    }

    const meta = await resolveMeta(req.path);
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath}`;
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);

    const initialContent = await renderInitialContent(req.path);
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

    html = html.replace("</head>", `  ${jsonLdTag}\n  </head>`);

    res.status(meta === NOT_FOUND_META ? 404 : 200);
    res.set("Content-Type", "text/html");
    res.send(html);
  });
}
