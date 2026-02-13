import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes TickBoom different from other task apps?",
      answer: "TickBoom doesn't let you procrastinate. Unlike traditional todo apps with endless snooze buttons, we use countdown timers that create real urgency. You either do it or you don't—no middle ground. It's accountability, not coddling."
    },
    {
      question: "Is TickBoom only for people with ADHD?",
      answer: "No! TickBoom is designed for everyone who struggles with procrastination and following through on commitments. We're optimized for ADHD brains (high contrast, minimal distractions, time pressure), but anyone tired of making excuses will benefit from our approach."
    },
    {
      question: "How do countdown timers help with productivity?",
      answer: "Countdown timers create urgency and activate your brain's response to deadlines. When you see time ticking down, procrastination becomes harder. It's the difference between 'I'll do it someday' and 'I have 23 minutes left.' Science shows time pressure improves focus and completion rates."
    },
    {
      question: "What happens if I don't complete a task before the timer ends?",
      answer: "The task is marked as incomplete in your history. Your streak only breaks if you fail to complete at least one commitment in a day or don't connect to the app. So one failed task won't ruin your progress—you can still save your streak by completing another commitment that same day. We track your completion rate so you can see patterns. No punishment—just honest accountability. Every abandoned task is a learning opportunity to build better habits."
    },
    {
      question: "Can I pause or extend timers?",
      answer: "No pause button—that's the point. TickBoom creates the same pressure as real deadlines. If you set a commitment, you commit. This is what makes TickBoom effective where other apps fail. However, life happens. You get 3 'replan' jokers per week to reschedule a task, and 3 'grace period' extensions per week to add extra time when you really need it. These limited lifelines maintain accountability while acknowledging that flexibility is sometimes necessary. Use them wisely."
    },
    {
      question: "How does the streak system work?",
      answer: "Complete tasks on consecutive days to build a streak. Each day you complete at least one commitment strengthens your streak. Break the chain, and you start over. It's simple: consistency builds discipline, and streaks make consistency visible."
    },
    {
      question: "What's included in the free Starter plan?",
      answer: "The Starter plan includes up to 30 commitments, 2 active tasks at once, basic countdown timers, streak tracking, and basic analytics. It's perfect for getting started and seeing if our 'Do or Don't' approach works for you."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes! The Elite annual plan includes a 7-day free trial. You can experience unlimited commitments, advanced analytics, priority support, and all premium features risk-free. Cancel anytime during the trial with no charges."
    },
    {
      question: "Can I use TickBoom on Android?",
      answer: "Currently, TickBoom is available on iOS (iPhone and iPad). An Android version is in development and will be released soon. Join our newsletter to be notified when Android launches."
    },
    {
      question: "How does TickBoom handle privacy?",
      answer: "Your data is yours. We don't sell or share your personal information. All commitment data is encrypted and stored securely. You can export or delete your data anytime. Check our Privacy Policy for full details."
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-3 bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(181,55,255,0.15)] border border-[rgba(0,240,255,0.4)] rounded-full mb-6">
            <HelpCircle className="inline-block mr-2 text-[#00f0ff]" size={16} />
            <span className="text-[#00f0ff] text-sm font-semibold tracking-wide">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-[rgba(255,255,255,0.85)] max-w-2xl mx-auto">
            Everything you need to know about TickBoom and how it works.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="cyber-card overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === index ? '#00f0ff' : 'rgba(0,240,255,0.2)'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[rgba(0,240,255,0.05)] transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className="text-[#00f0ff] flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Answer Dropdown */}
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px'
                }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-[rgba(0,240,255,0.2)] pt-4">
                    <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[rgba(255,255,255,0.7)] mb-4">
            Still have questions?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#b537ff] transition-colors font-semibold"
          >
            Get in touch with us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
