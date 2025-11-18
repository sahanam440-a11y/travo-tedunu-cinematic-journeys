import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { organizationSchema } from "@/lib/schema";
import { Search } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/seoHelpers";

const Destinations = () => {
  useSEO();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(destinations.flatMap((dest) => dest.tags))
  );

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || dest.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
  ]);

  const faqs = generateFAQSchema([
    {
      question: "Which destinations are available for booking?",
      answer: "We offer tours to Delhi (heritage), Goa (beaches), Mathura (spiritual), and Dehradun (adventure). Each destination has multiple package options."
    },
    {
      question: "How long are the tour packages?",
      answer: "Tours range from 2 to 4 days depending on the destination. Delhi and Mathura are 2-day packages, Dehradun is 3 days, and Goa is 4 days."
    },
    {
      question: "What's included in the package price?",
      answer: "All packages include accommodation, guided tours, transportation, and select meals. Specific inclusions are listed on each destination page."
    }
  ]);

  return (
    <>
      <SEO
        title="All Destinations - India Tour Packages 2025 | Explore Delhi, Goa, Mathura & Dehradun"
        description="Browse India's best tour packages ⭐ Delhi heritage tours ₹2,499+, Goa beach holidays ₹4,999+, Mathura spiritual journeys ₹1,199+, Dehradun mountain adventures ₹3,999+. Compare packages • Read reviews • Book instantly • Expert local guides • 500+ happy travelers."
        keywords="India tour destinations, all tour packages, Delhi heritage tours, Goa beach packages, Mathura pilgrimage tours, Dehradun adventure trips, India vacation packages, explore India, best destinations India, travel packages 2025, budget tours India, luxury India tours, family vacation packages"
        url="/destinations"
        schema={[breadcrumbs, organizationSchema, faqs]}
        image="https://travotedunu.com/assets/hero/delhi-1.jpg"
      />
      <div className="min-h-screen pb-16 md:pb-0 relative">
      <div className="fixed inset-0 gradient-pearl-elegance -z-10"></div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 md:pt-32 pb-16 relative">
        <div className="absolute inset-0 gradient-champagne-glow -z-10"></div>
        <div className="container mx-auto px-4 space-y-6">
          <PageBreadcrumb 
            items={[{ label: "Destinations" }]}
            className="animate-fade-up"
          />
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground animate-fade-up">
              Explore Destinations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              Discover the beauty of India, one journey at a time
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 container mx-auto px-4">
        <div className="space-y-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={!selectedTag ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/90"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90"
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-24 container mx-auto px-4">
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No destinations found matching your criteria.
            </p>
          </div>
        )}
      </section>

      <Footer />
      <BottomNav />
      </div>
    </>
  );
};

export default Destinations;
