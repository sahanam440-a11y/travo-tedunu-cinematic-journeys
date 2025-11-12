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
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-elevated border-b border-nav-border backdrop-blur-md transition-transform duration-300 bg-nav-background/95">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img src={logo} alt="Travo Tedunu Logo" className="h-10 md:h-14 w-auto object-contain" />
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
