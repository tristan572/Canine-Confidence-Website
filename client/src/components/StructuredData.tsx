import { Helmet } from 'react-helmet-async';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://canineconfidence.com.au/#localbusiness",
    "name": "Canine Confidence",
    "description": "Professional dog training services in North Brisbane. NDTF certified trainer offering play-based training, behaviour modification, and puppy programs.",
    "url": "https://canineconfidence.com.au",
    "telephone": "0409521358",
    "email": "info@canineconfidence.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-27.3812",
      "longitude": "152.7135"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-27.3812",
        "longitude": "152.7135"
      },
      "geoRadius": "30000"
    },
    "priceRange": "$90 - $990",
    "image": "https://canineconfidence.com.au/attached_assets/DSC_0096_1758792971820.webp",
    "logo": "https://canineconfidence.com.au/attached_assets/DSC_0096_1758792971820.webp",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/canineconfidence"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "90",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

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
      "@id": "https://canineconfidence.com.au/#localbusiness"
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
      "url": "https://canineconfidence.com.au/services"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
