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

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Contact Info */}
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
                <span>Feature suggestions & improvements</span>
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
      </div>
    </div>
  );
};

export default Contact;