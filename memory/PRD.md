# TickBoom - Product Requirements Document

## Original Problem Statement
Build and optimize a marketing/landing page for TickBoom, an iOS task timer app designed for ADHD brains and anyone struggling with procrastination. The app uses countdown timers, streak systems, and commitment tracking to help users stay disciplined.

## Architecture
- **Type**: Static single-page application (React + TailwindCSS)
- **No backend or database** - purely static frontend
- **Hosting**: Deployed via Emergent platform
- **SEO**: Comprehensive on-page SEO, 3x JSON-LD structured data (SoftwareApplication, Organization, FAQPage), sitemap, robots.txt

## Key Pages
- `/` - Homepage (Hero, Features, WhyDifferent, HowItWorks, BeforeAfter, Pricing, FAQ, Testimonials, CTA, Footer)
- `/about` - About page (unique SEO title/description)
- `/blog` - Blog coming soon (unique SEO title/description)
- `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/gdpr` - Legal pages
- `/contact`, `/careers` - Info pages

## Brand Guidelines
- NO "Evil" terminology - replaced with "Focus" / "Strict" / "TickBoom"
- NO punishment/guilt language
- Tone: Empowering, transparent, supportive accountability
- Visual: Cyberpunk dark theme with neon accents (#00f0ff, #b537ff, #ff006e)

## What's Been Implemented
- Full landing page with all sections including Before & After transformation stats
- "Strict Mode" feature promotion (Features section + FAQ entry)
- Complete terminology overhaul (Evil -> Focus/Strict)
- SEO: optimized title/description, 3x JSON-LD schemas in index.html, twitter:site, og:site_name, unique subpage SEO
- Sitemap with correct URLs and updated dates
- Semantic HTML (<main> wrapper)
- FAQ with 11 entries including Strict Mode

## Backlog
- **P1**: CSP tightening (unsafe-inline/unsafe-eval)
- **P2**: OG image (og-image.png) for social sharing
- **P2**: Submit sitemap to Google Search Console
