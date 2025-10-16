import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'TickBoom: Evil Countdown - ADHD-Friendly Commitment Timer App',
  description = 'Transform procrastination into action with TickBoom. A neuroscience-backed countdown timer app designed for ADHD brains. Track commitments, build streaks, eliminate excuses. No coddling, just results.',
  keywords = 'ADHD app, countdown timer, commitment tracker, productivity app, habit tracker, ADHD productivity, time management, streak tracker, goal tracker, neuroscience app',
  url = 'https://tickboom.app/',
  image = 'https://tickboom.app/og-image.png',
  type = 'website'
}) => {
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
    "image": image,
    "url": url,
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
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
