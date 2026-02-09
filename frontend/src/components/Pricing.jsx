import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for getting started with commitment tracking',
      features: [
        'Up to 30 commitments',
        'Up to 2 active commitments',
        'Basic countdown timers',
        'Streak countdown',
        'Basic analytics'
      ],
      color: '#8b8b9e',
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Elite',
      price: '$29.99',
      period: '/year',
      description: 'Annual billing - Save 37% compared to monthly',
      discount: 'Save $17.89/year • 7-day free trial',
      features: [
        'Unlimited commitments',
        'Up to 5 active commitments',
        'Design timer customization',
        'Detailed analytics & Insights',
        'Streak tracking',
        'Priority support',
        'Custom notifications',
        'Dark/Light theme variants',
        'Exclusive beta features'
      ],
      color: '#b537ff',
      gradient: 'from-[#b537ff] to-[#ff006e]',
      cta: 'Go Elite',
      popular: true
    },
    {
      name: 'Discipline',
      price: '$3.99',
      period: '/month',
      description: 'For serious individuals ready to level up',
      features: [
        'Unlimited commitments',
        'Up to 5 active commitments',
        'Design timer customization',
        'Detailed analytics & Insights',
        'Streak tracking',
        'Priority support',
        'Custom notifications',
        'Dark/Light theme variants',
        'Exclusive beta features'
      ],
      color: '#00f0ff',
      gradient: 'from-[#00f0ff] to-[#b537ff]',
      cta: 'Go Premium',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(255,0,110,0.15)] to-[rgba(255,214,10,0.15)] border border-[rgba(255,0,110,0.4)] rounded-full mb-6">
            <span className="text-[#ff006e] text-sm font-semibold tracking-wide">Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-[#00f0ff] to-[#ff006e] bg-clip-text text-transparent">Commitment</span>
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            Start free, upgrade when you're ready to unlock maximum potential.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Popular Badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 flex items-center gap-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20"
                  style={{ 
                    background: `linear-gradient(135deg, ${plan.color}, #b537ff)`,
                    color: '#fff',
                    boxShadow: `0 0 30px ${plan.color}60`
                  }}
                >
                  <Zap size={14} />
                  <span className="text-sm uppercase">Most Popular</span>
                </div>
              )}
              
              <div
                className={`cyber-card p-8 h-full ${
                  plan.popular ? 'border-2' : ''
                }`}
                style={{
                  borderColor: plan.popular ? plan.color : undefined,
                  overflow: 'visible'
                }}
              >
                {/* Plan Header */}
                <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-[#8b8b9e] text-sm mb-6">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span 
                    className="text-5xl font-bold"
                    style={{ color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#8b8b9e] text-lg mb-2">{plan.period}</span>
                </div>
                {plan.discount && (
                  <div className="mt-3">
                    <span className="text-[#ffd60a] text-sm font-semibold">{plan.discount}</span>
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className="text-[rgba(255,255,255,0.85)] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className="w-full py-4 font-bold uppercase tracking-wider transition-all rounded-xl"
                style={{
                  background: plan.popular ? `linear-gradient(135deg, ${plan.color}, #b537ff)` : 'transparent',
                  color: plan.popular ? '#fff' : plan.color,
                  border: `2px solid ${plan.color}`,
                  boxShadow: plan.popular ? `0 4px 20px ${plan.color}40` : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = plan.gradient ? `linear-gradient(135deg, ${plan.color}, #b537ff)` : plan.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = `0 4px 20px ${plan.color}60`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = plan.color;
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {plan.cta}
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Time Offer */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="cyber-card p-8 text-center relative overflow-hidden">
            {/* Animated border top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffd60a] via-[#ff006e] to-[#ffd60a] animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[rgba(255,214,10,0.2)] to-[rgba(255,0,110,0.2)] border border-[rgba(255,214,10,0.5)] rounded-full mb-4">
                <span className="text-[#ffd60a] text-sm font-bold uppercase tracking-wider">🔥 Limited Offer</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#ffd60a] to-[#ff006e] bg-clip-text text-transparent">Lifetime Access</span> - $79.99
              </h3>
              
              <p className="text-lg text-[rgba(255,255,255,0.85)] mb-6">
                Limited to <span className="text-[#ffd60a] font-bold">150 spots only</span> — pay once, own it forever.
              </p>
              
              <div className="flex flex-col items-center gap-3 mb-6 text-[rgba(255,255,255,0.85)]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00f0ff] rounded-full"></div>
                  <span className="text-base">All premium features, forever.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#b537ff] rounded-full"></div>
                  <span className="text-base">Free updates included.</span>
                </div>
              </div>
              
              <p className="text-base text-[rgba(255,255,255,0.9)] font-semibold">
                <span className="text-[#ffd60a]">⚡ Only a few spots left</span> — grab your lifetime pass!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;