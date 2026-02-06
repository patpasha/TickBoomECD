import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 px-6 lg:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="cyberpunk-bg"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(181,55,255,0.15)] border border-[rgba(0,240,255,0.4)] rounded-full backdrop-blur-sm">
                <Zap size={16} className="text-[#00f0ff]" />
                <span className="text-[#00f0ff] text-sm font-semibold tracking-wide">Evil Countdown System</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[rgba(181,55,255,0.15)] to-[rgba(255,0,110,0.15)] border border-[rgba(181,55,255,0.4)] rounded-full backdrop-blur-sm">
                <span className="text-[#b537ff] text-sm font-semibold tracking-wide">✨ ADHD-Friendly</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#b537ff] to-[#ff006e] bg-clip-text text-transparent">
                Resolutions
              </span>
              <br />
              Into Reality
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-[rgba(255,255,255,0.85)] leading-relaxed">
              A ruthlessly effective productivity app that turns commitments into discipline. ADHD-friendly design for better focus.
              <span className="text-[#ff006e] font-semibold"> No excuses. No mercy.</span>
            </p>

            {/* Release Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(255,214,10,0.15)] border border-[rgba(0,240,255,0.5)] rounded-full backdrop-blur-sm mb-4 animate-pulse">
              <span className="text-[#00f0ff] text-sm font-bold">🎉 Available Now on App Store!</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://apps.apple.com/ca/app/tickboom-evil-countdown-timer/id6751061434?l=fr-CA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Download on App Store
                <ArrowRight size={20} />
              </a>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                See How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(0,240,255,0.2)]">
              <div>
                <div className="text-3xl font-bold text-[#00f0ff]">2.5K+</div>
                <div className="text-sm text-[#8b8b9e] uppercase tracking-wider mt-1">Commitments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#b537ff]">87%</div>
                <div className="text-sm text-[#8b8b9e] uppercase tracking-wider mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ff006e]">50K+</div>
                <div className="text-sm text-[#8b8b9e] uppercase tracking-wider mt-1">Hours Tracked</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[600px]">
            <div className="relative w-full max-w-[280px] lg:max-w-[300px]" style={{ 
              transform: 'rotate(-8deg) translateY(-20px)',
              transformOrigin: 'center center'
            }}>
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff] via-[#b537ff] to-[#ff006e] opacity-30 blur-3xl" style={{ transform: 'scale(1.3)' }}></div>
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#12121a] border-[3px] border-[rgba(0,240,255,0.5)] rounded-[36px] p-3 shadow-2xl hover:scale-105 transition-transform duration-300" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 240, 255, 0.4), 0 0 30px rgba(181, 55, 255, 0.3)'
              }}>
                <img 
                  src="https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/tjesj6k9_IMG_8422.PNG" 
                  alt="TickBoom App Interface" 
                  className="w-full rounded-[26px]"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                />
              </div>

              {/* Floating Neon Elements - Adjusted for new position */}
              <div className="absolute -top-12 -right-16 w-40 h-40 bg-[#00f0ff] opacity-20 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute -bottom-12 -left-16 w-48 h-48 bg-[#ff006e] opacity-20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-20 w-32 h-32 bg-[#b537ff] opacity-20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;