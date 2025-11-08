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
    <Card className="group overflow-hidden border-border/50 hover-lift bg-card">
      <Link to={`/destination/${destination.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={destination.image}
            alt={`${destination.name} - ${destination.tagline}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 flex items-center gap-1 text-white font-semibold text-sm">
            <IndianRupee className="h-3 w-3" />
            {destination.priceFrom.toLocaleString()}
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                {destination.name}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {destination.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {destination.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{destination.duration}</span>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:text-primary">
              View Details →
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DestinationCard;
