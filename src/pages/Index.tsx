import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { destinations } from "@/data/destinations";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { useSEO } from "@/hooks/useSEO";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/seoHelpers";

const DestinationCard = lazy(() => import("@/components/DestinationCard"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useSEO();

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" }
  ]);

  const faqs = generateFAQSchema([
    {
      question: "What destinations does Travo Tedunu cover?",
      answer: "We offer premium tour packages to Delhi, Goa, Mathura, and Dehradun. Each destination is carefully curated with expert local guides and authentic experiences."
    },
    {
      question: "What is included in the tour packages?",
      answer: "Our packages include accommodation, guided tours, transportation, and select meals. Specific inclusions vary by destination and package type."
    },
    {
      question: "How do I book a tour with Travo Tedunu?",
      answer: "You can book directly through our website by visiting the booking page or any destination page. We offer instant confirmation and flexible payment options."
    },
    {
      question: "What makes Travo Tedunu different from other travel agencies?",
      answer: "We focus on authentic, tailored experiences with expert local guides. Our 98% satisfaction rate and 500+ happy travelers speak to our commitment to quality and personalized service."
    }
  ]);

  return (
    <>
      <SEO 
        title="Travo Tedunu - Best India Tour Packages 2025 | Delhi, Goa, Mathura & Dehradun Tours"
        description="India's #1 rated travel agency ⭐ Book premium tour packages: Delhi heritage from ₹2,499, Goa beaches ₹4,999+, Mathura spiritual ₹1,199+, Dehradun adventure ₹3,999+. 500+ happy travelers • 98% satisfaction rate • Expert local guides • Instant booking • Best prices guaranteed 2025."
        keywords="Travo Tedunu, India tour packages 2025, Delhi tour package, Goa beach package, Mathura pilgrimage tour, Dehradun adventure, best travel agency India, heritage tours Delhi, spiritual travel Mathura, beach holidays Goa, India tourism, customized tours, budget travel India, luxury tours, family vacation India, honeymoon packages, group tours India, solo travel India"
        url="/"
        schema={[organizationSchema, websiteSchema, breadcrumbs, faqs]}
        image="https://travotedunu.com/assets/hero/delhi-1.jpg"
      />
      <div className="min-h-screen pb-16 md:pb-0">
        <Navbar />
        <Hero />

      {/* Featured Destinations */}
      <Suspense fallback={<div className="py-24 container mx-auto px-4" />}>
        <section className="py-24 container mx-auto px-4 relative">
          <div className="absolute inset-0 gradient-lavender-mist -z-10"></div>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Featured Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover India's most captivating journeys, curated for curious souls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
      <BottomNav />
      </div>
    </>
  );
};

export default Index;
