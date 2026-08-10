import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = '/og-image.png',
  ogType = 'website',
  keywords = []
}: SEOProps) {
  const siteUrl = 'https://www.canineconfidence.com.au';
  const canonicalPath = canonical
    ? canonical.replace(/^https?:\/\/[^/]+/, "")
    : window.location.pathname;
  const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;

  useEffect(() => {
    const setSingleton = (
      selector: string,
      create: () => HTMLElement,
      update: (element: HTMLElement) => void,
    ) => {
      const existing = Array.from(document.head.querySelectorAll<HTMLElement>(selector));
      const element = existing.shift() ?? create();
      update(element);
      existing.forEach((duplicate) => duplicate.remove());
      if (!element.parentElement) document.head.appendChild(element);
    };

    document.title = title;
    setSingleton('meta[name="description"]', () => document.createElement("meta"), (element) => {
      element.setAttribute("name", "description");
      element.setAttribute("content", description);
    });
    setSingleton('meta[name="robots"]', () => document.createElement("meta"), (element) => {
      element.setAttribute("name", "robots");
      element.setAttribute("content", "index, follow");
    });
    setSingleton('link[rel="canonical"]', () => document.createElement("link"), (element) => {
      element.setAttribute("rel", "canonical");
      element.setAttribute("href", canonicalUrl);
    });
  }, [canonicalUrl, description, title]);

  return null;
}
