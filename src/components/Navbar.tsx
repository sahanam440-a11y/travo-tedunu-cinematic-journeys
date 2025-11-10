import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.innerWidth < 768) { // Only on mobile
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-elevated border-b border-nav-border backdrop-blur-md rounded-b-xl transition-transform duration-300 bg-nav-background ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 text-base md:text-2xl font-serif font-bold hover:scale-105 transition-transform duration-300">
            <MapPin className="h-4 w-4 md:h-7 md:w-7 text-secondary drop-shadow-[0_0_8px_rgba(217,119,6,0.6)] animate-bounce-subtle" />
            <span className="text-nav-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Travo Tedunu
            </span>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-nav-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-2 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-nav-foreground/90 hover:text-nav-foreground transition-colors font-medium text-sm py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Button size="sm" variant="outline" className="w-full text-sm h-8 bg-amber-light/30 border-nav-border text-amber-text hover:bg-amber-light/50" asChild onClick={() => setIsOpen(false)}>
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="w-full text-sm h-8 bg-amber-light/30 border-nav-border text-amber-text hover:bg-amber-light/50" asChild onClick={() => setIsOpen(false)}>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            <Button size="sm" className="w-full text-sm h-8 bg-action text-action-foreground hover:bg-action-hover" asChild onClick={() => setIsOpen(false)}>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
