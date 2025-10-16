import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Why Traditional Productivity Apps Fail',
      excerpt: 'Most productivity apps are too forgiving. They let you reschedule indefinitely, snooze notifications, and make endless excuses. Here\'s why that doesn\'t work...',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Philosophy'
    },
    {
      title: 'Building an ADHD-Friendly Countdown System',
      excerpt: 'How we designed TickBoom\'s countdown timers to create just enough pressure without overwhelming ADHD minds. The psychology behind effective time pressure...',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'Design'
    },
    {
      title: 'The Power of Accountability in Discipline',
      excerpt: 'Why external accountability matters more than motivation. How TickBoom\'s "no mercy" approach creates lasting behavioral change...',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Psychology'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="cyberpunk-bg"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#b537ff] transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            TickBoom <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-[rgba(255,255,255,0.85)]">
            Insights on discipline, productivity, and building better habits
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="cyber-card p-12 text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-[rgba(255,255,255,0.85)] mb-6">
              We're working on creating valuable content about discipline, productivity, and the psychology behind effective habit formation.
            </p>
            <p className="text-[#8b8b9e]">
              Check back soon for articles on building discipline, ADHD-friendly productivity techniques, and the science behind our "no mercy" approach.
            </p>
          </div>
        </div>

        {/* Preview Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="cyber-card p-6 opacity-50 cursor-not-allowed">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[rgba(0,240,255,0.2)] to-[rgba(181,55,255,0.2)] border border-[rgba(0,240,255,0.3)] rounded-full text-[#00f0ff] text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-[rgba(255,255,255,0.7)] mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#8b8b9e]">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;