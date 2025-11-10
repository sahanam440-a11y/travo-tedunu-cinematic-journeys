import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { breadcrumbSchema } from "@/lib/schema";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact Us - Travo Tedunu Travel Agency"
        description="Get in touch with Travo Tedunu for personalized travel planning across India. Email, phone support available Mon-Sat. Quick response within 24 hours. Office in New Delhi."
        keywords="contact Travo Tedunu, travel inquiry India, book tour, travel consultation, India trip planning, customer support"
        url="/contact"
        schema={breadcrumbs}
      />
      <div className="min-h-screen pb-16 md:pb-0 relative">
      <div className="fixed inset-0 gradient-sunset-luxe -z-10"></div>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 relative">
        <div className="container mx-auto px-4 space-y-3">
          <PageBreadcrumb 
            items={[{ label: "Contact" }]}
            className="animate-fade-up mb-3"
          />
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground animate-fade-up">
              Get In Touch
            </h1>
            <p className="text-base text-muted-foreground max-w-xl mx-auto animate-fade-up">
              We're here to help plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-up">
            <Card className="border border-border shadow-lg bg-card">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and we'll respond within 24 hours
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans..."
                      rows={5}
                      className="resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-action text-action-foreground hover:bg-action-hover font-semibold h-12 shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Contact Info
              </h2>
              <p className="text-sm text-muted-foreground">
                Get in touch with us
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border border-border shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:hello@travotedunu.com" 
                      className="text-sm text-amber-800 hover:text-amber-900 hover:underline"
                    >
                      hello@travotedunu.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Reply within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-sm text-amber-800 hover:text-amber-900 hover:underline"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Mon-Sat, 9am-7pm IST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Travel Street<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-border shadow-md bg-card">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span className="text-lg">🕒</span>
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Fri</span>
                    <span className="font-medium text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      </div>
    </>
  );
};

export default Contact;
