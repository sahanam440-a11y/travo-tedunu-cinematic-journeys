import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

// Single optimized image for best performance
import goa1 from "@/assets/hero/goa-1.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden pb-40 md:pb-48">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={goa1}
            alt="Beautiful Goa beach sunset - Christmas New Year Special"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            sizes="100vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
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
