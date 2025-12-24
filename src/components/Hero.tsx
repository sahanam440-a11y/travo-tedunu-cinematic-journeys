import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

// Goa images
import goa1 from "@/assets/hero/goa-1.jpg";
import goa2 from "@/assets/hero/goa-2.jpg";
import goa3 from "@/assets/hero/goa-3.jpg";
import goa4 from "@/assets/hero/goa-4.jpg";
import goa5 from "@/assets/hero/goa-5.jpg";
import goa6 from "@/assets/hero/goa-6.jpg";
import goa7 from "@/assets/hero/goa-7.jpg";
import goa8 from "@/assets/hero/goa-8.jpg";

// Dehradun images
import dehradun1 from "@/assets/hero/dehradun-1.jpg";
import dehradun2 from "@/assets/hero/dehradun-2.jpg";
import dehradun3 from "@/assets/hero/dehradun-3.jpg";
import dehradun4 from "@/assets/hero/dehradun-4.jpg";
import dehradun5 from "@/assets/hero/dehradun-5.jpg";
import dehradun6 from "@/assets/hero/dehradun-6.jpg";
import dehradun7 from "@/assets/hero/dehradun-7.jpg";
import dehradun8 from "@/assets/hero/dehradun-8.jpg";

// Manali images
import manali1 from "@/assets/hero/manali-1.jpg";
import manali2 from "@/assets/hero/manali-2.jpg";
import manali3 from "@/assets/hero/manali-3.jpg";
import manali4 from "@/assets/hero/manali-4.jpg";
import manali5 from "@/assets/hero/manali-5.jpg";
import manali6 from "@/assets/hero/manali-6.jpg";

// Mathura images
import mathura1 from "@/assets/hero/mathura-1.jpg";
import mathura2 from "@/assets/hero/mathura-2.jpg";
import mathura3 from "@/assets/hero/mathura-3.jpg";
import mathura4 from "@/assets/hero/mathura-4.jpg";
import mathura5 from "@/assets/hero/mathura-5.jpg";
import mathura6 from "@/assets/hero/mathura-6.jpg";

// Shimla images
import shimla1 from "@/assets/hero/shimla-1.jpg";
import shimla2 from "@/assets/hero/shimla-2.jpg";
import shimla3 from "@/assets/hero/shimla-3.jpg";
import shimla4 from "@/assets/hero/shimla-4.jpg";
import shimla5 from "@/assets/hero/shimla-5.jpg";
import shimla6 from "@/assets/hero/shimla-6.jpg";

const heroImages = [
  { src: goa1, alt: "Beautiful Goa beach at sunset" },
  { src: goa2, alt: "Goa coastal paradise" },
  { src: goa3, alt: "Goa beach vibes" },
  { src: goa4, alt: "Goa tropical scenery" },
  { src: goa5, alt: "Goa palm trees and ocean" },
  { src: goa6, alt: "Goa golden sands" },
  { src: goa7, alt: "Goa serene waters" },
  { src: goa8, alt: "Goa breathtaking views" },
  { src: dehradun1, alt: "Dehradun mountain views" },
  { src: dehradun2, alt: "Dehradun natural beauty" },
  { src: dehradun3, alt: "Dehradun scenic landscapes" },
  { src: dehradun4, alt: "Dehradun valley views" },
  { src: dehradun5, alt: "Dehradun serene nature" },
  { src: dehradun6, alt: "Dehradun lush greenery" },
  { src: dehradun7, alt: "Dehradun hill station" },
  { src: dehradun8, alt: "Dehradun peaceful retreat" },
  { src: manali1, alt: "Manali snow-capped mountains" },
  { src: manali2, alt: "Manali adventure paradise" },
  { src: manali3, alt: "Manali scenic beauty" },
  { src: manali4, alt: "Manali valley views" },
  { src: manali5, alt: "Manali mountain retreat" },
  { src: manali6, alt: "Manali pristine nature" },
  { src: mathura1, alt: "Mathura spiritual heritage" },
  { src: mathura2, alt: "Mathura temple city" },
  { src: mathura3, alt: "Mathura divine atmosphere" },
  { src: mathura4, alt: "Mathura cultural beauty" },
  { src: mathura5, alt: "Mathura sacred sites" },
  { src: mathura6, alt: "Mathura spiritual journey" },
  { src: shimla1, alt: "Shimla colonial charm" },
  { src: shimla2, alt: "Shimla hill station beauty" },
  { src: shimla3, alt: "Shimla mountain views" },
  { src: shimla4, alt: "Shimla scenic landscapes" },
  { src: shimla5, alt: "Shimla pine forests" },
  { src: shimla6, alt: "Shimla queen of hills" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden pb-40 md:pb-48">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              width="1920"
              height="1080"
              sizes="100vw"
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-6" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-2 md:pt-6 pb-6 md:pb-10 text-center">
        <div className="max-w-4xl mx-auto space-y-2 md:space-y-4">
          {/* Logo - All Devices */}
          <div className="flex justify-center mb-0 md:mb-2 animate-fade-up">
            <div className="relative">
              {/* Contrast booster (no blur) for perfect readability */}
              <div aria-hidden className="absolute -inset-6 pointer-events-none z-0 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,0.55), rgba(0,0,0,0) 70%)' }} />

              {/* Color aura - crisp, semantic tokens */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/30 via-accent/25 to-primary/30 rounded-full blur-md scale-105" />

              {/* Logo with maximum clarity and emphasis */}
              <img 
                src={logo}
                alt="Travo Tedunu Logo"
                className="relative z-10 h-36 sm:h-52 w-auto object-contain"
                style={{
                  willChange: 'transform, filter',
                  transform: 'translateZ(0)',
                  imageRendering: 'auto',
                  filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 10px rgba(255,255,255,0.4)) drop-shadow(0 0 25px rgba(255,200,0,0.35)) contrast(1.35) brightness(1.35) saturate(1.25)'
                }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="animate-fade-up space-y-2">
            <div className="inline-block px-6 py-2 rounded-full glass text-foreground font-medium mb-1 shadow-lg">
              ✨ Discover Your Next Adventure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white text-balance leading-tight px-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Travel, Tailored & Timeless
            </h1>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white max-w-3xl mx-auto text-balance px-4 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Curated journeys across India with cinematic visuals and authentic experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2 md:pt-6 px-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 hover:shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto font-semibold shadow-elevated bg-action text-action-foreground hover:bg-action-hover"
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
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto font-semibold"
              asChild
            >
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
