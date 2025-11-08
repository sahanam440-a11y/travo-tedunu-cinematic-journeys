import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stunning Indian landscape with mountains and river at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-balance leading-tight">
            Travel, Tailored & Timeless
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Curated journeys across India with cinematic visuals and authentic experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="gradient-primary text-lg px-8 py-6 hover:shadow-elevated transition-all"
              asChild
            >
              <Link to="/destinations">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/90 text-sm">
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
