import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Travo Tedunu
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Travel, Tailored & Timeless. Curated journeys across India with authentic experiences.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/destination/delhi"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Delhi
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/mathura"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mathura
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/dehradun"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dehradun
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@travotedunu.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="h-9 text-sm" />
                <Button size="sm" className="gradient-primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Travo Tedunu · Crafted for Curious Souls</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
