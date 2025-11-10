import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import all hero images
import delhi1 from "@/assets/hero/delhi-1.jpg";
import delhi2 from "@/assets/hero/delhi-2.jpg";
import delhi3 from "@/assets/hero/delhi-3.jpg";
import delhi4 from "@/assets/hero/delhi-4.jpg";
import delhi5 from "@/assets/hero/delhi-5.jpg";
import delhi6 from "@/assets/hero/delhi-6.jpg";
import mathura1 from "@/assets/hero/mathura-1.jpg";
import mathura2 from "@/assets/hero/mathura-2.jpg";
import mathura3 from "@/assets/hero/mathura-3.jpg";
import mathura4 from "@/assets/hero/mathura-4.jpg";
import mathura5 from "@/assets/hero/mathura-5.jpg";
import mathura6 from "@/assets/hero/mathura-6.jpg";
import dehradun1 from "@/assets/hero/dehradun-1.jpg";
import dehradun2 from "@/assets/hero/dehradun-2.jpg";
import dehradun3 from "@/assets/hero/dehradun-3.jpg";
import dehradun4 from "@/assets/hero/dehradun-4.jpg";
import dehradun5 from "@/assets/hero/dehradun-5.jpg";
import dehradun6 from "@/assets/hero/dehradun-6.jpg";
import dehradun7 from "@/assets/hero/dehradun-7.jpg";
import dehradun8 from "@/assets/hero/dehradun-8.jpg";

const heroImages = [
  delhi1, delhi2, delhi3, delhi4, delhi5, delhi6,
  mathura1, mathura2, mathura3, mathura4, mathura5, mathura6,
  dehradun1, dehradun2, dehradun3, dehradun4, dehradun5, dehradun6, dehradun7, dehradun8
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Beautiful destination in India - slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="100vw"
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="animate-fade-up space-y-4">
            <div className="inline-block px-6 py-2 rounded-full glass text-foreground font-medium mb-4 animate-bounce-subtle shadow-lg">
              ✨ Discover Your Next Adventure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white text-balance leading-tight px-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Travel, Tailored & Timeless
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto text-balance px-4 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Curated journeys across India with cinematic visuals and authentic experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 pt-4 md:pt-6 px-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="gradient-primary text-base md:text-lg px-8 md:px-10 py-6 md:py-7 hover:shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto font-semibold shadow-elevated"
              asChild
            >
              <Link to="/booking">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 glass border-white/40 !text-white hover:bg-white/25 hover:scale-105 transition-all duration-300 w-full sm:w-auto font-semibold"
              asChild
            >
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-10 md:pt-14 text-sm md:text-base px-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full hover-glow shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse-slow shadow-glow" />
              <span className="font-semibold text-foreground">Verified Local Guides</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full hover-glow shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-secondary animate-pulse-slow shadow-glow" />
              <span className="font-semibold text-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full hover-glow shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-slow shadow-glow" />
              <span className="font-semibold text-foreground">Best-Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
