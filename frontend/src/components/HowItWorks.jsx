import React from 'react';
import { Plus, Play, BarChart3, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Plus size={32} />,
      title: 'Create Commitment',
      description: 'Define your goal and set a countdown timer. Be specific, be bold.',
      color: '#00f0ff',
      screenshot: 'https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/s7kqiv1c_IMG_8423.PNG'
    },
    {
      number: '02',
      icon: <Play size={32} />,
      title: 'Start Timer',
      description: 'Activate your countdown. The clock is ticking, and there\'s no pause button.',
      color: '#b537ff',
      screenshot: 'https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/x9dlz4t4_IMG_8424.PNG'
    },
    {
      number: '03',
      icon: <BarChart3 size={32} />,
      title: 'Track Progress',
      description: 'Monitor your streaks, success rates, and performance metrics in real-time.',
      color: '#3b82f6',
      screenshot: 'https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/4rvnf7va_IMG_8746.PNG'
    },
    {
      number: '04',
      icon: <Award size={32} />,
      title: 'Build Discipline',
      description: 'Complete tasks, build streaks, track your growth. Transform into your best self.',
      color: '#ffd60a',
      screenshot: 'https://customer-assets.emergentagent.com/job_cyber-countdown/artifacts/f2l7wkkb_IMG_8830.PNG'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 lg:px-12 bg-[#12121a]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(59,130,246,0.15)] border border-[rgba(0,240,255,0.4)] rounded-full mb-6">
            <span className="text-[#00f0ff] text-sm font-semibold tracking-wide">The Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">TickBoom</span> Works
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            Four simple steps to transform your life. The method is straightforward—the execution demands discipline.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[rgba(0,240,255,0.5)] to-transparent"></div>
              )}

              {/* Card */}
              <div className="cyber-card p-8 h-full relative group">
                {/* Number Badge - Positioned inside card */}
                <div 
                  className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center border-3 bg-[#0a0a0f] font-bold text-2xl rounded-lg shadow-xl z-10"
                  style={{ 
                    borderColor: step.color, 
                    color: step.color, 
                    boxShadow: `0 0 25px ${step.color}70, inset 0 0 15px ${step.color}30`,
                    borderWidth: '3px'
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl relative"
                  style={{ 
                    color: step.color,
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`
                  }}
                >
                  {step.icon}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity blur-2xl rounded-xl"
                    style={{ background: step.color }}
                  ></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 cyber-card p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">
              The <span className="text-[#ff006e]">Evil</span> Philosophy
            </h3>
            <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-4xl mx-auto leading-relaxed">
              Unlike traditional productivity apps that coddle failure, TickBoom embraces a strict approach.
              <span className="text-white font-semibold"> Every abandoned task is a recorded failure.</span>
              {' '}This creates positive pressure that transforms good intentions into lasting habits.
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent font-semibold"> No excuses. Only results.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;