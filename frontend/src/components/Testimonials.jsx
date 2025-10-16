import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Software Engineer',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'As someone with ADHD, this app is a game-changer. The countdown timers keep me accountable, and the "no mercy" approach actually works for me. Finally broke my procrastination habit!',
      highlight: 'Broke procrastination habit'
    },
    {
      name: 'Marcus T.',
      role: 'Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'I\'ve tried every productivity app out there. TickBoom is different - it doesn\'t let you make excuses. My 45-day streak on gym commitments proves it works.',
      highlight: '45-day gym streak'
    },
    {
      name: 'Emily R.',
      role: 'Product Designer',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'The design is beautiful and the concept is brutal in the best way. Seeing my streak counter motivates me every single day. Worth every penny of the lifetime deal.',
      highlight: 'Lifetime user'
    },
    {
      name: 'Alex K.',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/150?img=8',
      rating: 5,
      text: 'This app turned my creative block into consistent output. The analytics show me exactly how I\'m improving. It\'s like having a strict but fair coach in your pocket.',
      highlight: 'Consistent output achieved'
    },
    {
      name: 'Jordan P.',
      role: 'Student',
      image: 'https://i.pravatar.cc/150?img=15',
      rating: 5,
      text: 'Perfect for ADHD minds like mine. Simple, focused, no distractions. The countdown creates just enough pressure to keep me on track without overwhelming me.',
      highlight: 'ADHD-friendly design'
    },
    {
      name: 'Rachel L.',
      role: 'Fitness Coach',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'I recommend this to all my clients now. The streak system is addictive in a good way. My clients are hitting their goals faster than ever before.',
      highlight: 'Recommends to clients'
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
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[rgba(0,240,255,0.3)]"
                />
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
