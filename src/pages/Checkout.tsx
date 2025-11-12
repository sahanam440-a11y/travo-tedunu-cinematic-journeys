import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelersParallax from "@/components/animations/TravelersParallax";
import BottomNav from "@/components/BottomNav";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, CheckCircle, MapPin, Calendar, Users, Package, Hotel } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!bookingId) {
      toast.error("Invalid booking ID");
      navigate("/booking");
      return;
    }

    fetchBooking();
  }, [bookingId]);

  const fetchBooking = async () => {
    try {
      // Check authentication
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Please login to view your booking.");
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", bookingId)
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;
      
      if (!data) {
        toast.error("Booking not found or unauthorized.");
        navigate("/booking");
        return;
      }
      
      if (data.payment_status === "completed") {
        navigate(`/confirmation?bookingId=${bookingId}`);
        return;
      }

      setBooking(data);
    } catch (error: any) {
      console.error("Error fetching booking:", error);
      toast.error("Failed to load booking details");
      navigate("/booking");
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setProcessing(true);

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Failed to load payment gateway");
        return;
      }

      // Create Razorpay order
      const { data: orderData, error: orderError } = await supabase.functions.invoke(
        "create-razorpay-order",
        {
          body: {
            bookingId: booking.id,
            amount: booking.total_price,
          },
        }
      );

      if (orderError) throw orderError;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_dummy",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "TravelWings",
        description: `Booking for ${booking.destination_name}`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // Verify payment
            const { error: verifyError } = await supabase.functions.invoke(
              "verify-razorpay-payment",
              {
                body: {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  bookingId: booking.id,
                },
              }
            );

            if (verifyError) throw verifyError;

            toast.success("Payment successful! Redirecting...");
            setTimeout(() => {
              navigate(`/confirmation?bookingId=${booking.id}`);
            }, 1500);
          } catch (error: any) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: booking.user_name,
          email: booking.user_email,
          contact: booking.user_phone,
        },
        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response.error);
        toast.error("Payment failed. Please try again.");
      });
      razorpay.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment");
    } finally {
      setProcessing(false);
    }
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

      <section className="pt-4 md:pt-24 pb-16 gradient-ocean-serenity">
        <div className="container mx-auto px-4 space-y-4">
          <PageBreadcrumb 
            items={[
              { label: "Book Your Trip", href: "/booking" },
              { label: "Checkout" }
            ]}
            className="animate-fade-up"
          />
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Complete Your Booking
            </h1>
            <p className="text-lg text-muted-foreground">
              Review your booking details and proceed to payment
            </p>
          </div>
        </div>
      </section>

      <section className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Booking Summary */}
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Booking Summary
                </CardTitle>
                <CardDescription>Review your trip details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
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
                    <div>
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

            {/* Payment Card */}
            <Card className="border-border/50 shadow-elegant h-fit">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Secure payment powered by Razorpay</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{booking.total_price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-primary">₹{booking.total_price}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={processing}
                  size="lg"
                  className="w-full"
                >
                  {processing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>Proceed to Payment</>
                  )}
                </Button>

                <div className="text-xs text-center text-muted-foreground space-y-1">
                  <p>🔒 Secure payment via Razorpay</p>
                  <p>Your payment information is encrypted and secure</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Checkout;
