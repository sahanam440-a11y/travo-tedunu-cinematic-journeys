import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelersParallax from "@/components/animations/TravelersParallax";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { breadcrumbSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Destinations = () => {
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

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
  ]);

  return (
    <>
      <SEO
        title="India Tour Packages 2025 - Delhi, Goa, Mathura, Dehradun | Travo Tedunu"
        description="Discover best tour packages for India destinations. Delhi heritage tours ₹2,499+, Goa beach packages ₹4,999+, Mathura spiritual journeys ₹1,199+, Dehradun adventures ₹3,999+. Book now with Travo Tedunu - India's trusted travel agency."
        keywords="India tour packages 2025, Delhi package, Goa tour, Mathura package, Dehradun tour, India travel deals, best tour packages India, heritage tours, beach packages, pilgrimage tours, adventure tours, cultural tourism India, Travo Tedunu packages"
        url="/destinations"
        schema={breadcrumbs}
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

      <BottomNav />
      </div>
    </>
  );
};

export default Destinations;
