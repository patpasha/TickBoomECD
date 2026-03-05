import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const BeforeAfter = () => {
  const transformations = [
    {
      before: { value: '3', label: 'tasks/week', color: '#8b8b9e' },
      after: { value: '15', label: 'tasks/week', color: '#00f0ff' },
      category: 'Task Completion',
      improvement: '5x'
    },
    {
      before: { value: '0', label: 'day streak', color: '#8b8b9e' },
      after: { value: '21', label: 'day streak', color: '#b537ff' },
      category: 'Consistency',
      improvement: '21 days'
    },
    {
      before: { value: '40%', label: 'follow-through', color: '#8b8b9e' },
      after: { value: '87%', label: 'follow-through', color: '#ff006e' },
      category: 'Commitment Rate',
      improvement: '+117%'
    },
    {
      before: { value: '2h', label: 'focused/day', color: '#8b8b9e' },
      after: { value: '5.5h', label: 'focused/day', color: '#ffd60a' },
      category: 'Deep Focus Time',
      improvement: '2.75x'
    }
  ];

  return (
    <section data-testid="before-after-section" className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(255,214,10,0.15)] border border-[rgba(0,240,255,0.4)] rounded-full mb-6">
            <TrendingUp className="inline-block mr-2 text-[#00f0ff]" size={16} />
            <span className="text-[#00f0ff] text-sm font-semibold tracking-wide">Real Transformations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Before & After{' '}
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#ffd60a] bg-clip-text text-transparent">TickBoom</span>
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.85)] max-w-2xl mx-auto">
            Average results from users who committed to TickBoom for 30 days.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((item, index) => (
            <div
              key={index}
              data-testid={`transformation-card-${index}`}
              className="cyber-card p-6 relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Category Label */}
              <div className="text-xs font-bold uppercase tracking-widest text-[#8b8b9e] mb-6">
                {item.category}
              </div>

              {/* Before */}
              <div className="mb-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                <div className="text-xs uppercase tracking-wider text-[#8b8b9e] mb-1">Before</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#8b8b9e] line-through opacity-60">{item.before.value}</span>
                  <span className="text-sm text-[#8b8b9e]">{item.before.label}</span>
                </div>
              </div>

              {/* After */}
              <div className="mb-4">
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: item.after.color }}>After</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold" style={{ color: item.after.color }}>{item.after.value}</span>
                  <span className="text-sm text-[rgba(255,255,255,0.7)]">{item.after.label}</span>
                </div>
              </div>

              {/* Improvement Badge */}
              <div 
                className="inline-block px-3 py-1.5 rounded-full text-sm font-bold"
                style={{ 
                  background: `${item.after.color}15`,
                  border: `1px solid ${item.after.color}40`,
                  color: item.after.color
                }}
              >
                <ArrowRight size={14} className="inline-block mr-1 -mt-0.5" />
                {item.improvement}
              </div>

              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl blur-xl"
                style={{ background: item.after.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8 text-sm text-[#8b8b9e]">
          Based on aggregated user data. Individual results may vary.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
