import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { motion } from "framer-motion";
import { ExternalLink, Code, Heart, Users, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Credits = () => {
  const breadcrumbItems = [{ label: "Credits" }];
  const partners = [
    {
      name: "Pranabhay Tech Solutions",
      role: "Full-Stack Development & Design",
      description: "Expert web development team specializing in modern, responsive, and high-performance web applications. Bringing ideas to life with cutting-edge technology.",
      website: "https://www.pranabhaytechsolutions.com",
      icon: Code,
      gradient: "from-primary to-primary/60",
    },
  ];

  const contributors = [
    {
      name: "India Tourism",
      description: "For inspiring travel experiences across incredible India",
      icon: Globe,
    },
    {
      name: "Local Guides Network",
      description: "Our trusted network of local guides ensuring authentic experiences",
      icon: Users,
    },
    {
      name: "Our Amazing Travelers",
      description: "Every traveler who chose us and shared their journey",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Credits & Partners | Travo Tedunu"
        description="Meet the talented team and partners behind Travo Tedunu. Developed by Pranabhay Tech Solutions with contributions from our amazing community."
        keywords="credits, partners, development team, Pranabhay Tech Solutions, contributors"
      />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 relative z-10"
          >
            <PageBreadcrumb items={breadcrumbItems} />
            <div className="text-center max-w-3xl mx-auto mt-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Partners</span> & Credits
              </h1>
              <p className="text-lg text-muted-foreground">
                Meet the talented individuals and organizations who helped bring Travo Tedunu to life.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Development Partner Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Partner</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The creative minds behind our digital experience
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg"
                        >
                          <partner.icon className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-1">{partner.name}</h3>
                          <p className="text-primary font-medium mb-3">{partner.role}</p>
                          <p className="text-muted-foreground mb-4">{partner.description}</p>
                          <Button asChild variant="outline" className="group/btn">
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Visit Website
                              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Thanks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We extend our heartfelt gratitude to everyone who contributed to our journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                      >
                        <contributor.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{contributor.name}</h3>
                      <p className="text-sm text-muted-foreground">{contributor.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built With</h2>
              <p className="text-muted-foreground mb-8">
                Powered by modern technologies for the best user experience
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Supabase"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Credits;
