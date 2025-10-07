import React from 'react';
import { Timer, Flame, Target, Skull, TrendingUp, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Timer size={32} />,
      title: 'Evil Countdowns',
      description: 'Create time-bound commitments with precise countdown timers. Every second counts, every deadline matters.',
      color: '#00f0ff',
      gradient: 'from-[#00f0ff] to-[#b537ff]'
    },
    {
      icon: <Flame size={32} />,
      title: 'Streak System',
      description: 'Build unstoppable momentum with daily streaks. Break the chain, face the consequences.',
      color: '#ff006e',
      gradient: 'from-[#ff006e] to-[#ffd60a]'
    },
    {
      icon: <Target size={32} />,
      title: 'Commitment Tracking',
      description: 'Track multiple goals simultaneously. See your progress in real-time with brutal honesty.',
      color: '#b537ff',
      gradient: 'from-[#b537ff] to-[#00f0ff]'
    },
    {
      icon: <Skull size={32} />,
      title: 'No Mercy Mode',
      description: 'Abandon a task? It counts as failure. This app doesn\'t accept excuses—only results.',
      color: '#ff006e',
      gradient: 'from-[#ff006e] to-[#b537ff]'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Performance Analytics',
      description: 'Track success rates, completion times, and personal bests. Data-driven discipline.',
      color: '#3b82f6',
      gradient: 'from-[#3b82f6] to-[#00f0ff]'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Gamification',
      description: 'Earn achievements, unlock badges, and compete with yourself. Make discipline addictive.',
      color: '#ffd60a',
      gradient: 'from-[#ffd60a] to-[#ff006e]'
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(181,55,255,0.15)] to-[rgba(255,0,110,0.15)] border border-[rgba(181,55,255,0.4)] rounded-full mb-6">
            <span className="text-[#b537ff] text-sm font-semibold tracking-wide">Core Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Discipline</span>
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            Every feature designed to transform intentions into action. No fluff, only results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cyber-card p-8 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mb-6 flex items-center justify-center border border-[rgba(0,255,209,0.3)] relative"
                style={{ color: feature.color }}
              >
                {feature.icon}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ background: feature.color }}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;