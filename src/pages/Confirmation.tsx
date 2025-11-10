import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, CheckCircle2, MapPin, Calendar, Users, Package, Hotel, Download, Mail } from "lucide-react";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) {
      toast.error("Invalid booking ID");
      navigate("/");
      return;
    }

    fetchBooking();
  }, [bookingId]);

  const fetchBooking = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (error) throw error;

      if (data.payment_status !== "completed") {
        navigate(`/checkout?bookingId=${bookingId}`);
        return;
      }

      setBooking(data);
    } catch (error: any) {
      console.error("Error fetching booking:", error);
      toast.error("Failed to load booking details");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReceipt = () => {
    toast.success("Receipt download started");
    // In a real app, generate PDF receipt here
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!booking) {
    return null;
  }

  const checkInDate = new Date(booking.check_in);
  const checkOutDate = new Date(booking.check_out);
  const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-24 pb-16 gradient-ocean-serenity">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10 mb-4">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your journey is all set. Get ready for an amazing adventure!
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>Confirmation email sent to {booking.user_email}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Booking Reference */}
            <Card className="border-border/50 shadow-elegant">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Booking Reference</p>
                  <p className="text-2xl font-mono font-bold text-primary">
                    {booking.id.split("-")[0].toUpperCase()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please save this reference number for your records
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Booking Details */}
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{booking.destination_name}</p>
                      <p className="text-sm text-muted-foreground">Destination</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">
                        {checkInDate.toLocaleDateString()} - {checkOutDate.toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground">{nights} nights</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">
                        {booking.adults} {booking.adults === 1 ? "Adult" : "Adults"}
                        {booking.children > 0 && `, ${booking.children} ${booking.children === 1 ? "Child" : "Children"}`}
                      </p>
                      <p className="text-sm text-muted-foreground">Travelers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium capitalize">{booking.package_type} Package</p>
                      <p className="text-sm text-muted-foreground">Package Type</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Hotel className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium capitalize">{booking.accommodation}</p>
                      <p className="text-sm text-muted-foreground">Accommodation</p>
                    </div>
                  </div>

                  {booking.add_ons && booking.add_ons.length > 0 && (
                    <div className="md:col-span-2">
                      <p className="font-medium mb-2">Add-ons:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {booking.add_ons.map((addon: string, index: number) => (
                          <li key={index} className="capitalize">{addon}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Amount Paid</p>
                    <p className="text-2xl font-bold text-primary">₹{booking.total_price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Payment Status</p>
                    <p className="text-lg font-semibold text-success">Completed</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{booking.user_name}</p>
                    <p>{booking.user_email}</p>
                    <p>{booking.user_phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownloadReceipt} variant="outline" size="lg" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download Receipt
              </Button>
              <Button onClick={() => navigate("/")} size="lg" className="flex-1">
                Back to Home
              </Button>
            </div>

            {/* Next Steps */}
            <Card className="border-border/50 shadow-elegant gradient-elegant">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Check your email for detailed itinerary and travel documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Our travel coordinator will contact you within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prepare your travel documents and pack your bags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Get ready for an unforgettable journey!</span>
                  </li>
                </ul>
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

export default Confirmation;
