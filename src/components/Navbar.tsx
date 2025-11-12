import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Home, MapPin, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

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
    { name: "Home", path: "/", icon: Home },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="hidden md:block fixed bottom-0 left-0 right-0 z-50 shadow-elevated border-t border-nav-border backdrop-blur-md transition-transform duration-300 bg-nav-background/95 rounded-t-xl">
      <div className="container mx-auto px-5 py-3 md:px-6 md:py-3.5">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-nav-foreground/90 hover:text-nav-foreground transition-all duration-300 font-semibold text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nav-foreground after:transition-all after:duration-300 hover:after:w-full px-2 py-1"
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </Link>
              );
            })}
            {user ? (
              <Button size="lg" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-amber-light/50 border-nav-border text-amber-text hover:bg-amber-light/70" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button size="lg" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-amber-light/50 border-nav-border text-amber-text hover:bg-amber-light/70" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            <Button size="lg" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
