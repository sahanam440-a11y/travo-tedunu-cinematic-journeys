import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(351_74%_36%)] md:bg-background/95 backdrop-blur-md border-b border-white/20 md:border-border shadow-soft">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 text-lg md:text-2xl font-serif font-bold">
            <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white md:text-primary" />
            <span className="text-white md:bg-gradient-to-r md:from-primary md:to-secondary md:bg-clip-text md:text-transparent">
              Travo Tedunu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="gradient-primary">
              Book Now
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
            <Button size="sm" className="w-full gradient-primary text-sm h-8">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
