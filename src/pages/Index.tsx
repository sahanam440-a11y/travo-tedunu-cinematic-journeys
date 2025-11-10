import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { destinations } from "@/data/destinations";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const Index = () => {
  return (
    <>
      <SEO
        title="Travo Tedunu - Travel, Tailored & Timeless | India Tour Packages"
        description="Curated journeys across India with cinematic visuals and authentic experiences. Explore heritage tours, spiritual pilgrimages, and mountain adventures with expert local guides."
        keywords="travel India, India tours, Delhi heritage tour, Mathura pilgrimage, Dehradun adventure, spiritual travel, cultural experiences, India vacation packages, customized tours, authentic travel"
        url="/"
        schema={[organizationSchema, websiteSchema]}
      />
      <div className="min-h-screen pb-16 md:pb-0">
        <Navbar />
        <Hero />

      {/* Featured Destinations */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="absolute inset-0 gradient-lavender-mist -z-10"></div>
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover India's most captivating journeys, curated for curious souls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </section>

        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default Index;
