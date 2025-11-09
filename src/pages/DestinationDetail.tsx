import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Clock, IndianRupee, Check, X } from "lucide-react";
import NotFound from "./NotFound";

const DestinationDetail = () => {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <div className="space-y-4 text-white">
            <div className="flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90">{destination.tagline}</p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5" />
                <span className="text-lg font-semibold">
                  From ₹{destination.priceFrom.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{destination.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {destination.overview}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-foreground">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {destination.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      <span className="font-semibold">
                        Day {day.day}: {day.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {day.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Included/Excluded */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {destination.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-destructive">
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {destination.excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {destination.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-border/50">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Price starts from</p>
                  <div className="flex items-baseline gap-1">
                    <IndianRupee className="h-6 w-6 text-primary" />
                    <span className="text-4xl font-bold text-foreground">
                      {destination.priceFrom.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </div>

                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{destination.name}, India</span>
                  </div>
                </div>

                <Button size="lg" className="w-full gradient-primary text-lg">
                  Book This Trip
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a
                    href={destination.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    View on Map
                  </a>
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Have questions? Contact our travel experts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default DestinationDetail;
