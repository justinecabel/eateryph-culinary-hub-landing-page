import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  canonical?: string;
}

const SEO = ({
  title = "eatery.ph - Discover the Best Filipino Restaurants",
  description = "Discover authentic Filipino restaurants, read reviews, and explore the rich culinary heritage of the Philippines. Find the best eateries from Manila to Mindanao.",
  keywords = "Filipino restaurants, Philippine food, restaurant reviews, Filipino cuisine, dining Philippines, authentic Filipino food, best Filipino restaurants, Manila restaurants, Cebu restaurants, Davao restaurants",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://eatery.ph",
  type = "website",
  structuredData,
  canonical
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="eatery.ph" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="eatery.ph" />
      <meta property="og:locale" content="en_PH" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@eateryph" />
      <meta name="twitter:creator" content="@eateryph" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="PH" />
      <meta name="geo.country" content="Philippines" />
      <meta name="ICBM" content="14.6091,121.0223" />
      <meta name="geo.position" content="14.6091;121.0223" />
      <meta name="geo.placename" content="Philippines" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;