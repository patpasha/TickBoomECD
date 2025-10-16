import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Heart, Zap } from 'lucide-react';

const Careers = () => {
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Join <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">TickBoom</span>
          </h1>
          <p className="text-xl text-[rgba(255,255,255,0.85)]">
            Help us build the future of discipline and productivity
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="cyber-card p-12 text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <Rocket size={64} className="text-[#00f0ff] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">No Open Positions Yet</h2>
            <p className="text-xl text-[rgba(255,255,255,0.85)] mb-6">
              We're currently a small team focused on launching TickBoom. As we grow, we'll be looking for talented individuals who share our vision.
            </p>
            <p className="text-[#8b8b9e] mb-8">
              Want to stay updated on future opportunities? Send us your info at{' '}
              <a href="mailto:support@tickboom.app" className="text-[#00f0ff] hover:text-[#b537ff] transition-colors">
                support@tickboom.app
              </a>
            </p>
          </div>
        </div>

        {/* What We Value */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">What We Value</h2>
          
          <div className="cyber-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00f0ff] to-[#b537ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discipline Over Motivation</h3>
                <p className="text-[rgba(255,255,255,0.85)]">
                  We believe in building systems and habits that work even when motivation fades. We practice what we preach.
                </p>
              </div>
            </div>
          </div>

          <div className="cyber-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#b537ff] to-[#ff006e] rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Empathy for ADHD</h3>
                <p className="text-[rgba(255,255,255,0.85)]">
                  We understand the struggles of ADHD minds and design with empathy. Our goal is to create tools that actually help.
                </p>
              </div>
            </div>
          </div>

          <div className="cyber-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffd60a] to-[#ff006e] rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ship Fast, Learn Faster</h3>
                <p className="text-[rgba(255,255,255,0.85)]">
                  We believe in rapid iteration and learning from real users. Perfect is the enemy of done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 cyber-card p-8 text-center bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(181,55,255,0.05)]">
          <h3 className="text-2xl font-bold mb-4">Interested in Future Opportunities?</h3>
          <p className="text-[rgba(255,255,255,0.85)] mb-6">
            Drop us a line and tell us about yourself. We'll reach out when positions open up.
          </p>
          <a href="mailto:support@tickboom.app" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;