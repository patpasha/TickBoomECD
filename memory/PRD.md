# TickBoom - Product Requirements Document

## Original Problem Statement
Build and optimize a marketing/landing page for TickBoom, an iOS task timer app designed for ADHD brains and anyone struggling with procrastination. The app uses countdown timers, streak systems, and commitment tracking to help users stay disciplined.

## Architecture
- **Type**: Static single-page application (React/Vite + TailwindCSS)
- **No backend or database** - purely static frontend
- **Hosting**: Deployed via Emergent platform
- **SEO**: Comprehensive on-page SEO, structured data (JSON-LD), sitemap, robots.txt

## Key Pages
- `/` - Homepage (Hero, Features, WhyDifferent, HowItWorks, Pricing, FAQ, Testimonials, CTA, Footer)
- `/about` - About page
- `/blog` - Blog (coming soon)
- `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/gdpr` - Legal pages
- `/contact`, `/careers` - Info pages

## Core Requirements
1. Conversion-focused marketing copy
2. ADHD-friendly positioning
3. App Store download CTAs
4. SEO optimization
5. No punishment/guilt language - focus on empowerment and transparency
6. "Strict Mode" feature promotion

## Brand Guidelines
- NO "Evil" terminology - replaced with "Focus" / "Strict" / "TickBoom"
- NO punishment/guilt language (no "brutal", "ruthless", "no mercy", "coddle", "face consequences")
- Tone: Empowering, transparent, supportive accountability
- Visual: Cyberpunk dark theme with neon accents (#00f0ff, #b537ff, #ff006e)

## What's Been Implemented
- Full landing page with all sections
- SEO (meta tags, structured data, sitemap, robots.txt)
- "Strict Mode" feature card in Features section
- Complete terminology overhaul (Evil -> Focus/Strict)
- FAQ section with accordion
- "Why TickBoom is Different" section
- Testimonials with metrics
- Pricing (Free/Elite/Discipline plans + Lifetime)
- Backend fully removed (static site only)

## Backlog
- **P1**: Content Security Policy tightening (remove unsafe-inline/unsafe-eval)
- **P2**: OG image (og-image.png) for social sharing
- **P2**: Submit sitemap to Google Search Console
- **P2**: Final holistic conversion copy review
