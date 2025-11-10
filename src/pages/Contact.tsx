import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    <div className="min-h-screen pb-16 md:pb-0 relative">
      <div className="fixed inset-0 gradient-sunset-luxe -z-10"></div>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-champagne-glow -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10"></div>
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Have questions? We're here to help plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <Card className="border-2 border-amber-200/50 shadow-2xl backdrop-blur-sm bg-background/95 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-10">
                <div className="mb-8">
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-900 to-amber-700">
                    Send us a message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll be in touch soon
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="h-12 border-2 border-amber-100 focus:border-amber-300 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12 border-2 border-amber-100 focus:border-amber-300 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-12 border-2 border-amber-100 focus:border-amber-300 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans and how we can help..."
                      rows={6}
                      className="border-2 border-amber-100 focus:border-amber-300 transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-amber-900 font-semibold text-base h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    style={{ background: '#fef08a' }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-900 to-amber-700">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg">
                Reach out to our team for personalized travel planning assistance
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-amber-200/40 shadow-xl backdrop-blur-sm bg-background/95 hover:shadow-2xl hover:border-amber-300/60 transition-all duration-300 group">
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-amber-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Email Us</h3>
                    <a 
                      href="mailto:hello@travotedunu.com" 
                      className="text-amber-800 hover:text-amber-900 font-medium text-lg transition-colors"
                    >
                      hello@travotedunu.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      We reply within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200/40 shadow-xl backdrop-blur-sm bg-background/95 hover:shadow-2xl hover:border-amber-300/60 transition-all duration-300 group">
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-amber-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Call Us</h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-amber-800 hover:text-amber-900 font-medium text-lg transition-colors"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Mon-Sat, 9am-7pm IST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200/40 shadow-xl backdrop-blur-sm bg-background/95 hover:shadow-2xl hover:border-amber-300/60 transition-all duration-300 group">
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-amber-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      123 Travel Street
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-amber-200/40 shadow-xl backdrop-blur-sm bg-gradient-to-br from-amber-50/50 to-background/95">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-amber-900 text-sm">🕒</span>
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-3 text-muted-foreground ml-13">
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-amber-800 font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-amber-800 font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
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
  );
};

export default Contact;
