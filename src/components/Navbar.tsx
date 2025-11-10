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
    <nav className={`fixed top-0 left-0 right-0 z-50 gradient-primary shadow-elevated border-b border-white/20 backdrop-blur-md rounded-b-xl transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 text-base md:text-2xl font-serif font-bold hover:scale-105 transition-transform duration-300">
            <MapPin className="h-4 w-4 md:h-7 md:w-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-bounce-subtle" />
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Travo Tedunu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/90 hover:text-white transition-all duration-300 font-semibold text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Button size="sm" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-white/20 border-white/40 text-white hover:bg-white/30" asChild>
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 bg-white/20 border-white/40 text-white hover:bg-white/30" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            <Button size="sm" className="gradient-primary shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 font-semibold" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-white"
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
                className="block text-white/90 hover:text-white transition-colors font-medium text-sm py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Button size="sm" variant="outline" className="w-full text-sm h-8 bg-white/20 border-white/40 text-white hover:bg-white/30" asChild onClick={() => setIsOpen(false)}>
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="w-full text-sm h-8 bg-white/20 border-white/40 text-white hover:bg-white/30" asChild onClick={() => setIsOpen(false)}>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            <Button size="sm" className="w-full gradient-primary text-sm h-8" asChild onClick={() => setIsOpen(false)}>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
