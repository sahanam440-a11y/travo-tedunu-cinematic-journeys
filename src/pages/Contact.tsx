import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalkingTraveler from "@/components/animations/WalkingTraveler";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
        title: "Message Sent Successfully! ✨",
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
    } finally {
      setIsSubmitting(false);
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
        <div className="fixed inset-0 gradient-champagne-glow -z-10"></div>
        <Navbar />

        {/* Hero */}
        <section className="pt-8 md:pt-32 pb-16 relative">
          <div className="absolute inset-0 gradient-golden-hour -z-10 opacity-30"></div>
          <div className="container mx-auto px-4 space-y-6 relative">
            <PageBreadcrumb 
              items={[{ label: "Contact" }]}
              className="animate-fade-up"
            />
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/20 border border-action/30 backdrop-blur-sm animate-fade-up">
                <CheckCircle2 className="h-4 w-4 text-action-foreground" />
                <span className="text-sm font-medium text-action-foreground">Quick Response • 24 Hours</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground animate-fade-up">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up">
                We're here to help plan your perfect journey. Reach out and let's make your travel dreams come true.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up">
              <Card className="glass-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Name"
                          className={`h-12 transition-all duration-200 ${
                            focusedField === "name" 
                              ? "border-action ring-2 ring-action/20" 
                              : "border-border hover:border-action/50"
                          }`}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Email Address"
                          className={`h-12 transition-all duration-200 ${
                            focusedField === "email" 
                              ? "border-action ring-2 ring-action/20" 
                              : "border-border hover:border-action/50"
                          }`}
                          required
                        />

                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Phone Number (Optional)"
                          className={`h-12 transition-all duration-200 ${
                            focusedField === "phone" 
                              ? "border-action ring-2 ring-action/20" 
                              : "border-border hover:border-action/50"
                          }`}
                        />
                      </div>

                      <div>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your travel plans..."
                          rows={5}
                          className={`resize-none transition-all duration-200 ${
                            focusedField === "message" 
                              ? "border-action ring-2 ring-action/20" 
                              : "border-border hover:border-action/50"
                          }`}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        size="lg" 
                        className="w-full bg-action text-action-foreground hover:bg-action-hover shadow-soft hover:shadow-elevated transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-current/30 border-t-current rounded-full animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        We respect your privacy. Your information is secure with us.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

            {/* Contact Info */}
            <div className="space-y-4 animate-fade-up lg:sticky lg:top-24 lg:self-start" style={{ animationDelay: '100ms' }}>
              <Card className="glass-card border border-border/50 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-action/20 dark:bg-action/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="h-6 w-6 text-action-foreground dark:text-action" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:hello@travotedunu.com" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@travotedunu.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="h-6 w-6 text-primary dark:text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:+919876543210" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Mon-Sat, 9 AM - 7 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/20 dark:bg-accent/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="h-6 w-6 text-accent dark:text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        123 Travel Street<br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/20 dark:bg-secondary/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="h-6 w-6 text-secondary dark:text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Mon - Fri</span>
                          <span className="text-foreground font-medium">9 AM - 7 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground font-medium">10 AM - 5 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="text-destructive font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <BottomNav />
      </div>
    </>
  );
};

export default Contact;
