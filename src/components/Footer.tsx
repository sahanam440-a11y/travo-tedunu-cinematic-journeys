import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="glass-card border-t-2 border-primary/20 shadow-elevated">
      {/* Mobile Compact Footer */}
      <div className="md:hidden px-4 py-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="links" className="border-b-0">
            <AccordionTrigger className="text-sm font-semibold hover:no-underline py-2">
              Quick Links
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2 pb-2">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
                <Link to="/destinations" className="text-sm text-muted-foreground hover:text-primary">
                  Destinations
                </Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Facebook className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Instagram className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Youtube className="h-3.5 w-3.5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Travo Tedunu</p>
        </div>
      </div>

      {/* Desktop Full Footer */}
      <div className="hidden md:block container mx-auto px-4 py-12">
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
