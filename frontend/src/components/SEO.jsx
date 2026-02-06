import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'TickBoom: Focus Timer, Task Tracker & Commitment App | ADHD-Friendly',
  description = 'Turn chaos into action with TickBoom. Countdown timers that force a choice: Do or don\'t. Designed for everyone tired of excuses, optimized for ADHD brains, procrastinator-proof.',
  keywords = 'focus timer, task tracker, commitment app, ADHD app, countdown timer, productivity app, habit tracker, ADHD productivity, time management, accountability app, procrastination app, streak tracker',
  url,
  image,
  type = 'website'
}) => {
  // Use environment variable or fallback to current window location
  // In production, window.location.origin will automatically use the deployed domain
  const baseUrl = url || (typeof window !== 'undefined' ? window.location.origin : process.env.REACT_APP_BASE_URL || window.location.origin);
  const ogImage = image || `${baseUrl}/og-image.png`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TickBoom: Evil Countdown",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "79.99",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": description,
    "image": ogImage,
    "url": baseUrl,
    "author": {
      "@type": "Organization",
      "name": "TickBoom"
    },
    "datePublished": "2025-01",
    "keywords": keywords
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={baseUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
