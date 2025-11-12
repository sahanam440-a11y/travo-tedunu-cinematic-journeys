import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelersParallax from "@/components/animations/TravelersParallax";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Heart } from "lucide-react";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, crafting experiences that inspire wanderlust.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Our team of local guides ensures authentic, immersive experiences.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Excellence in every detail, from planning to execution.",
    },
    {
      icon: MapPin,
      title: "Curated Journeys",
      description: "Handpicked destinations and experiences tailored for you.",
    },
  ];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <SEO
        title="About Travo Tedunu - Your Travel Partner in India"
        description="Learn about Travo Tedunu, India's premier travel agency. We craft authentic, tailored journeys across India with expert local guides and sustainable tourism practices since 2024."
        keywords="about Travo Tedunu, travel agency India, sustainable tourism, local guides, authentic travel experiences, Indian tours company"
        url="/about"
        schema={[organizationSchema, breadcrumbs]}
      />
      <div className="min-h-screen pb-16 md:pb-0 relative">
      <div className="fixed inset-0 gradient-ethereal-dream -z-10"></div>
      <Navbar />

      {/* Hero */}
      <section className="pt-8 md:pt-32 pb-16 relative">
        <div className="absolute inset-0 gradient-rose-gold-dust -z-10"></div>
        <div className="container mx-auto px-4 space-y-6">
          <PageBreadcrumb 
            items={[{ label: "About Us" }]}
            className="animate-fade-up"
          />
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground animate-fade-up">
              About Travo Tedunu
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up">
              Travel, Tailored & Timeless — We craft journeys that become cherished memories
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="absolute inset-0 gradient-lavender-mist -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Founded in 2024, Travo Tedunu emerged from a simple vision: to make travel more
              meaningful, accessible, and authentic. We believe that every journey should be
              transformative, connecting travelers with the heart and soul of destinations.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our name combines "Travo" (travel) with "Tedunu" (bringing together in Sanskrit),
              symbolizing our mission to unite curious souls with incredible experiences across
              India. From the spiritual ghats of Mathura to the majestic Himalayan foothills,
              we curate journeys that reveal the true essence of Indian culture.
            </p>
            
            <p className="text-lg leading-relaxed">
              What sets us apart is our commitment to local expertise and sustainable tourism.
              Every destination we offer is carefully researched, every guide is locally
              experienced, and every experience is designed to benefit the communities we visit.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-mint-breeze -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every journey we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="glass-card hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold text-foreground">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To inspire exploration and create unforgettable journeys that connect travelers
            with the authentic beauty, culture, and spirit of India. We're committed to
            sustainable tourism that benefits local communities while providing exceptional
            experiences for our travelers.
          </p>
        </div>
      </section>

      <TravelersParallax />
      <Footer />
      <BottomNav />
      </div>
    </>
  );
};

export default About;
