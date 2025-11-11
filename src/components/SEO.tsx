import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
  canonicalUrl?: string;
}

export const SEO = ({
  title = "Travo Tedunu - Travel, Tailored & Timeless",
  description = "Curated journeys across India with cinematic visuals and authentic experiences. Explore heritage, spirituality, and adventure with expert local guides.",
  keywords = "travel India, Delhi tours, Mathura pilgrimage, Dehradun adventure, spiritual travel, heritage tours, cultural experiences, India vacation packages, customized tours, authentic travel experiences",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://travotedunu.com",
  type = "website",
  schema,
  canonicalUrl,
}: SEOProps) => {
  const siteTitle = title.includes("Travo Tedunu") ? title : `${title} | Travo Tedunu`;
  const fullUrl = url.startsWith("http") ? url : `https://travotedunu.com${url}`;
  const canonical = canonicalUrl || fullUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Travo Tedunu" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@TravoTedunu" />
      <meta name="twitter:creator" content="@TravoTedunu" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="Travo Tedunu" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="classification" content="Travel Agency, Tour Operator, Tourism" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Search Engine Verification (add your actual codes) */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
