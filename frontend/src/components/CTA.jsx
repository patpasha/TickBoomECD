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
        setError('This email is already subscribed to updates!');
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
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="cyber-card p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff006e]/5"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(255,214,10,0.15)] border border-[rgba(0,240,255,0.5)] rounded-full mb-6 animate-pulse">
              <span className="text-[#00f0ff] text-sm font-bold tracking-wide">🎉 Now Available!</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Stop Making
              <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#b537ff] to-[#ff006e] bg-clip-text text-transparent">Excuses</span>?
            </h2>

            {/* Description */}
            <p className="text-xl text-[rgba(255,255,255,0.85)] mb-8 max-w-2xl mx-auto">
              Download TickBoom now and start transforming your commitments into reality. Available on the App Store.
            </p>

            {/* App Store Button - Primary CTA */}
            <div className="mb-8">
              <a 
                href="https://apps.apple.com/ca/app/tickboom-evil-countdown-timer/id6751061434?l=fr-CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#00f0ff] via-[#b537ff] to-[#ff006e] text-white text-lg font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 240, 255, 0.4)'
                }}
              >
                Download on App Store
                <ArrowRight size={24} />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-12 border-t border-[rgba(0,240,255,0.2)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#00f0ff] mb-2">500+</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#b537ff] mb-2">iOS</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">Available Now</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ff006e] mb-2">4.8★</div>
                  <div className="text-sm text-[#8b8b9e] uppercase tracking-wider">App Rating</div>
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