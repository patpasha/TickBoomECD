import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GDPR = () => {
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
            GDPR <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Compliance</span>
          </h1>
          <p className="text-[#8b8b9e]">General Data Protection Regulation Information</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[rgba(255,255,255,0.85)] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Our Commitment to GDPR</h2>
            <p>
              TickBoom is committed to protecting the privacy and data of our users in the European Union (EU) and European Economic Area (EEA) in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Legal Basis for Processing</h2>
            <p className="mb-3">We process your personal data under the following legal bases:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our contractual obligations to you</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests (e.g., fraud prevention, service improvement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Your GDPR Rights</h2>
            <p className="mb-3">Under GDPR, you have the following rights:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.1 Right to Access</h3>
                <p>You have the right to request copies of your personal data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.2 Right to Rectification</h3>
                <p>You have the right to request correction of inaccurate or incomplete data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.3 Right to Erasure</h3>
                <p>You have the right to request deletion of your personal data ("right to be forgotten").</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.4 Right to Restrict Processing</h3>
                <p>You have the right to request that we limit how we use your data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.5 Right to Data Portability</h3>
                <p>You have the right to request transfer of your data to another service provider.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.6 Right to Object</h3>
                <p>You have the right to object to our processing of your personal data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00f0ff] mb-2">3.7 Rights Related to Automated Decision-Making</h3>
                <p>You have the right not to be subject to decisions based solely on automated processing.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How to Exercise Your Rights</h2>
            <p className="mb-3">
              To exercise any of your GDPR rights, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:support@tickboom.app" className="text-[#00f0ff] hover:text-[#b537ff] transition-colors">support@tickboom.app</a>
            </p>
            <p>
              We will respond to your request within 30 days. In some cases, we may need to verify your identity before processing your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data We Collect</h2>
            <p className="mb-3">We collect and process the following categories of personal data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Identity data (name, email address)</li>
              <li>Contact data (email, app notifications preferences)</li>
              <li>Technical data (IP address, device information, usage data)</li>
              <li>Transaction data (payment information, subscription details)</li>
              <li>Profile data (user-generated content, commitments, goals)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
            <p>
              If we transfer your data outside the EU/EEA, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Transfer to countries with adequacy decisions</li>
              <li>Your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. This includes encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Data Breach Notification</h2>
            <p>
              In the event of a data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours of becoming aware of the breach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Data</h2>
            <p>
              We do not knowingly collect or process personal data from children under 16 (or the applicable age in your EU member state) without parental consent. If you believe we have collected such data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Supervisory Authority</h2>
            <p>
              You have the right to lodge a complaint with your local data protection supervisory authority if you believe we have not complied with GDPR requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Updates to This Information</h2>
            <p>
              We may update this GDPR compliance information from time to time. Material changes will be communicated to you via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Our Data Protection Officer</h2>
            <p>
              For any questions or concerns regarding GDPR compliance or data protection, please contact:
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

export default GDPR;