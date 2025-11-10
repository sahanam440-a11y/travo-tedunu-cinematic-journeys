import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  bookingId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId }: VerifyPaymentRequest = await req.json();

    const razorpayKeySecret = Deno.env.get("RAZORPAY_KEY_SECRET");
    if (!razorpayKeySecret) {
      return new Response(
        JSON.stringify({ error: "Payment service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(razorpayKeySecret);
    const messageData = encoder.encode(text);
    
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
    const hashArray = Array.from(new Uint8Array(signature));
    const expectedSignature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (expectedSignature !== razorpay_signature) {
      console.error("Invalid payment signature");
      return new Response(
        JSON.stringify({ error: "Invalid payment signature" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Payment signature verified successfully");

    // Update booking status
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: booking, error: fetchError } = await supabaseClient
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (fetchError || !booking) {
      console.error("Error fetching booking:", fetchError);
      return new Response(
        JSON.stringify({ error: "Booking not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error: updateError } = await supabaseClient
      .from("bookings")
      .update({
        payment_status: "completed",
        razorpay_payment_id: razorpay_payment_id,
      })
      .eq("id", bookingId);

    if (updateError) {
      console.error("Error updating booking:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update booking" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const emailResponse = await resend.emails.send({
      from: "TravelWings <onboarding@resend.dev>",
      to: [booking.user_email],
      subject: "Booking Confirmation - Your Journey Awaits!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Booking Confirmed! 🎉</h1>
          <p>Dear ${booking.user_name},</p>
          <p>Your booking has been confirmed! We're excited to help you create amazing memories.</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Booking Details</h2>
            <p><strong>Booking ID:</strong> ${booking.id}</p>
            <p><strong>Destination:</strong> ${booking.destination_name}</p>
            <p><strong>Check-in:</strong> ${new Date(booking.check_in).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> ${new Date(booking.check_out).toLocaleDateString()}</p>
            <p><strong>Travelers:</strong> ${booking.adults} Adults, ${booking.children} Children</p>
            <p><strong>Package:</strong> ${booking.package_type.charAt(0).toUpperCase() + booking.package_type.slice(1)}</p>
            <p><strong>Accommodation:</strong> ${booking.accommodation}</p>
            <p><strong>Total Amount:</strong> ₹${booking.total_price}</p>
            <p><strong>Payment Status:</strong> <span style="color: #10b981; font-weight: bold;">Paid</span></p>
          </div>
          
          <p>We'll send you more details about your trip shortly. If you have any questions, feel free to contact us.</p>
          <p>Safe travels! ✈️</p>
          <p>Best regards,<br>The TravelWings Team</p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Payment verified and booking confirmed" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in verify-razorpay-payment:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
