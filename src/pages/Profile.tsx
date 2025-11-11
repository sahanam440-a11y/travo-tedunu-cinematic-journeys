import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Calendar, CreditCard, MapPin, Users, Hotel, LogOut, Loader2, CheckCircle, Clock, XCircle, Plane, Award, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Booking {
  id: string;
  destination_name: string;
  destination_id: string;
  package_type: string;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  accommodation: string;
  total_price: number;
  payment_status: string;
  add_ons: string[];
  created_at: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      setUser(user);
      await fetchBookings(user.id);
    } catch (error) {
      console.error("Error checking user:", error);
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "Error",
        description: "Failed to load your bookings.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
            <CheckCircle className="h-3 w-3 mr-1" />
            Paid
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-500/20 text-red-700 dark:text-red-300">
            <XCircle className="h-3 w-3 mr-1" />
            Failed
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const upcomingTrips = bookings.filter(b => new Date(b.check_in) > new Date() && b.payment_status === "completed");
  const completedTrips = bookings.filter(b => new Date(b.check_out) < new Date() && b.payment_status === "completed");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 gradient-mint-breeze -z-10"></div>
      
      {/* Floating Logout Button */}
      <Button 
        onClick={handleLogout}
        className="fixed top-20 md:top-24 right-4 md:right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg bg-destructive hover:bg-destructive/90 text-destructive-foreground animate-fade-up"
        title="Logout"
      >
        <LogOut className="h-5 w-5" />
      </Button>

      <Navbar />
      
      <main className="container mx-auto px-4 pt-4 md:pt-24 pb-32 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <PageBreadcrumb 
            items={[{ label: "Profile" }]}
            className="mb-6 animate-fade-up"
          />
          
          {/* Hero Profile Header */}
          <div className="relative mb-8 animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <Card className="relative glass-card overflow-hidden border-2">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full animate-pulse-slow blur-xl opacity-60"></div>
                    <Avatar className="relative w-32 h-32 border-4 border-background shadow-2xl">
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                        {user?.email?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-3">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-serif mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                        Welcome Back, Traveler!
                      </h1>
                      <p className="text-lg text-muted-foreground">Your journey continues...</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Badge variant="outline" className="px-4 py-2 text-base border-primary/50">
                        <Mail className="h-4 w-4 mr-2" />
                        {user?.email}
                      </Badge>
                      <Badge variant="outline" className="px-4 py-2 text-base border-accent/50">
                        <Calendar className="h-4 w-4 mr-2" />
                        Since {format(new Date(user?.created_at), "MMM yyyy")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards - Enhanced Design */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="relative group hover-lift animate-fade-up overflow-hidden border-2" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all"></div>
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Plane className="h-7 w-7 text-primary" />
                  </div>
                  <TrendingUp className="h-5 w-5 text-primary/50" />
                </div>
                <div className="text-4xl font-bold mb-1">{bookings.length}</div>
                <p className="text-sm text-muted-foreground font-medium">Total Bookings</p>
              </CardContent>
            </Card>

            <Card className="relative group hover-lift animate-fade-up overflow-hidden border-2" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all"></div>
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-accent" />
                  </div>
                  <Clock className="h-5 w-5 text-accent/50 animate-pulse" />
                </div>
                <div className="text-4xl font-bold mb-1 text-accent">{upcomingTrips.length}</div>
                <p className="text-sm text-muted-foreground font-medium">Upcoming Trips</p>
              </CardContent>
            </Card>

            <Card className="relative group hover-lift animate-fade-up overflow-hidden border-2" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all"></div>
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Award className="h-7 w-7 text-secondary" />
                  </div>
                  <CheckCircle className="h-5 w-5 text-secondary/50" />
                </div>
                <div className="text-4xl font-bold mb-1 text-secondary">{completedTrips.length}</div>
                <p className="text-sm text-muted-foreground font-medium">Completed Trips</p>
              </CardContent>
            </Card>
          </div>

          {/* Bookings List */}
          <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Your Bookings
              </CardTitle>
              <CardDescription>View and manage all your travel bookings</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              {bookings.length === 0 ? (
                <div className="text-center py-12">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
                  <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
                  <p className="text-muted-foreground mb-6">Start your spiritual journey today!</p>
                  <Button className="bg-action text-action-foreground hover:bg-action-hover" asChild>
                    <Link to="/destinations">Explore Destinations</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden hover-lift">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-serif font-semibold mb-1">
                                  {booking.destination_name}
                                </h3>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {booking.package_type} Package
                                </p>
                              </div>
                              {getPaymentStatusBadge(booking.payment_status)}
                            </div>
                            
                            <Separator className="my-3" />
                            
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {format(new Date(booking.check_in), "MMM dd")} - {format(new Date(booking.check_out), "MMM dd, yyyy")}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {booking.adults} Adult{booking.adults > 1 ? "s" : ""}{booking.children > 0 && `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}`}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Hotel className="h-4 w-4 text-muted-foreground" />
                                <span className="capitalize">{booking.accommodation}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold">₹{booking.total_price.toLocaleString()}</span>
                              </div>
                            </div>

                            {booking.add_ons && booking.add_ons.length > 0 && (
                              <div className="mt-3">
                                <p className="text-xs text-muted-foreground mb-1">Add-ons:</p>
                                <div className="flex flex-wrap gap-1">
                                  {booking.add_ons.map((addon, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {addon}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col gap-2 md:items-end">
                            <p className="text-xs text-muted-foreground">
                              Booked on {format(new Date(booking.created_at), "MMM dd, yyyy")}
                            </p>
                            {booking.payment_status === "pending" && (
                              <Button size="sm" className="bg-action text-action-foreground hover:bg-action-hover" asChild>
                                <Link to={`/checkout?bookingId=${booking.id}`}>Complete Payment</Link>
                              </Button>
                            )}
                            {booking.payment_status === "completed" && (
                              <Button size="sm" variant="outline" asChild>
                                <Link to={`/confirmation?bookingId=${booking.id}`}>View Details</Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Profile;
