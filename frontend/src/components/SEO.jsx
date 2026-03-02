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
  
  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes TickBoom different from other task apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TickBoom doesn't let you procrastinate. Unlike traditional todo apps with endless snooze buttons, we use countdown timers that create real urgency. You either do it or you don't—no middle ground. It's accountability, not coddling."
        }
      },
      {
        "@type": "Question",
        "name": "Is TickBoom only for people with ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! TickBoom is designed for everyone who struggles with procrastination and following through on commitments. We're optimized for ADHD brains but anyone tired of making excuses will benefit."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pause or extend timers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No pause button—that's the point. However, you get 3 'replan' jokers per week to reschedule a task, and 3 'grace period' extensions per week. These limited lifelines maintain accountability while acknowledging that flexibility is sometimes necessary."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial for paid plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Elite annual plan includes a 7-day free trial. You can experience unlimited commitments, advanced analytics, priority support, and all premium features risk-free."
        }
      }
    ]
  };
  
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
