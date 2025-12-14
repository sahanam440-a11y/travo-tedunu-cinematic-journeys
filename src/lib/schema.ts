import { DestinationDetail } from "@/data/destinations";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Travo Tedunu",
  alternateName: ["Travo Tedunu Travel", "Travo Tedunu Tours", "TED UNU Travel"],
  description: "India's premier travel agency specializing in curated tour packages across Delhi, Goa, Mathura, Dehradun and beyond. Expert local guides, authentic experiences, and sustainable tourism since 2024.",
  url: "https://travotedunu.com",
  logo: "https://lovable.dev/opengraph-image-p98pqg.png",
  image: "https://lovable.dev/opengraph-image-p98pqg.png",
  telephone: "+91-9876543210",
  email: "info@travotedunu.com",
  priceRange: "₹₹",
  foundingDate: "2024",
  slogan: "Travel, Tailored & Timeless",
  knowsAbout: [
    "India Tour Packages",
    "Delhi Tours",
    "Goa Packages",
    "Mathura Pilgrimage",
    "Dehradun Adventure",
    "Cultural Tourism",
    "Spiritual Travel",
    "Heritage Tours",
    "Beach Holidays",
    "Mountain Treks"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Travel Street",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6139",
    longitude: "77.2090"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India"
    },
    {
      "@type": "City",
      name: "Delhi"
    },
    {
      "@type": "City",
      name: "Goa"
    },
    {
      "@type": "City",
      name: "Mathura"
    },
    {
      "@type": "City",
      name: "Dehradun"
    }
  ],
  sameAs: [
    "https://twitter.com/TravoTedunu",
    "https://facebook.com/travotedunu",
    "https://instagram.com/travotedunu",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      email: "info@travotedunu.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Rajesh Kumar"
      },
      datePublished: "2024-12-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Excellent Delhi tour package! The local guide was knowledgeable and the itinerary was perfect. Highly recommend Travo Tedunu for India tours."
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Priya Sharma"
      },
      datePublished: "2024-12-10",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Amazing Goa beach package! Well organized, great accommodations, and incredible experiences. Best travel agency for Indian destinations."
    }
  ]
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
  name: `${destination.name} Tour Package - Travo Tedunu`,
  description: `${destination.overview} Book ${destination.name} package starting from ₹${destination.priceFrom}. ${destination.duration} tour with expert guides.`,
  url: `https://travotedunu.com/destination/${destination.slug}`,
  image: destination.gallery.map(img => img.image),
  touristType: destination.tags.join(", "),
  duration: destination.duration,
  keywords: `${destination.name} tour package, ${destination.name} trip, ${destination.name} travel, ${destination.tags.join(", ")}, India tourism`,
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
    name: `${destination.name} Tour Package`,
    price: destination.priceFrom,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
    priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    url: `https://travotedunu.com/booking?destination=${destination.id}`,
    seller: {
      "@type": "TravelAgency",
      name: "Travo Tedunu"
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      price: destination.priceFrom,
      priceCurrency: "INR",
      valueAddedTaxIncluded: true
    }
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
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Travel Enthusiast"
      },
      datePublished: new Date().toISOString().split('T')[0],
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: `Excellent ${destination.name} tour package! ${destination.tagline}. Highly recommended!`
    }
  ]
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
