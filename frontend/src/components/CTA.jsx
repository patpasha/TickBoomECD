import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In real app, this would call API
      console.log('Waitlist signup:', email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="cta" className="relative py-24 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="cyber-card p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Top Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent"></div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFD1]/5 via-transparent to-[#B026FF]/5"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-[rgba(0,255,209,0.1)] border border-[rgba(0,255,209,0.3)] mb-6">
              <span className="text-[#00FFD1] text-sm uppercase tracking-wider">Coming Soon</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Stop Making
              <br />
              <span className="text-[#00FFD1] glow-text">Excuses</span>?
            </h2>

            {/* Description */}
            <p className="text-xl text-[rgba(255,255,255,0.85)] mb-12 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the most disciplined productivity app ever created.
            </p>

            {/* Email Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666666]" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,209,0.3)] px-12 py-4 text-white placeholder-[#666666] focus:outline-none focus:border-[#00FFD1] transition-colors"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Join Waitlist
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-[#00FF41] text-lg">
                <CheckCircle2 size={24} />
                <span className="font-semibold">You're on the list! Check your email.</span>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-12 pt-12 border-t border-[rgba(0,255,209,0.2)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#00FFD1] mb-2">5,000+</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">On Waitlist</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B026FF] mb-2">iOS & Android</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">Both Platforms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#00FF41] mb-2">Q2 2025</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">Launch Date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;