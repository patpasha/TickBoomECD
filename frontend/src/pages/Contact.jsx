import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:support@tickboom.app?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="cyberpunk-bg"></div>
      
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#b537ff] transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-[rgba(255,255,255,0.85)]">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00f0ff] to-[#b537ff] rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-[#8b8b9e]">We'll respond within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:support@tickboom.app" 
                className="text-[#00f0ff] hover:text-[#b537ff] transition-colors text-lg font-semibold"
              >
                support@tickboom.app
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-xl font-bold mb-4">What can we help with?</h3>
              <ul className="space-y-3 text-[rgba(255,255,255,0.85)]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff]">•</span>
                  <span>General inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff]">•</span>
                  <span>Technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff]">•</span>
                  <span>Beta testing feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff]">•</span>
                  <span>Business inquiries & acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00f0ff]">•</span>
                  <span>Partnership opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(0,240,255,0.3)] px-4 py-3 text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00f0ff] transition-colors rounded-xl"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(0,240,255,0.3)] px-4 py-3 text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00f0ff] transition-colors rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(0,240,255,0.3)] px-4 py-3 text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00f0ff] transition-colors rounded-xl"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(0,240,255,0.3)] px-4 py-3 text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00f0ff] transition-colors rounded-xl resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 size={64} className="text-[#00f0ff] mb-4" />
                <p className="text-xl font-semibold text-center">Your email client will open shortly!</p>
                <p className="text-[#8b8b9e] text-center mt-2">We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;