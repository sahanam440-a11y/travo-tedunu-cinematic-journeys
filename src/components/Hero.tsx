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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {/* Video Background - Uncomment and add your video file */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video> */}
        
        {/* Image Slideshow */}
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
              className="w-full h-full object-cover object-[50%_40%] md:object-center scale-105 md:scale-100"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        {/* Enhanced overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-balance leading-tight px-2">
            Travel, Tailored & Timeless
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto text-balance px-4">
            Curated journeys across India with cinematic visuals and authentic experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 px-4">
            <Button
              size="lg"
              className="gradient-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:shadow-elevated transition-all w-full sm:w-auto"
              asChild
            >
              <Link to="/destinations">
                Start Planning
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
              asChild
            >
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-8 md:pt-12 text-white/95 text-xs md:text-sm px-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
              <span>Verified Local Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
              <span>Best-Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
