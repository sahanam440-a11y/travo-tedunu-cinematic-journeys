import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { BookingForm } from "@/components/BookingForm";
import { destinations } from "@/data/destinations";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preSelectedDestination = searchParams.get("destination") || undefined;

  const destinationOptions = destinations.map((dest) => ({
    id: dest.id,
    name: dest.name,
    priceFrom: dest.priceFrom,
    duration: dest.duration,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 gradient-ocean-serenity">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-up">
            <div className="inline-block px-6 py-2 rounded-full glass text-foreground text-sm font-medium mb-4">
              ✨ Custom Booking Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Create Your Perfect Journey
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Customize every detail of your trip with instant pricing and flexible options
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <BookingForm
            destinations={destinationOptions}
            preSelectedDestination={preSelectedDestination}
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 gradient-elegant border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Booking;
