import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Zap, Users } from 'lucide-react';

const About = () => {
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
            About <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">TickBoom</span>
          </h1>
          <p className="text-xl text-[rgba(255,255,255,0.85)]">
            Transforming good intentions into lasting discipline
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-[#00f0ff]" size={28} />
              Our Mission
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              TickBoom was born from a simple observation: most productivity apps are too forgiving. They let you snooze, reschedule, and make excuses. We took a different approach - one inspired by the ruthless accountability that actually creates change.
            </p>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mt-4">
              Our mission is to help people transform their commitments into discipline through a system that doesn't accept excuses. We believe in positive pressure, visible accountability, and the power of consistency.
            </p>
          </section>

          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="text-[#b537ff]" size={28} />
              The Evil Philosophy
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              Why "Evil Countdown"? Because we're brutally honest about failure. In TickBoom, abandoned tasks count as failures. There's no "pause" button on your commitments. The countdown keeps ticking, just like time in real life.
            </p>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mt-4">
              This approach creates the healthy pressure needed to overcome procrastination and build real discipline. It's not about being harsh - it's about being effective.
            </p>
          </section>

          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-[#ff006e]" size={28} />
              Built for ADHD Minds
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              TickBoom is designed with ADHD-friendly principles in mind. We focus on:
            </p>
            <ul className="mt-4 space-y-3 text-[rgba(255,255,255,0.85)]">
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">•</span>
                <span><strong>Simple, focused interface</strong> - No overwhelming features or distractions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">•</span>
                <span><strong>Visual countdown timers</strong> - Clear, immediate feedback on time remaining</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">•</span>
                <span><strong>Just enough pressure</strong> - Creates urgency without causing anxiety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">•</span>
                <span><strong>External accountability</strong> - The app holds you accountable when your brain won't</span>
              </li>
            </ul>
          </section>

          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4">Current Status</h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              We're currently in beta testing with 100+ early adopters who are helping us refine the experience. The iOS version is coming soon to the App Store, with a target launch in Q4 2025.
            </p>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mt-4">
              Join our waitlist to be among the first to experience TickBoom when we launch.
            </p>
          </section>

          <section className="cyber-card p-8 bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(181,55,255,0.05)]">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mb-6">
              Whether you're someone with ADHD looking for an app that works with your brain, or anyone who's tired of making excuses and ready to build real discipline - TickBoom is for you.
            </p>
            <Link to="/" className="btn-primary">
              Join the Waitlist
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;