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
              Designed for Everyone, Especially ADHD Minds
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              TickBoom was initially designed with ADHD-friendly principles, but anyone struggling with procrastination and commitment can benefit. Our approach works because it addresses universal challenges in staying disciplined:
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
                <span><strong>External accountability</strong> - The app holds you accountable when willpower fails</span>
              </li>
            </ul>
          </section>

          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="text-[#ffd60a]" size={28} />
              Backed by Neuroscience
            </h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mb-4">
              TickBoom's effectiveness is rooted in neuroscientific principles that explain how our brains respond to deadlines, accountability, and immediate feedback.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="bg-[rgba(0,240,255,0.05)] p-4 rounded-lg border-l-4 border-[#00f0ff]">
                <h3 className="font-bold text-[#00f0ff] mb-2">Time Pressure & Dopamine</h3>
                <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed">
                  The countdown timer triggers the release of dopamine and norepinephrine, neurochemicals that enhance focus and motivation. This creates a state of "productive stress" that helps overcome procrastination without overwhelming anxiety.
                </p>
              </div>

              <div className="bg-[rgba(181,55,255,0.05)] p-4 rounded-lg border-l-4 border-[#b537ff]">
                <h3 className="font-bold text-[#b537ff] mb-2">Loss Aversion & Accountability</h3>
                <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed">
                  Our brains are wired to avoid losses more than to seek gains. By tracking failed commitments (not just successes), TickBoom leverages loss aversion to create stronger motivation. This taps into the amygdala's threat-detection system in a constructive way.
                </p>
              </div>

              <div className="bg-[rgba(255,0,110,0.05)] p-4 rounded-lg border-l-4 border-[#ff006e]">
                <h3 className="font-bold text-[#ff006e] mb-2">Visual Feedback & Habit Formation</h3>
                <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed">
                  Visual countdown and progress tracking activate the brain's reward system through immediate feedback loops. This reinforces neural pathways associated with task completion, making discipline easier over time through neuroplasticity.
                </p>
              </div>

              <div className="bg-[rgba(255,214,10,0.05)] p-4 rounded-lg border-l-4 border-[#ffd60a]">
                <h3 className="font-bold text-[#ffd60a] mb-2">Executive Function Support</h3>
                <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed">
                  For ADHD brains with executive function challenges, external structure compensates for prefrontal cortex difficulties. The app serves as an external "executive assistant," reducing cognitive load while maintaining accountability.
                </p>
              </div>
            </div>
          </section>

          <section className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4">Available Now</h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
              TickBoom is now live on the App Store! Join thousands of users who are transforming chaos into productivity superpowers. Our iOS app has already helped track over 2,500 commitments and continues to grow every day.
            </p>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mt-4">
              Download now and experience the "Do or Don't" approach with a 7-day free trial on our Elite plan. No credit card required to start.
            </p>
          </section>

          <section className="cyber-card p-8 bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(181,55,255,0.05)]">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Productivity?</h2>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mb-6">
              Whether you're someone with ADHD looking for an app that works with your brain, or anyone who's tired of making excuses and ready to build real discipline - TickBoom is for you.
            </p>
            <a 
              href="https://apps.apple.com/ca/app/tickboom-evil-countdown-timer/id6751061434?l=fr-CA" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download on App Store
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;