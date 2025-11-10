import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Calendar, CreditCard, MapPin, Users, Hotel, LogOut, Loader2, CheckCircle, Clock, XCircle } from "lucide-react";
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
    <div className="min-h-screen relative">
      <div className="fixed inset-0 gradient-mint-breeze -z-10"></div>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32 md:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="glass-card p-6 mb-6 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-serif mb-1">Welcome Back!</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {format(new Date(user?.created_at), "MMM yyyy")}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="glass-card hover-lift animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{bookings.length}</div>
              </CardContent>
            </Card>
            <Card className="glass-card hover-lift animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Trips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{upcomingTrips.length}</div>
              </CardContent>
            </Card>
            <Card className="glass-card hover-lift animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Completed Trips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{completedTrips.length}</div>
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
                  <Button className="gradient-primary" asChild>
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
                              <Button size="sm" className="gradient-primary" asChild>
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
