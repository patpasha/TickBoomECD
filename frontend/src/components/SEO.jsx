import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'TickBoom: Focus Timer & ADHD Task Tracker | Build Discipline with Countdown Timers',
  description = 'TickBoom is the focus timer that turns chaos into action. Countdown timers, streak tracking, and Strict Mode keep you accountable. Designed for ADHD brains, built for real life. Free on iOS.',
  keywords = 'focus timer, ADHD timer app, task tracker, countdown timer app, commitment tracker, productivity app iOS, ADHD productivity app, habit tracker, streak tracker, time management app, procrastination app, strict mode timer, accountability app',
  url,
  image,
  type = 'website'
}) => {
  const baseUrl = url || (typeof window !== 'undefined' ? window.location.origin : '');
  const ogImage = image || `${baseUrl}/og-image.png`;
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes TickBoom different from other task apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TickBoom doesn't let you procrastinate. Unlike traditional todo apps with endless snooze buttons, we use countdown timers that create real urgency. You either do it or you don't—no middle ground. It's accountability that actually works."
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
        "name": "What is Strict Mode in TickBoom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strict Mode locks your navigation and sends a reminder if you leave the app during a timer. It's a toggleable feature designed for maximum focus during your commitment sessions."
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
      },
      {
        "@type": "Question",
        "name": "How does the streak system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete tasks on consecutive days to build a streak. Each day you complete at least one commitment strengthens your streak. Break the chain, and you start over. Consistency builds discipline, and streaks make consistency visible."
        }
      }
    ]
  };
  
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TickBoom",
    "alternateName": "TickBoom Focus Timer",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "name": "Starter (Free)"
      },
      {
        "@type": "Offer",
        "price": "6.99",
        "priceCurrency": "USD",
        "name": "Discipline (Monthly)"
      },
      {
        "@type": "Offer",
        "price": "34.99",
        "priceCurrency": "USD",
        "name": "Elite (Annual)"
      },
      {
        "@type": "Offer",
        "price": "79.99",
        "priceCurrency": "USD",
        "name": "Lifetime Access"
      }
    ],
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
    "downloadUrl": "https://apps.apple.com/ca/app/tickboom-evil-countdown-timer/id6751061434",
    "author": {
      "@type": "Organization",
      "name": "TickBoom",
      "url": baseUrl
    },
    "datePublished": "2025-01-01",
    "featureList": "Countdown Timers, Streak Tracking, Strict Mode, ADHD-Optimized UI, Performance Analytics, Commitment Tracking",
    "screenshot": "https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/f2l7wkkb_IMG_8830.PNG"
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TickBoom",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.png`,
    "sameAs": [
      "https://x.com/TickBoomEvilCD"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@tickboom.app",
      "contactType": "customer support"
    }
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
      <meta property="og:site_name" content="TickBoom" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TickBoomEvilCD" />
      <meta name="twitter:creator" content="@TickBoomEvilCD" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={baseUrl} />
      
      {/* App Schema */}
      <script type="application/ld+json">
        {JSON.stringify(appSchema)}
      </script>
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
