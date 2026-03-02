import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "I\'ve tried every productivity app out there. They all let me hit snooze forever. TickBoom\'s countdown timers don\'t lie—either I finish my essay or I don\'t. My grades went from C average to making Dean\'s List in one semester. First app that actually works with my ADHD brain.",
      author: 'Sarah M.',
      role: 'University Student',
      metrics: ['C average → Dean\'s List', '47 assignments on time', '21-day study streak']
    },
    {
      text: "Running a startup with ADHD is chaos. I had 50 unfinished projects and investors breathing down my neck. TickBoom forced me to commit: launch MVP in 30 days or face the data. Brutal? Yes. Effective? I shipped in 28 days. This isn\'t a todo app—it\'s a commitment machine.",
      author: 'Marcus T.',
      role: 'Startup Founder',
      metrics: ['MVP shipped in 28 days', 'Closed $500K seed round', 'Team uses TickBoom']
    },
    {
      text: "I\'m a creative with zero follow-through. Every week I\'d start a new portfolio project and abandon it by Thursday. The streak system changed everything. I\'ve finished more client projects in 2 months than I did all last year.",
      author: 'Alex R.',
      role: 'Graphic Designer',
      metrics: ['12 projects completed', '60-day active streak', 'Doubled freelance income']
    },
    {
      text: "Between 2 kids, a full-time job, and trying to exercise, I felt like I was failing at everything. TickBoom helped me commit to the bare minimum. The stats proved I wasn\'t failing—I was completing 85% of my commitments. That visible proof kept me going when mom guilt kicked in.",
      author: 'Jennifer K.',
      role: 'Working Mom',
      metrics: ['85% completion rate', 'Lost 15 lbs in 3 months', 'Promoted at work']
    },
    {
      text: "I work in sprints but always blow past deadlines. The countdown timers gave me the same adrenaline as a looming deployment—but every day. First sprint I finished early in 3 years. My manager noticed. My stress levels dropped.",
      author: 'David L.',
      role: 'Software Developer',
      metrics: ['Zero overtime', 'Stress dropped 50%', 'Finished 2 days early']
    },
    {
      text: "I've had a gym membership for 4 years. Went maybe 10 times total. With TickBoom, I committed to 30-minute workouts every other day. 8 weeks later, I ran my first 5K. The app didn't coddle me into fitness—it forced me to show up.",
      author: 'Mike S.',
      role: 'Fitness Journey',
      metrics: ['0 to 5K in 8 weeks', '35 workouts (90% success)', 'Lost 18 lbs']
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 lg:px-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(255,214,10,0.15)] to-[rgba(255,0,110,0.15)] border border-[rgba(255,214,10,0.4)] rounded-full mb-6">
            <span className="text-[#ffd60a] text-sm font-semibold tracking-wide">Real Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#ffd60a] to-[#ff006e] bg-clip-text text-transparent">Proven Success</span> Stories
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            See how TickBoom transforms lives with measurable results and real accountability.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="cyber-card p-6 relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote size={48} className="text-[#00f0ff]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="text-[#ffd60a] fill-[#ffd60a]" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[rgba(255,255,255,0.85)] leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Metrics */}
              <div className="mb-4 space-y-2">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="inline-block mr-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[rgba(255,214,10,0.2)] to-[rgba(255,0,110,0.2)] border border-[rgba(255,214,10,0.3)] rounded-full text-[#ffd60a] text-xs font-semibold">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,240,255,0.2)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b537ff] flex items-center justify-center font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-[#8b8b9e]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[rgba(255,255,255,0.85)] mb-6">
            Join <span className="text-[#ffd60a] font-bold">thousands of users</span> who are already achieving measurable results
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
