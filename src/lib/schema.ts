import { DestinationDetail } from "@/data/destinations";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Travo Tedunu",
  description: "Curated journeys across India with cinematic visuals and authentic experiences",
  url: "https://travotedunu.com",
  logo: "https://lovable.dev/opengraph-image-p98pqg.png",
  image: "https://lovable.dev/opengraph-image-p98pqg.png",
  telephone: "+91-9876543210",
  email: "info@travotedunu.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
  },
  sameAs: [
    "https://twitter.com/TravoTedunu",
    "https://facebook.com/travotedunu",
    "https://instagram.com/travotedunu",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Travo Tedunu",
  url: "https://travotedunu.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://travotedunu.com/destinations?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const destinationSchema = (destination: DestinationDetail) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: destination.name,
  description: destination.overview,
  url: `https://travotedunu.com/destination/${destination.slug}`,
  image: destination.gallery.map(img => img.image),
  touristType: destination.tags.join(", "),
  itinerary: {
    "@type": "ItemList",
    itemListElement: destination.itinerary.map((day, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristAttraction",
        name: day.title,
        description: day.description,
      },
    })),
  },
  offers: {
    "@type": "Offer",
    price: destination.priceFrom,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
    priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    url: `https://travotedunu.com/booking?destination=${destination.id}`,
  },
  provider: {
    "@type": "TravelAgency",
    name: "Travo Tedunu",
    url: "https://travotedunu.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://travotedunu.com${item.url}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
