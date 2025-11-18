import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const CancellationPolicy = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cancellation and Refund Policy - Travo Tedunu",
    "description": "Cancellation and Refund Policy for Travo Tedunu travel bookings and tour packages",
    "url": "https://travotedunu.com/cancellation-policy"
  };

  return (
    <>
      <SEO
        title="Cancellation and Refund Policy"
        description="Learn about Travo Tedunu's cancellation and refund policy for tour packages. Flexible cancellation terms within 9-15 days of booking."
        url="/cancellation-policy"
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-20 md:pb-8">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <PageBreadcrumb
              items={[
                { label: "Cancellation & Refund Policy" }
              ]}
            />
            
            <h1 className="text-4xl font-bold mb-8 text-foreground">Cancellation and Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
                <p>
                  <strong className="text-foreground">MOUNESH SAHANA</strong> believes in helping its customers as far as possible, 
                  and has therefore a liberal cancellation policy. We understand that plans can change, and we strive to accommodate 
                  our customers' needs while maintaining fair business practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Cancellation Policy</h2>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Cancellation Timeline:</strong> Cancellations will be considered only if 
                    the request is made within <strong className="text-foreground">9-15 days</strong> of placing the order.
                  </p>
                  <p>
                    However, the cancellation request may not be entertained if the orders have been communicated to the 
                    vendors/merchants and they have initiated the process of shipping them.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Non-Cancellable Items</h2>
                <p>
                  <strong className="text-foreground">MOUNESH SAHANA</strong> does not accept cancellation requests for perishable 
                  items like flowers, eatables, etc.
                </p>
                <p>
                  However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Damaged or Defective Items</h2>
                <p>
                  In case of receipt of damaged or defective items, please report the same to our Customer Service team within{" "}
                  <strong className="text-foreground">9-15 days</strong> of receipt of the products.
                </p>
                <p>
                  The request will be entertained once the merchant has checked and determined the same at his own end.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Product Not As Expected</h2>
                <p>
                  In case you feel that the product received is not as shown on the site or as per your expectations, you must 
                  bring it to the notice of our customer service within{" "}
                  <strong className="text-foreground">9-15 days</strong> of receiving the product.
                </p>
                <p>
                  The Customer Service Team after looking into your complaint will take an appropriate decision.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Warranty Items</h2>
                <p>
                  In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue 
                  to them directly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Refund Processing</h2>
                <p>
                  In case of any refunds approved by <strong className="text-foreground">MOUNESH SAHANA</strong>, it will take{" "}
                  <strong className="text-foreground">6-8 days</strong> for the refund to be processed to the end customer.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="text-sm">
                    <strong className="text-foreground">Important:</strong> Refunds will be credited to the original payment method 
                    used during the booking. Please ensure your payment details are up to date.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How to Request a Cancellation</h2>
                <div className="space-y-2">
                  <p>To request a cancellation or refund, please contact our customer service team:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email: <a href="mailto:hello@travotedunu.com" className="text-primary hover:underline">hello@travotedunu.com</a></li>
                    <li>Phone: <a href="tel:+916363150891" className="text-primary hover:underline">+91 63631 50891</a></li>
                    <li>Visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a></li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4 border-t border-border pt-6 mt-8">
                <p className="text-sm">
                  <strong className="text-foreground">Last Updated:</strong> January 2025
                </p>
                <p className="text-sm">
                  For any questions regarding this Cancellation and Refund Policy, please contact us at{" "}
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

export default CancellationPolicy;
