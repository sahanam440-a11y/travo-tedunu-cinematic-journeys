import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const PrivacyPolicy = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Travo Tedunu",
    "description": "Privacy Policy for Travo Tedunu - How we collect, use, and protect your personal information",
    "url": "https://travotedunu.com/privacy-policy"
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn about Travo Tedunu's privacy policy and how we collect, use, and protect your personal information. Your privacy is our priority."
        url="/privacy-policy"
        schema={organizationSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-20 md:pb-8">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <PageBreadcrumb
              items={[
                { label: "Privacy Policy" }
              ]}
            />
            
            <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Commitment to Privacy</h2>
                <p>
                  This privacy policy sets out how <strong className="text-foreground">MOUNESH SAHANA</strong> uses and protects 
                  any information that you give when you visit our website and/or agree to purchase from us.
                </p>
                <p>
                  <strong className="text-foreground">MOUNESH SAHANA</strong> is committed to ensuring that your privacy is protected. 
                  Should we ask you to provide certain information by which you can be identified when using this website, you can be 
                  assured that it will only be used in accordance with this privacy statement.
                </p>
                <p>
                  <strong className="text-foreground">MOUNESH SAHANA</strong> may change this policy from time to time by updating 
                  this page. You should check this page from time to time to ensure that you adhere to these changes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Name</strong></li>
                  <li><strong className="text-foreground">Contact information</strong> including email address</li>
                  <li><strong className="text-foreground">Demographic information</strong> such as postcode, preferences and interests, if required</li>
                  <li><strong className="text-foreground">Other information</strong> relevant to customer surveys and/or offers</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                <p>
                  We require this information to understand your needs and provide you with a better service, and in particular 
                  for the following reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Internal record keeping</strong></li>
                  <li>We may use the information to <strong className="text-foreground">improve our products and services</strong></li>
                  <li>We may periodically send <strong className="text-foreground">promotional emails</strong> about new products, 
                  special offers or other information which we think you may find interesting using the email address which you have provided</li>
                  <li>From time to time, we may also use your information to contact you for <strong className="text-foreground">market 
                  research purposes</strong>. We may contact you by email, phone, fax or mail</li>
                  <li>We may use the information to <strong className="text-foreground">customize the website</strong> according to your interests</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
                <p>
                  We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, 
                  we have put in place suitable physical, electronic and managerial measures to safeguard and secure the information 
                  we collect online.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How We Use Cookies</h2>
                <p>
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file 
                  is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.
                </p>
                <p>
                  Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to 
                  your needs, likes and dislikes by gathering and remembering information about your preferences.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-2">Traffic Log Cookies:</p>
                  <p>
                    We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic 
                    and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis 
                    purposes and then the data is removed from the system.
                  </p>
                </div>
                <p>
                  Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and 
                  which you do not. A cookie in no way gives us access to your computer or any information about you, other than the 
                  data you choose to share with us.
                </p>
                <p>
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually 
                  modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of 
                  the website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Controlling Your Personal Information</h2>
                <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that 
                  you do not want the information to be used by anybody for direct marketing purposes</li>
                  <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change 
                  your mind at any time by writing to or emailing us at{" "}
                  <a href="mailto:prannuteddy@gmail.com" className="text-primary hover:underline">
                    prannuteddy@gmail.com
                  </a>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Third-Party Disclosure</h2>
                <p>
                  We will not sell, distribute or lease your personal information to third parties unless we have your permission or 
                  are required by law to do so.
                </p>
                <p>
                  We may use your personal information to send you promotional information about third parties which we think you may 
                  find interesting if you tell us that you wish this to happen.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Correcting Your Information</h2>
                <p>
                  If you believe that any information we are holding on you is incorrect or incomplete, please contact us as soon as 
                  possible. We will promptly correct any information found to be incorrect.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground mb-3">Contact Us:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-foreground">Address:</strong> Indiranagar, Bluwells apartment, Bengaluru, KARNATAKA 560078
                    </li>
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
                  For any questions regarding this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
