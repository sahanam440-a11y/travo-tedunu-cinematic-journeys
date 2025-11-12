import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 shadow-elevated border-b border-nav-border backdrop-blur-md transition-transform duration-300 bg-nav-background/95">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <div className="relative">
              {/* Contrast booster for readability */}
              <div aria-hidden className="absolute -inset-4 pointer-events-none z-0 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,0.35), rgba(0,0,0,0) 70%)' }} />

              {/* Color aura - crisp, semantic tokens */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-full blur-md scale-110 animate-pulse-slow" />

              {/* Logo with enhanced visibility */}
              <img 
                src={logo}
                alt="Travo Tedunu Logo"
                className="relative z-10 h-10 md:h-14 w-auto object-contain"
                style={{
                  willChange: 'transform, filter',
                  transform: 'translateZ(0)',
                  imageRendering: 'auto',
                  filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8)) drop-shadow(0 0 8px rgba(255,255,255,0.3)) drop-shadow(0 0 20px rgba(255,200,0,0.3)) contrast(1.3) brightness(1.3) saturate(1.2)'
                }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-nav-foreground/90 hover:text-nav-foreground transition-all duration-300 font-semibold text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nav-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Button size="sm" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-amber-light/50 border-nav-border text-amber-text hover:bg-amber-light/70" asChild>
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-amber-light/50 border-nav-border text-amber-text hover:bg-amber-light/70" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            <Button size="sm" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 font-semibold bg-action text-action-foreground hover:bg-action-hover" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
