import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${BACKEND_URL}/api/waitlist/subscribe`, {
        email: email
      });

      if (response.status === 201) {
        setSubmitted(true);
        setTimeout(() => {
          setEmail('');
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setError('This email is already on the waitlist!');
      } else {
        setError('Something went wrong. Please try again.');
      }
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="relative py-24 px-6 lg:px-12 bg-[#12121a]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="cyber-card p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff006e]/5"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(181,55,255,0.15)] border border-[rgba(0,240,255,0.4)] rounded-full mb-6">
              <span className="text-[#00f0ff] text-sm font-semibold tracking-wide">Coming Soon</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Stop Making
              <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#b537ff] to-[#ff006e] bg-clip-text text-transparent">Excuses</span>?
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
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8b8b9e]" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(0,240,255,0.3)] px-12 py-4 text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00f0ff] transition-colors rounded-xl backdrop-blur-sm"
                    />
                  </div>
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Join Waitlist
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-[#00f0ff] text-lg">
                <CheckCircle2 size={24} />
                <span className="font-semibold">You're on the list! Check your email.</span>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-12 pt-12 border-t border-[rgba(0,240,255,0.2)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#00f0ff] mb-2">500+</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">Early Adopters</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#b537ff] mb-2">iOS</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">Available Now</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ff006e] mb-2">Q4 2025</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">Android Launch</div>
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