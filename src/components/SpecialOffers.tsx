import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Percent, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Offer {
  id: string;
  destination: string;
  slug: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  validUntil: Date;
  badge: "Hot Deal" | "Limited Time" | "Best Seller";
  description: string;
}

const offers: Offer[] = [
  {
    id: "1",
    destination: "Goa Beach Paradise",
    slug: "goa",
    originalPrice: 4999,
    discountedPrice: 3999,
    discount: 20,
    image: "/src/assets/goa.jpg",
    validUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    badge: "Hot Deal",
    description: "Sun, sand, and surf with exclusive beach access"
  },
  {
    id: "2",
    destination: "Delhi Heritage Tour",
    slug: "delhi",
    originalPrice: 2499,
    discountedPrice: 1999,
    discount: 20,
    image: "/src/assets/delhi.jpg",
    validUntil: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    badge: "Limited Time",
    description: "Explore monuments and Mughal architecture"
  },
  {
    id: "3",
    destination: "Mathura Spiritual Journey",
    slug: "mathura",
    originalPrice: 1199,
    discountedPrice: 999,
    discount: 17,
    image: "/src/assets/mathura.jpg",
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    badge: "Best Seller",
    description: "Sacred temples and divine experiences"
  }
];

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newTimeLeft: { [key: string]: string } = {};
      
      offers.forEach(offer => {
        const difference = offer.validUntil.getTime() - Date.now();
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          newTimeLeft[offer.id] = `${days}d ${hours}h`;
        } else {
          newTimeLeft[offer.id] = "Expired";
        }
      });
      
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 container mx-auto px-4 relative">
      <div className="absolute inset-0 gradient-sunset-glow -z-10"></div>
      
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Limited Time Offers</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
          Special Deals & Discounts
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on these exclusive travel packages with amazing discounts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card 
            key={offer.id} 
            className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={offer.image}
                alt={offer.destination}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge 
                  variant={offer.badge === "Hot Deal" ? "destructive" : "default"}
                  className="font-bold shadow-lg"
                >
                  {offer.badge}
                </Badge>
              </div>
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold shadow-lg">
                <Percent className="w-4 h-4 mb-1" />
                <span className="text-lg">{offer.discount}%</span>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {offer.destination}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {offer.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Ends in: <span className="font-semibold text-foreground">{timeLeft[offer.id]}</span></span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ₹{offer.discountedPrice.toLocaleString()}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{offer.originalPrice.toLocaleString()}
                </span>
              </div>

              <Link to={`/destination/${offer.slug}`} className="block">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Grab This Deal
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground">
          * Prices are subject to availability. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
};

export default SpecialOffers;
