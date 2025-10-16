import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="cyberpunk-bg"></div>
      
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#b537ff] transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Terms of <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-[#8b8b9e]">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[rgba(255,255,255,0.85)] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using TickBoom ("Service", "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>
              TickBoom is a productivity application that helps users track commitments, build streaks, and develop discipline through countdown timers and progress tracking. The Service is available on iOS mobile devices and web browsers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">3.1 Registration</h3>
            <p className="mb-4">
              You must create an account to use certain features of the Service. You agree to provide accurate, current, and complete information and to update it as necessary.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">3.2 Account Security</h3>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">3.3 Age Requirement</h3>
            <p>
              You must be at least 13 years old to use the Service. Users under 18 should have parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">4.1 Pricing</h3>
            <p className="mb-4">
              We offer Free, Premium ($3.99/month), Elite ($29.99/year), and Lifetime ($79.99 one-time) subscription plans. Prices are subject to change with notice.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">4.2 Billing</h3>
            <p className="mb-4">
              Subscriptions automatically renew unless cancelled before the renewal date. You will be charged at the beginning of each billing period.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">4.3 Refunds</h3>
            <p className="mb-4">
              Monthly and yearly subscriptions are eligible for refund within 30 days of purchase. Lifetime purchases are eligible for refund within 30 days. Refunds are processed at our discretion.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">4.4 Cancellation</h3>
            <p>
              You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. You will retain access until then.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use automated means to access the Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Service are owned by TickBoom and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Content</h2>
            <p className="mb-3">
              You retain ownership of content you create in the Service (commitments, goals, notes). By using the Service, you grant us a license to use, store, and display your content solely for providing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers</h2>
            <p className="mb-3">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TICKBOOM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to the Service at any time, with or without cause or notice, including for violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of material changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <a href="mailto:support@tickboom.app" className="text-[#00f0ff] hover:text-[#b537ff] transition-colors">support@tickboom.app</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;