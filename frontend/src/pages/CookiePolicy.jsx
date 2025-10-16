import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
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
            Cookie <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-[#8b8b9e]">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[rgba(255,255,255,0.85)] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website or use our app. They help us provide you with a better experience by remembering your preferences and understanding how you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            
            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">2.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the Service to function properly. They enable core functionality such as security, authentication, and session management.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">2.2 Performance Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our Service by collecting anonymous information about pages visited, time spent, and errors encountered.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">2.3 Functionality Cookies</h3>
            <p className="mb-4">
              These cookies remember your choices and preferences (such as language, region, or theme) to provide enhanced, personalized features.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">2.4 Analytics Cookies</h3>
            <p>
              We use analytics cookies to measure and analyze how our Service is used. This helps us improve features and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-[rgba(0,240,255,0.2)] mt-4">
                <thead className="bg-[rgba(0,240,255,0.1)]">
                  <tr>
                    <th className="px-4 py-3 text-left">Cookie Type</th>
                    <th className="px-4 py-3 text-left">Purpose</th>
                    <th className="px-4 py-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[rgba(0,240,255,0.2)]">
                    <td className="px-4 py-3">Session Cookies</td>
                    <td className="px-4 py-3">Maintain login state</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr className="border-t border-[rgba(0,240,255,0.2)]">
                    <td className="px-4 py-3">Preference Cookies</td>
                    <td className="px-4 py-3">Remember settings</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                  <tr className="border-t border-[rgba(0,240,255,0.2)]">
                    <td className="px-4 py-3">Analytics Cookies</td>
                    <td className="px-4 py-3">Usage tracking</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
            <p className="mb-3">
              We may use third-party service providers that set cookies on your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Analytics providers (to understand usage patterns)</li>
              <li>Payment processors (to facilitate secure transactions)</li>
              <li>Customer support tools (to provide assistance)</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Managing Cookies</h2>
            <p className="mb-3">
              You can control and manage cookies in several ways:
            </p>
            
            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">5.1 Browser Settings</h3>
            <p className="mb-4">
              Most browsers allow you to refuse or delete cookies. Methods for doing so vary by browser. You can usually find these settings in your browser's "Options" or "Preferences" menu.
            </p>

            <h3 className="text-xl font-semibold text-[#00f0ff] mb-3">5.2 Mobile Devices</h3>
            <p className="mb-4">
              On mobile devices, you can control tracking through your device settings or the app settings.
            </p>

            <p className="text-[#ff006e] mt-4">
              <strong>Note:</strong> Disabling certain cookies may limit your ability to use some features of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;