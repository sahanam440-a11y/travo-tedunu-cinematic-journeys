import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  location: string;
  initial: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="glass-card hover-glow border-2 border-border/30 hover:border-accent/40 transition-all duration-500">
      <CardContent className="p-7 space-y-5">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 transition-all duration-300 ${
                i < testimonial.rating
                  ? "fill-accent text-accent drop-shadow-glow"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <p className="text-foreground text-base md:text-lg italic leading-relaxed font-medium">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-4 pt-3 border-t border-border/50">
          <Avatar className="h-12 w-12 border-2 border-amber-300/50" style={{ background: '#fef08a' }}>
            <AvatarFallback className="text-amber-900 font-bold text-lg" style={{ background: '#fef08a' }}>
              {testimonial.initial}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground text-base">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground font-medium">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
