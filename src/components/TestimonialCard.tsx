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
    <Card className="glass border-border/50">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-primary text-primary"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <p className="text-foreground/90 italic leading-relaxed">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-3 pt-2">
          <Avatar className="h-10 w-10 bg-primary/10">
            <AvatarFallback className="bg-primary/20 text-primary font-semibold">
              {testimonial.initial}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
