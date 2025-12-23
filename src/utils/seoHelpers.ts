// SEO Helper Functions - Auto-generate dynamic content

export const generatePageTitle = (pageName: string, includePrefix = true): string => {
  const prefix = includePrefix ? "Travo Tedunu - " : "";
  const suffix = " | Best India Tours 2025";
  return `${prefix}${pageName}${suffix}`;
};

export const generateMetaDescription = (
  destination: string,
  price: string,
  days: string,
  highlights: string[]
): string => {
  const highlightText = highlights.slice(0, 3).join(", ");
  return `Book ${destination} tour package from ${price} • ${days} • ${highlightText} • Expert guides • 98% satisfaction • Instant booking • Best prices guaranteed 2025`;
};

export const generateKeywords = (
  destination: string,
  category: string,
  additionalKeywords: string[] = []
): string => {
  const baseKeywords = [
    `${destination} tour package`,
    `${destination} tourism`,
    `visit ${destination}`,
    `${destination} travel guide`,
    `best ${destination} tours`,
    `${category} tours India`,
    `India vacation packages`,
    `Travo Tedunu ${destination}`,
    ...additionalKeywords,
  ];
  return baseKeywords.join(", ");
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://travotedunu.com${item.url}`,
    })),
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateTripSchema = (
  name: string,
  description: string,
  image: string,
  priceFrom: string,
  duration: string,
  location: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${name} Tour Package`,
    description,
    image,
    offers: {
      "@type": "Offer",
      price: priceFrom.replace(/[₹,]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    itinerary: {
      "@type": "ItemList",
      name: `${name} Itinerary`,
    },
    touristType: ["Leisure", "Cultural", "Adventure"],
    duration,
    arrivalTime: "09:00",
    departureTime: "18:00",
    provider: {
      "@type": "TravelAgency",
      name: "Travo Tedunu",
      url: "https://travotedunu.com",
      telephone: "+91-63631-50891",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
    },
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressCountry: "IN",
      },
    },
  };
};

// Auto-generate canonical URLs
export const getCanonicalUrl = (path: string): string => {
  const cleanPath = path.replace(/\/+$/, ""); // Remove trailing slashes
  return `https://travotedunu.com${cleanPath}`;
};

// Generate alternate language links
export const getAlternateLinks = (path: string) => {
  const cleanPath = path.replace(/\/+$/, "");
  return [
    { hreflang: "en-in", href: `https://travotedunu.com${cleanPath}` },
    { hreflang: "en", href: `https://travotedunu.com${cleanPath}` },
    { hreflang: "x-default", href: `https://travotedunu.com${cleanPath}` },
  ];
};

// Performance: Preload critical resources
export const getPreloadLinks = (images: string[] = []) => {
  return images.map((img) => ({
    rel: "preload",
    as: "image",
    href: img,
    fetchpriority: "high",
  }));
};

// Social media sharing optimization
export const getSocialMeta = (
  title: string,
  description: string,
  image: string,
  url: string
) => {
  return {
    og: {
      type: "website",
      title: `${title} | Travo Tedunu`,
      description,
      image,
      url: `https://travotedunu.com${url}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Travo Tedunu`,
      description,
      image,
    },
  };
};
