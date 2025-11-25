import { Helmet } from 'react-helmet-async';

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
  ogImage = '/attached_assets/image_1750048904991.jpg',
  ogType = 'website',
  keywords = []
}: SEOProps) {
  const siteUrl = 'https://canineconfidence.com.au';
  const fullTitle = `${title} | Canine Confidence, North Brisbane`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  
  const defaultKeywords = [
    'dog training Brisbane',
    'dog trainer North Brisbane',
    'puppy training Brisbane',
    'dog behaviour training',
    'positive dog training',
    'play-based dog training',
    'Brisbane dog trainer',
    'dog obedience training Brisbane'
  ];
  
  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content="Canine Confidence" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane" />
    </Helmet>
  );
}
