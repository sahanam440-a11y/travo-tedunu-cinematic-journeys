import { MapPin, Clock, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  priceFrom: number;
  duration: string;
  tags: string[];
  slug: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden glass-card hover-lift border-2 border-border/30 hover:border-primary/40 transition-all duration-500">
      <Link to={`/destination/${destination.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={destination.image}
            alt={`${destination.name} tour package - ${destination.tagline}. Starting from ₹${destination.priceFrom.toLocaleString()}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 rounded-full px-4 py-2 flex items-center gap-1.5 bg-action text-action-foreground font-bold text-sm shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-110">
            <IndianRupee className="h-4 w-4" />
            {destination.priceFrom.toLocaleString()}
          </div>
        </div>

        <CardContent className="p-6 space-y-5">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {destination.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed line-clamp-2">
              {destination.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {destination.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-primary/30 bg-primary/5 hover:bg-primary/15 transition-colors duration-300">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{destination.duration}</span>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:text-primary font-semibold hover:bg-primary/10 transition-all duration-300">
              View Details →
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DestinationCard;
