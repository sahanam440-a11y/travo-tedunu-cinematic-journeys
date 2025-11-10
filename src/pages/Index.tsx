import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { destinations } from "@/data/destinations";

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "An absolutely magical experience! The guides were knowledgeable and every detail was perfectly planned.",
    rating: 5,
    location: "Mumbai, India",
    initial: "PS",
  },
  {
    name: "Rajesh Kumar",
    quote: "Travo Tedunu made our family trip unforgettable. The blend of culture and adventure was perfect.",
    rating: 5,
    location: "Bangalore, India",
    initial: "RK",
  },
  {
    name: "Ananya Patel",
    quote: "From booking to the journey, everything was seamless. Can't wait for our next adventure!",
    rating: 5,
    location: "Delhi, India",
    initial: "AP",
  },
];

const Index = () => {
  return (
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

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-ocean-serenity -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Traveler Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those who've journeyed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
