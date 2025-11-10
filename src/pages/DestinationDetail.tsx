import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { destinations } from "@/data/destinations";
import { destinationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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
import { SnowfallAnimation } from "@/components/animations/SnowfallAnimation";
import { DelhiHeritage } from "@/components/animations/DelhiHeritage";
import { DiyaAnimation } from "@/components/animations/DiyaAnimation";
import { DestinationGallery } from "@/components/DestinationGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const DestinationDetail = () => {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <NotFound />;
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: destination.name, url: `/destination/${destination.slug}` },
  ]);

  const combinedSchema = [
    destinationSchema(destination),
    breadcrumbs,
    faqSchema(destination.faqs),
  ];

  return (
    <>
      <SEO
        title={`${destination.name} Tour Package - ${destination.tagline}`}
        description={`${destination.overview.substring(0, 155)}...`}
        keywords={`${destination.name} tour, ${destination.tags.join(", ")}, India travel, ${destination.name} package, ${destination.name} tourism`}
        url={`/destination/${destination.slug}`}
        image={destination.gallery[0].image}
        type="article"
        schema={combinedSchema}
      />
      <div className="min-h-screen pb-16 md:pb-0">
        <Navbar />
      
      {/* Destination-specific animations */}
      {destination.slug === "dehradun" && <SnowfallAnimation />}
      {destination.slug === "mathura" && <DiyaAnimation />}
      {destination.slug === "delhi" && <DelhiHeritage />}

      {/* Hero Gallery */}
      <section className="relative">
        <div className="container mx-auto px-4 pt-4 md:pt-24 pb-8">
          <PageBreadcrumb 
            items={[
              { label: "Destinations", href: "/destinations" },
              { label: destination.name }
            ]}
            className="mb-4 animate-fade-up"
          />
          <DestinationGallery images={destination.gallery} title={destination.name} />
          
          {/* Overlay Info */}
          <div className="mt-6 space-y-4 bg-background/90 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              {destination.name}
            </h1>
            <p className="text-xl text-foreground/80">{destination.tagline}</p>
            <div className="flex flex-wrap items-center gap-6 text-foreground/80">
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
            <section className="bg-background/90 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Overview</h2>
              <p className="text-foreground/90 leading-relaxed">
                {destination.overview}
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-background/90 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <Card key={index} className="border-border/50 bg-card">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-foreground">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-background/90 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {destination.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="text-left hover:text-primary text-foreground">
                      <span className="font-semibold">
                        Day {day.day}: {day.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      {day.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Included/Excluded */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background/90 backdrop-blur-sm p-6 rounded-lg">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {destination.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
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
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-background/90 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {destination.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
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

                <Button size="lg" className="w-full text-lg shadow-elevated hover:shadow-glow transition-all duration-300 bg-action text-action-foreground hover:bg-action-hover" asChild>
                  <Link to={`/booking?destination=${destination.id}`}>
                    Book This Trip
                  </Link>
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
        <WhatsAppButton message={`Hi! I'm interested in the ${destination.name} tour package. Can you provide more details?`} />
      </div>
    </>
  );
};

export default DestinationDetail;
