import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const ShippingPolicy = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shipping and Delivery Policy - Travo Tedunu",
    "description": "Shipping and Delivery Policy for Travo Tedunu travel bookings, vouchers, and tour confirmations",
    "url": "https://travotedunu.com/shipping-policy"
  };

  return (
    <>
      <SEO
        title="Shipping and Delivery Policy"
        description="Learn about Travo Tedunu's shipping and delivery process for tour vouchers and booking confirmations. Fast delivery within 3-5 days."
        url="/shipping-policy"
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-20 md:pb-8">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <PageBreadcrumb
              items={[
                { label: "Shipping & Delivery Policy" }
              ]}
            />
            
            <h1 className="text-4xl font-bold mb-8 text-foreground">Shipping and Delivery Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">International Shipping</h2>
                <p>
                  For <strong className="text-foreground">International buyers</strong>, orders are shipped and delivered through 
                  registered international courier companies and/or International speed post only.
                </p>
                <p>
                  We ensure that all international shipments are handled by trusted courier partners to guarantee safe and timely 
                  delivery of your travel documents and vouchers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Domestic Shipping</h2>
                <p>
                  For <strong className="text-foreground">Domestic buyers</strong>, orders are shipped through registered domestic 
                  courier companies and/or speed post only.
                </p>
                <p>
                  We partner with reliable domestic courier services to ensure your booking confirmations and travel documents 
                  reach you on time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Shipping Timeline</h2>
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-2">Standard Processing Time:</p>
                  <p>
                    Orders are shipped within <strong className="text-foreground">3-5 days</strong> or as per the delivery date 
                    agreed at the time of order confirmation.
                  </p>
                </div>
                <p>
                  Delivery of the shipment is subject to courier company / post office norms and operational schedules.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Delivery Guarantee</h2>
                <p>
                  <strong className="text-foreground">MOUNESH SAHANA</strong> guarantees to hand over the consignment to the 
                  courier company or postal authorities within <strong className="text-foreground">3-5 days</strong> from the 
                  date of the order and payment or as per the delivery date agreed at the time of order confirmation.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm">
                    <strong className="text-foreground">Important Notice:</strong> MOUNESH SAHANA is not liable for any delay 
                    in delivery by the courier company or postal authorities once the consignment has been handed over to them.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Delivery Address</h2>
                <p>
                  Delivery of all orders will be made to the address provided by the buyer at the time of booking.
                </p>
                <p>
                  Please ensure that you provide accurate and complete delivery address details including:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Full name of the recipient</li>
                  <li>Complete street address</li>
                  <li>City, State, and PIN/ZIP code</li>
                  <li>Contact phone number</li>
                  <li>Landmark (if applicable)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Service Confirmation</h2>
                <p>
                  Delivery of our services will be confirmed on your email ID as specified during registration.
                </p>
                <p>
                  You will receive:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Order confirmation email immediately after booking</li>
                  <li>Shipping confirmation with tracking details</li>
                  <li>Travel vouchers and itinerary documents</li>
                  <li>Important travel information and guidelines</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Track Your Shipment</h2>
                <p>
                  Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to 
                  monitor the status of your delivery through the courier company's website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Need Help?</h2>
                <p>
                  For any issues in utilizing our services or questions about your delivery, you may contact our helpdesk:
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <strong className="text-foreground">Phone:</strong>
                      <a href="tel:+916363150891" className="text-primary hover:underline">
                        +91 63631 50891
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <strong className="text-foreground">Email:</strong>
                      <a href="mailto:prannuteddy@gmail.com" className="text-primary hover:underline">
                        prannuteddy@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <strong className="text-foreground">General Inquiries:</strong>
                      <a href="mailto:hello@travotedunu.com" className="text-primary hover:underline">
                        hello@travotedunu.com
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4 border-t border-border pt-6 mt-8">
                <p className="text-sm">
                  <strong className="text-foreground">Last Updated:</strong> January 2025
                </p>
                <p className="text-sm">
                  For any questions regarding this Shipping and Delivery Policy, please contact us at{" "}
                  <a href="mailto:hello@travotedunu.com" className="text-primary hover:underline">
                    hello@travotedunu.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default ShippingPolicy;
