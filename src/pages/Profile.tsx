import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Calendar, Heart, Clock } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 gradient-mint-breeze -z-10"></div>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="glass-card p-6 mb-6 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-serif mb-2">Welcome Back!</h1>
                <p className="text-muted-foreground mb-4">Manage your profile and bookings</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button size="sm" className="gradient-primary">
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Profile Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="glass-card p-6 hover-lift animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-serif mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>traveler@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Member since Jan 2025</span>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover-lift animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-serif mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Trips Completed</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Upcoming Trips</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Reviews Written</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Destinations Visited</span>
                  <span className="font-semibold">0</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Saved Destinations */}
          <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-serif mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Saved Destinations
            </h2>
            <div className="text-center py-12 text-muted-foreground">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>No saved destinations yet</p>
              <Button className="mt-4 gradient-primary" size="sm">
                Explore Destinations
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Profile;
