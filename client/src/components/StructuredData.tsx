interface ServiceSchemaProps {
  name: string;
  description: string;
  price?: string;
}

export function ServiceSchema({ name, description, price }: ServiceSchemaProps) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "description": description,
    "provider": {
      "@id": "https://www.canineconfidence.com.au/#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane",
      "containedIn": {
        "@type": "State",
        "name": "Queensland"
      }
    }
  };

  // Only add price if it's a single numeric value (not a range)
  if (price && /^\$?\d+$/.test(price.trim())) {
    schema.offers = {
      "@type": "Offer",
      "price": price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.canineconfidence.com.au/behaviour-obedience"
    };
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
