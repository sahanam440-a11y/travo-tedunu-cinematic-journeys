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
        <div className="fixed inset-0 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20 -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent dark:from-amber-600/10 -z-10"></div>
        <Navbar />

        {/* Hero */}
        <section className="pt-6 md:pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-transparent to-transparent dark:from-amber-900/10 pointer-events-none"></div>
          <div className="container mx-auto px-4 space-y-6 relative">
            <PageBreadcrumb 
              items={[{ label: "Contact" }]}
              className="animate-fade-up mb-4"
            />
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-block">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/30 backdrop-blur-sm mb-4 animate-fade-up">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-200">24-Hour Response Time</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-br from-amber-900 via-amber-700 to-orange-600 dark:from-amber-200 dark:via-amber-300 dark:to-orange-400 bg-clip-text text-transparent animate-fade-up leading-tight">
                Let's Start Your Journey
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed">
                Share your travel dreams with us, and we'll craft an unforgettable experience tailored just for you
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                <Card className="relative border-0 shadow-2xl bg-card/80 dark:bg-card/40 backdrop-blur-xl overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
                  
                  <CardContent className="p-8 md:p-10 relative">
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 flex items-center gap-3">
                        <span className="inline-block w-2 h-10 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and our team will get back to you within 24 hours
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Full Name *"
                          className={`h-14 px-4 text-base border-2 transition-all duration-300 ${
                            focusedField === "name" 
                              ? "border-amber-500 dark:border-amber-400 shadow-lg shadow-amber-500/20" 
                              : "border-border hover:border-amber-300 dark:hover:border-amber-700"
                          } bg-background/50 backdrop-blur-sm`}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Email Address *"
                            className={`h-14 px-4 text-base border-2 transition-all duration-300 ${
                              focusedField === "email" 
                                ? "border-amber-500 dark:border-amber-400 shadow-lg shadow-amber-500/20" 
                                : "border-border hover:border-amber-300 dark:hover:border-amber-700"
                            } bg-background/50 backdrop-blur-sm`}
                            required
                          />
                        </div>

                        <div className="relative">
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Phone Number"
                            className={`h-14 px-4 text-base border-2 transition-all duration-300 ${
                              focusedField === "phone" 
                                ? "border-amber-500 dark:border-amber-400 shadow-lg shadow-amber-500/20" 
                                : "border-border hover:border-amber-300 dark:hover:border-amber-700"
                            } bg-background/50 backdrop-blur-sm`}
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your travel plans... *"
                          rows={6}
                          className={`resize-none px-4 py-4 text-base border-2 transition-all duration-300 ${
                            focusedField === "message" 
                              ? "border-amber-500 dark:border-amber-400 shadow-lg shadow-amber-500/20" 
                              : "border-border hover:border-amber-300 dark:hover:border-amber-700"
                          } bg-background/50 backdrop-blur-sm`}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        size="lg" 
                        className="w-full h-14 text-base font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to our privacy policy
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up lg:sticky lg:top-24 lg:self-start" style={{ animationDelay: '100ms' }}>
              <div className="space-y-4">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/30 dark:to-orange-950/20 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Email Us</h3>
                        <a 
                          href="mailto:hello@travotedunu.com" 
                          className="text-base text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium hover:underline transition-colors"
                        >
                          hello@travotedunu.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                          Quick reply within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/20 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Call Us</h3>
                        <a 
                          href="tel:+919876543210" 
                          className="text-base text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
                        >
                          +91 98765 43210
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          Mon-Sat, 9:00 AM - 7:00 PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/20 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Visit Us</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          123 Travel Street<br />
                          New Delhi, India 110001
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-transparent"></div>
                <CardContent className="p-6 relative">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-3 text-lg">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center shadow-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-purple-900/30">
                      <span className="text-muted-foreground font-medium">Monday - Friday</span>
                      <span className="font-semibold text-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-purple-900/30">
                      <span className="text-muted-foreground font-medium">Saturday</span>
                      <span className="font-semibold text-foreground">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-purple-900/30">
                      <span className="text-muted-foreground font-medium">Sunday</span>
                      <span className="text-muted-foreground font-medium">Closed</span>
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
