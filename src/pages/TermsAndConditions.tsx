import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const TermsAndConditions = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Travo Tedunu",
    "description": "Terms and Conditions for Travo Tedunu travel services",
    "url": "https://travotedunu.com/terms-and-conditions"
  };

  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions governing the use of Travo Tedunu travel services and website. Read our terms before booking your journey."
        url="/terms-and-conditions"
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-20 md:pb-8">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <PageBreadcrumb
              items={[
                { label: "Terms and Conditions" }
              ]}
            />
            
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                <p>
                  For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean 
                  <strong className="text-foreground"> MOUNESH SAHANA</strong>, whose registered/operational office is 
                  <strong className="text-foreground"> Indiranagar, Bluwells apartment, Bengaluru, KARNATAKA 560078</strong>. 
                  "You", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or 
                  agreed to purchase from us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Governing Terms</h2>
                <p>
                  Your use of the website and/or purchase from us are governed by the following Terms and Conditions:
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Website Content</h2>
                <p>
                  The content of the pages of this website is subject to change without notice. Neither we nor any third parties 
                  provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of 
                  the information and materials found or offered on this website for any particular purpose.
                </p>
                <p>
                  You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude 
                  liability for any such inaccuracies or errors to the fullest extent permitted by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">User Responsibility</h2>
                <p>
                  Your use of any information or materials on our website and/or product pages is entirely at your own risk, 
                  for which we shall not be liable. It shall be your own responsibility to ensure that any products, services 
                  or information available through our website and/or product pages meet your specific requirements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
                <p>
                  Our website contains material which is owned by or licensed to us. This material includes, but is not limited 
                  to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with 
                  the copyright notice, which forms part of these terms and conditions.
                </p>
                <p>
                  All trademarks reproduced in our website which are not the property of, or licensed to, the operator are 
                  acknowledged on the website. Unauthorized use of information provided by us shall give rise to a claim for 
                  damages and/or be a criminal offense.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">External Links</h2>
                <p>
                  From time to time our website may also include links to other websites. These links are provided for your 
                  convenience to provide further information.
                </p>
                <p>
                  You may not create a link to our website from another website or document without MOUNESH SAHANA's prior 
                  written consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
                <p>
                  Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject 
                  to the laws of India.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Payment Terms</h2>
                <p>
                  All payments on this website are processed securely through Razorpay, a PCI-DSS compliant payment gateway. 
                  By making a payment, you agree to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are displayed in Indian Rupees (INR) and include applicable taxes unless otherwise stated.</li>
                  <li>Payment can be made via Credit Card, Debit Card, Net Banking, UPI, and other methods supported by Razorpay.</li>
                  <li>Your payment information is encrypted and securely transmitted. We do not store your card details on our servers.</li>
                  <li>Upon successful payment, you will receive a confirmation email with your booking details and payment receipt.</li>
                  <li>In case of payment failure, the amount (if debited) will be refunded to your source account within 5-7 business days.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Refund and Cancellation Policy</h2>
                <p>
                  Our refund and cancellation policy is as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cancellation before 15 days of travel:</strong> Full refund minus processing fees (if applicable).</li>
                  <li><strong>Cancellation between 7-14 days of travel:</strong> 50% refund of the total booking amount.</li>
                  <li><strong>Cancellation within 7 days of travel:</strong> No refund will be provided.</li>
                  <li>Refunds will be processed within 7-10 business days to the original payment method.</li>
                  <li>For cancellation requests, please contact us at <a href="mailto:hello@travotedunu.com" className="text-primary hover:underline">hello@travotedunu.com</a> or call us at <a href="tel:+918088779655" className="text-primary hover:underline">+91 8088779655</a>.</li>
                </ul>
                <p>
                  For detailed information, please refer to our <a href="/cancellation-policy" className="text-primary hover:underline">Cancellation Policy</a> page.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Transaction Security</h2>
                <p>
                  We prioritize the security of your transactions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All transactions are processed through Razorpay's secure payment infrastructure.</li>
                  <li>We use SSL encryption to protect your personal and payment information.</li>
                  <li>We shall not be liable for any loss or damage arising from unauthorized access to your payment information due to factors beyond our control.</li>
                  <li>We reserve the right to decline any transaction that appears fraudulent or violates our terms.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Pricing and Availability</h2>
                <p>
                  All travel packages and services are subject to availability. Prices may vary based on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Travel dates and season</li>
                  <li>Number of travelers</li>
                  <li>Accommodation preferences</li>
                  <li>Selected add-ons and customizations</li>
                </ul>
                <p>
                  We reserve the right to modify prices at any time without prior notice. However, once a booking is confirmed 
                  and payment is received, the quoted price will be honored.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact for Payment Queries</h2>
                <p>
                  For any payment-related queries or concerns, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:hello@travotedunu.com" className="text-primary hover:underline">hello@travotedunu.com</a></li>
                  <li>Phone: <a href="tel:+918088779655" className="text-primary hover:underline">+91 8088779655</a></li>
                  <li>Address: Indiranagar, Bluwells apartment, Bengaluru, KARNATAKA 560078</li>
                </ul>
              </section>

              <section className="space-y-4 border-t border-border pt-6 mt-8">
                <p className="text-sm">
                  <strong className="text-foreground">Last Updated:</strong> January 2025
                </p>
                <p className="text-sm">
                  For any questions regarding these Terms and Conditions, please contact us at{" "}
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

export default TermsAndConditions;
