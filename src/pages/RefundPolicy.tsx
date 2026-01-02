import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const RefundPolicy = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy - Travo Tedunu",
    "description": "Refund policy for Travo Tedunu travel bookings. Learn about our refund process, timelines, and conditions.",
    "url": "https://travotedunu.com/refund-policy"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Refund Policy | Travo Tedunu - Travel Booking Refunds"
        description="Understand our refund policy for travel bookings. Clear guidelines on refund eligibility, processing times, and how to request a refund."
        keywords="refund policy, travel refund, booking refund, Travo Tedunu refunds, refund process"
        schema={schemaData}
      />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pb-24 md:pb-8">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Refund Policy" },
          ]}
        />

        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Refund Policy
          </h1>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Overview
              </h2>
              <p>
                At Travo Tedunu, we strive to provide exceptional travel experiences. We understand that plans 
                may change, and we have established this refund policy to ensure transparency and fairness 
                in all transactions processed through our platform via Razorpay payment gateway.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Refund Eligibility
              </h2>
              <p>Refunds may be granted under the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Full Refund (100%):</strong> Cancellation made 15 or more days before the scheduled 
                  departure date.
                </li>
                <li>
                  <strong>Partial Refund (50%):</strong> Cancellation made between 7-14 days before the 
                  scheduled departure date.
                </li>
                <li>
                  <strong>No Refund:</strong> Cancellation made less than 7 days before the scheduled 
                  departure date.
                </li>
                <li>
                  <strong>Service Not Provided:</strong> If we are unable to provide the booked service 
                  due to unforeseen circumstances on our end, a full refund will be issued.
                </li>
                <li>
                  <strong>Double Payment:</strong> In case of accidental duplicate payments, the extra 
                  amount will be refunded in full.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Non-Refundable Items
              </h2>
              <p>The following are non-refundable under any circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Convenience fees and payment processing charges</li>
                <li>Travel insurance premiums (if purchased)</li>
                <li>Special event tickets or experiences marked as non-refundable</li>
                <li>Customized or personalized travel packages after confirmation</li>
                <li>Peak season bookings during festivals (Holi, Diwali, Christmas, New Year) cancelled 
                    within 21 days of departure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                How to Request a Refund
              </h2>
              <p>To initiate a refund request, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>
                  <strong>Email Request:</strong> Send an email to{" "}
                  <a href="mailto:sahanam440@gmail.com" className="text-primary hover:underline">
                    sahanam440@gmail.com
                  </a>{" "}
                  with the subject line "Refund Request - [Booking ID]"
                </li>
                <li>
                  <strong>Include Details:</strong> Provide your booking confirmation number, registered 
                  email address, phone number, and reason for cancellation
                </li>
                <li>
                  <strong>Acknowledgment:</strong> You will receive an acknowledgment within 24-48 hours
                </li>
                <li>
                  <strong>Review:</strong> Our team will review your request and determine refund eligibility
                </li>
                <li>
                  <strong>Confirmation:</strong> You will receive a confirmation email with the refund 
                  amount and timeline
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Refund Processing Time
              </h2>
              <p>Once your refund is approved:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Credit/Debit Cards:</strong> 5-7 business days for the refund to reflect in 
                  your account
                </li>
                <li>
                  <strong>UPI Payments:</strong> 3-5 business days
                </li>
                <li>
                  <strong>Net Banking:</strong> 5-7 business days
                </li>
                <li>
                  <strong>Wallets:</strong> 2-3 business days
                </li>
              </ul>
              <p className="mt-3">
                <em>Note: Processing times may vary depending on your bank or payment provider. 
                Razorpay processes refunds within 5-7 business days, but the actual credit to your 
                account depends on your financial institution.</em>
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Refund Method
              </h2>
              <p>
                All refunds will be processed to the original payment method used during booking. 
                We do not offer refunds in cash or to alternate accounts. The refund will be 
                processed through Razorpay to ensure secure and traceable transactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Force Majeure
              </h2>
              <p>
                In cases of force majeure events (natural disasters, government restrictions, 
                pandemics, civil unrest, etc.) that prevent the delivery of booked services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Full credit for future bookings will be provided</li>
                <li>Alternatively, a full refund may be issued at our discretion</li>
                <li>We will communicate proactively about any such situations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Partial Service Utilization
              </h2>
              <p>
                If you have partially utilized the booked services (e.g., attended some days of a 
                multi-day package), refunds will be calculated proportionally minus any non-refundable 
                components and a 10% administrative fee.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Dispute Resolution
              </h2>
              <p>
                If you are unsatisfied with a refund decision, you may escalate the matter by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Emailing us with the subject "Refund Dispute - [Booking ID]"</li>
                <li>Our senior management will review the case within 7 business days</li>
                <li>A final decision will be communicated in writing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Us for Refunds
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg mt-4">
                <p className="mb-3">For all refund-related queries, please contact:</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:sahanam440@gmail.com" className="text-primary hover:underline">
                      sahanam440@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+916363150891" className="text-primary hover:underline">
                      +91 63631 50891
                    </a>
                  </li>
                  <li>
                    <strong>Business Hours:</strong> Monday - Saturday, 10:00 AM - 6:00 PM IST
                  </li>
                  <li>
                    <strong>Response Time:</strong> Within 24-48 hours
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This refund policy is subject to change. Please review this page periodically for updates. 
                By making a payment on our platform, you acknowledge that you have read and agree to this 
                refund policy.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default RefundPolicy;
