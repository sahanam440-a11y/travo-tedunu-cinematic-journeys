import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import only first few images eagerly for performance
import delhi1 from "@/assets/hero/delhi-1.jpg";
import delhi2 from "@/assets/hero/delhi-2.jpg";
import delhi3 from "@/assets/hero/delhi-3.jpg";
import mathura1 from "@/assets/hero/mathura-1.jpg";
import dehradun1 from "@/assets/hero/dehradun-1.jpg";

// Lazy load remaining images
const heroImages = [
  { src: delhi1, alt: "India Gate at sunset - Delhi heritage tour", priority: true },
  { src: delhi2, alt: "Red Fort - Historic Mughal architecture in Delhi", priority: false },
  { src: delhi3, alt: "Chandni Chowk market - Old Delhi street food experience", priority: false },
  { src: mathura1, alt: "Krishna Janmabhoomi Temple - Sacred pilgrimage site", priority: false },
  { src: dehradun1, alt: "Robber's Cave - Natural wonder in Dehradun", priority: false },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];
  const nextIndex = (currentImageIndex + 1) % heroImages.length;
  const nextImage = heroImages[nextIndex];

  return (
    <section className="relative h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow - Only render current image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            sizes="100vw"
          />
        </div>
        
        {/* Preload next image invisibly */}
        <link rel="preload" as="image" href={nextImage.src} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-4 md:pt-32 pb-16 md:pb-20 text-center">
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
