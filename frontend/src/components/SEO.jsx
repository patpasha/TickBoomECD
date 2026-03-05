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
    </Helmet>
  );
};

export default SEO;
