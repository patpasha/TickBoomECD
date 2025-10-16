import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Software Engineer',
      rating: 5,
      text: 'Testing this app completely changed how I approach tasks. The countdown timers create the perfect amount of pressure. As someone with ADHD, I finally found something that works with my brain, not against it.',
      highlight: 'Beta Tester'
    },
    {
      name: 'Marcus T.',
      role: 'Entrepreneur',
      rating: 5,
      text: 'Been beta testing for 3 weeks and I\'m impressed. The "no mercy" approach is exactly what I needed. No more moving deadlines or making excuses - just accountability and results.',
      highlight: 'Beta Tester'
    },
    {
      name: 'Emily R.',
      role: 'Product Designer',
      rating: 5,
      text: 'The design is sleek and the UX is incredibly thoughtful. During beta testing, I loved how the countdown creates urgency without causing anxiety. It\'s the right balance.',
      highlight: 'Beta Tester'
    },
    {
      name: 'Alex K.',
      role: 'Content Creator',
      rating: 5,
      text: 'This beta helped me ship more content in a month than I did all quarter. The timer system makes commitments feel real. No fluff, just pure accountability.',
      highlight: 'Beta Tester'
    },
    {
      name: 'Jordan P.',
      role: 'Student',
      rating: 5,
      text: 'Perfect for ADHD minds like mine. The countdown creates just enough pressure to start tasks without overwhelming me. Simple, focused, and actually helps me follow through.',
      highlight: 'Beta Tester'
    },
    {
      name: 'Rachel L.',
      role: 'Legal Consultant',
      rating: 5,
      text: 'During beta testing, I used it for my own goals and loved it. The commitment tracking is straightforward but powerful. It holds you accountable in a way other apps don\'t.',
      highlight: 'Beta Tester'
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 lg:px-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(255,214,10,0.15)] to-[rgba(255,0,110,0.15)] border border-[rgba(255,214,10,0.4)] rounded-full mb-6">
            <span className="text-[#ffd60a] text-sm font-semibold tracking-wide">Beta Tester Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="bg-gradient-to-r from-[#ffd60a] to-[#ff006e] bg-clip-text text-transparent">People Love</span> About TickBoom
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-3xl mx-auto">
            Discover how TickBoom helps users build discipline and achieve their goals.
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
                {[...Array(testimonial.rating)].map((_, i) => (
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

              {/* Highlight Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[rgba(0,240,255,0.2)] to-[rgba(181,55,255,0.2)] border border-[rgba(0,240,255,0.3)] rounded-full text-[#00f0ff] text-xs font-semibold">
                  {testimonial.highlight}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,240,255,0.2)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b537ff] flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#8b8b9e]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[rgba(255,255,255,0.85)] mb-6">
            Join <span className="text-[#ffd60a] font-bold">100+ early adopters</span> who are already transforming their lives
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Join The Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
