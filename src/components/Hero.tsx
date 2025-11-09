import { ArrowRight, Sparkles, Percent, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

// Import hero images for backgrounds
import delhi1 from "@/assets/hero/delhi-1.jpg";
import mathura1 from "@/assets/hero/mathura-1.jpg";
import dehradun1 from "@/assets/hero/dehradun-1.jpg";

const promoOffers = [
  {
    id: 1,
    badge: "Limited Time",
    title: "Early Bird Special",
    subtitle: "Book 30 Days in Advance",
    discount: "40% OFF",
    description: "On All Premium Packages",
    cta: "Book Now",
    bgImage: delhi1,
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    badge: "Flash Sale",
    title: "Weekend Getaway",
    subtitle: "Escape This Weekend",
    discount: "₹9,999",
    description: "Starting From - All Inclusive",
    cta: "Explore Deals",
    bgImage: mathura1,
    color: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    badge: "Best Value",
    title: "Group Travel Offer",
    subtitle: "Groups of 5+",
    discount: "30% OFF",
    description: "Plus Free Guide & Transport",
    cta: "Get Started",
    bgImage: dehradun1,
    color: "from-cyan-500 to-blue-600",
  },
];

const Hero = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promoOffers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentOffer = promoOffers[currentPromoIndex];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {promoOffers.map((offer, index) => (
          <div
            key={offer.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentPromoIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img
              src={offer.bgImage}
              alt={offer.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-80`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Promotional Banner */}
      <div 
        className="relative z-10 container mx-auto px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-6xl mx-auto">
          {/* Promotional Card */}
          <div className="glass-card rounded-3xl p-6 md:p-12 space-y-6 md:space-y-8 animate-fade-up shadow-strong">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge 
                className={`bg-gradient-to-r ${currentOffer.color} text-white text-xs md:text-sm px-4 py-2 animate-pulse-slow`}
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                {currentOffer.badge}
              </Badge>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground animate-scale-in">
                {currentOffer.title}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                {currentOffer.subtitle}
              </p>

              {/* Discount Display */}
              <div className="relative py-6 md:py-8">
                <div className={`inline-flex items-center justify-center bg-gradient-to-r ${currentOffer.color} text-white rounded-2xl px-8 md:px-16 py-6 md:py-10 shadow-glow animate-scale-in`}>
                  <Percent className="w-8 h-8 md:w-12 md:h-12 mr-3 md:mr-4" />
                  <span className="text-5xl sm:text-6xl md:text-8xl font-bold">
                    {currentOffer.discount}
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium">
                {currentOffer.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${currentOffer.color} text-white text-base md:text-xl px-10 md:px-16 py-6 md:py-8 rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 animate-bounce-subtle`}
                asChild
              >
                <Link to="/destinations">
                  {currentOffer.cta}
                  <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </Button>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 md:pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-background/50">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <div className="text-left">
                  <p className="text-xs md:text-sm font-semibold text-foreground">Instant Booking</p>
                  <p className="text-xs text-muted-foreground">Confirm in Minutes</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-background/50">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                <div className="text-left">
                  <p className="text-xs md:text-sm font-semibold text-foreground">50+ Destinations</p>
                  <p className="text-xs text-muted-foreground">Across India</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-background/50">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <div className="text-left">
                  <p className="text-xs md:text-sm font-semibold text-foreground">Premium Experience</p>
                  <p className="text-xs text-muted-foreground">5-Star Rated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {promoOffers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromoIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPromoIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to promo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
