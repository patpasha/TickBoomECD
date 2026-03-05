import React from 'react';
import { Shield, Zap, Brain, TrendingUp, Target, AlertTriangle } from 'lucide-react';

const WhyDifferent = () => {
  const differentiators = [
    {
      icon: <Target size={32} />,
      title: 'Real Accountability, Real Results',
      description: 'Unlike traditional todo apps that let you snooze endlessly, TickBoom tracks every commitment you make. See your patterns, understand your habits, and watch yourself improve over time.',
      color: '#ff006e'
    },
    {
      icon: <Zap size={32} />,
      title: 'Focus Countdown System',
      description: 'Time pressure activates your brain. Our countdown timers create urgency and deep focus, turning procrastination into action. The clock is ticking—and that\'s your superpower.',
      color: '#ffd60a'
    },
    {
      icon: <Brain size={32} />,
      title: 'ADHD-Optimized Design',
      description: 'Built specifically for ADHD brains. High contrast UI, minimal distractions, and neuroscience-backed features help you maintain focus when it matters most.',
      color: '#b537ff'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Streak Momentum',
      description: 'Track your success rate, daily streaks, and completion patterns. Gamification meets discipline—see your progress, spot your growth, and build lasting habits.',
      color: '#00f0ff'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: 'Commitment Over Tasks',
      description: 'This isn\'t a todo list—it\'s a commitment tracker. You\'re not checking boxes, you\'re honoring promises to yourself. Every commitment matters, every deadline counts.',
      color: '#3b82f6'
    },
    {
      icon: <Shield size={32} />,
      title: 'Built for Real Life',
      description: 'No unlimited snoozes. No endless "tomorrow" buttons. TickBoom respects your goals by keeping you honest. Structured flexibility with jokers and grace periods when life gets real.',
      color: '#ff006e'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(255,0,110,0.15)] to-[rgba(0,240,255,0.15)] border border-[rgba(255,0,110,0.4)] rounded-full mb-6">
            <span className="text-[#ff006e] text-sm font-semibold tracking-wide">The Difference</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-[#ff006e] to-[#00f0ff] bg-clip-text text-transparent">TickBoom</span> is Different
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            This isn't another todo app that lets you procrastinate in peace. TickBoom is designed to motivate you, challenge you, and keep you on track.
          </p>
        </div>

        {/* Comparison Callout */}
        <div className="cyber-card p-8 mb-16 max-w-4xl mx-auto bg-gradient-to-r from-[rgba(255,0,110,0.05)] to-[rgba(255,214,10,0.05)] border-2 border-[rgba(255,0,110,0.3)]">
          <div className="flex items-start gap-4">
            <div className="text-[#ff006e] text-5xl font-bold">❌</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Not Another "Gentle Reminder" App
              </h3>
              <p className="text-lg text-[rgba(255,255,255,0.85)] leading-relaxed">
                Other apps: <span className="text-[#8b8b9e]">"No worries! Snooze it for tomorrow 😊"</span>
                <br />
                <span className="text-[#00f0ff] font-semibold">TickBoom:</span> <span className="text-white font-semibold">"Task abandoned. Your stats don't lie. Data recorded."</span>
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="cyber-card p-8 group hover:scale-105 transition-transform duration-300"
              style={{
                borderColor: `${item.color}40`
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl relative"
                style={{ 
                  color: item.color,
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`
                }}
              >
                {item.icon}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity blur-2xl rounded-xl"
                  style={{ background: item.color }}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="mb-4">
              <span className="text-[rgba(255,255,255,0.7)] text-lg">
                Ready for an app that actually works?
              </span>
            </div>
            <a 
              href="https://apps.apple.com/ca/app/tickboom-evil-countdown-timer/id6751061434?l=fr-CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#00f0ff] text-white font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: '0 10px 40px rgba(255, 0, 110, 0.4)'
              }}
            >
              Download Now
              <Zap size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
