import fs from "fs";
import path from "path";
import type { Express } from "express";
import { storage } from "./storage";

const SITE_URL = "https://www.canineconfidence.com.au";

interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string; // appended to SITE_URL; "" for the homepage
  noindex?: boolean;
}

// Mirrors the per-page <SEO> props already defined in each client/src/pages/*.tsx
// component. react-helmet-async never applies these in the production build, so
// this map is the source of truth for what crawlers (and social scrapers) see.
const STATIC_META: Record<string, PageMeta> = {
  "/": {
    title: "Dog Training North Brisbane | Canine Confidence",
    description:
      "Dog training on Brisbane's Northside. I help owners build calmer homes and stronger bonds using play, clarity, and real-world results. Free 15-min consult.",
    canonicalPath: "",
  },
  "/services": {
    title: "Dog Training Services | North Brisbane | Canine Confidence",
    description:
      "Pulling on lead, ignoring recall, jumping on guests? I offer in-home dog training, walk & train, and adventure sessions across Brisbane's Northside.",
    canonicalPath: "/services",
  },
  "/packages": {
    title: "Dog Training Packages North Brisbane | Canine Confidence",
    description:
      "Training packages for every stage — from puppy foundations to off-lead freedom. Clear pricing, lasting results. Based in Boondall, serving North Brisbane.",
    canonicalPath: "/packages",
  },
  "/blog": {
    title: "Dog Training Tips & Advice | Canine Confidence",
    description:
      "Expert dog training tips, guides, and insights from Canine Confidence. Learn to understand your dog better and build a stronger relationship through play-based training methods.",
    canonicalPath: "/blog",
  },
  "/about": {
    title: "About Tristan Pearson | Canine Confidence Dog Training",
    description:
      "Meet Tristan, North Brisbane's NDTF certified dog trainer. From redundancy in 2020 to certification in 2022, discover the story behind Canine Confidence's unique play-based training approach.",
    canonicalPath: "/about",
  },
  "/contact": {
    title: "Contact Canine Confidence | North Brisbane Dog Trainer",
    description:
      "Got a dog that pulls, jumps, or won't come back? Let's talk. Book a free 15-minute consult with Canine Confidence. Your local North Brisbane dog trainer.",
    canonicalPath: "/contact",
  },
  "/faq": {
    title: "Frequently Asked Questions | Canine Confidence Dog Training Brisbane",
    description:
      "Honest answers to the questions most people have before booking a dog training session with Canine Confidence in North Brisbane.",
    canonicalPath: "/faq",
  },
  "/dog-training-chermside": {
    title: "Chermside Dog Training | Canine Confidence",
    description:
      "Professional dog training in Chermside, Kedron & Stafford Heights. Urban dog training for apartment living, elevator etiquette, and real-world proofing at 7th Brigade Park.",
    canonicalPath: "/dog-training-chermside",
  },
  "/dog-training-sandgate": {
    title: "Dog Training Sandgate & Shorncliffe | Canine Confidence",
    description:
      "Dog training in Sandgate, Shorncliffe & Brighton — foreshore recall, cafe manners, and loose-leash walking. Local trainer, real results on the Northside.",
    canonicalPath: "/dog-training-sandgate",
  },
  "/dog-training-northgate": {
    title: "Northgate Dog Training | Canine Confidence",
    description:
      "Professional dog training in Northgate, Nundah & Kalinga. Walk & Train at Kalinga Park, 1-on-1 coaching sessions. Expert leash reactivity rehabilitation and loose-leash training.",
    canonicalPath: "/dog-training-northgate",
  },
  "/local-resources": {
    title: "Local Dog-Friendly Resources in North Brisbane | Canine Confidence",
    description:
      "Trusted local vets, pet shops, groomers, and dog-friendly parks recommended by Canine Confidence. Building a strong North Brisbane dog community.",
    canonicalPath: "/local-resources",
  },
  "/privacy": {
    title: "Privacy Policy | Canine Confidence",
    description:
      "How Canine Confidence collects, uses, and protects your personal information.",
    canonicalPath: "/privacy",
  },
  "/terms": {
    title: "Terms & Conditions | Canine Confidence",
    description:
      "Terms and conditions for dog training services provided by Canine Confidence, North Brisbane.",
    canonicalPath: "/terms",
  },
  "/admin": {
    title: "Website Management | Canine Confidence",
    description: "Internal website management tools.",
    canonicalPath: "/admin",
    noindex: true,
  },
  "/checkout": {
    title: "Checkout | Canine Confidence",
    description: "Complete your purchase from Canine Confidence.",
    canonicalPath: "/checkout",
    noindex: true,
  },
  "/payment-success": {
    title: "Payment Successful | Canine Confidence",
    description: "Your payment was successful.",
    canonicalPath: "/payment-success",
    noindex: true,
  },
};

const NOT_FOUND_META: PageMeta = {
  title: "Page Not Found | Canine Confidence",
  description: "The page you're looking for doesn't exist.",
  canonicalPath: "",
  noindex: true,
};

// Boondall, QLD 4034 (the corrected coordinates — the schema this replaces
// pointed roughly 30km west, near Lake Manchester).
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
    streetAddress: "44 Leona St",
    addressLocality: "Boondall",
    addressRegion: "QLD",
    postalCode: "4034",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-27.3702",
    longitude: "153.0503",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "-27.3702",
      longitude: "153.0503",
    },
    geoRadius: "20000",
  },
  priceRange: "$45 - $990",
  image: `${SITE_URL}/attached_assets/DSC_0096_1758792971820.webp`,
  sameAs: [
    "https://www.facebook.com/p/Canine-Confidence-61571910674491/",
    "https://www.instagram.com/canine_confidence/",
    "https://share.google/NJfyc690NWAMVb3LX",
  ],
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
      );

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
