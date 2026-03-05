import React from 'react';
import { Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#' }
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: 'https://x.com/TickBoomEvilCD', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:support@tickboom.app', label: 'Email' }
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[rgba(0,240,255,0.2)] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_tickboom-app/artifacts/7e45afov_TickBooMLogo.png" 
                alt="TickBoom Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-wide">
                TICK<span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">BOOM</span>
              </span>
            </div>
            <p className="text-[#8b8b9e] mb-6 max-w-sm">
              Transform your resolutions into reality with focused discipline. Track your commitments, build streaks, get results.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border-2 border-[rgba(0,240,255,0.3)] rounded-lg flex items-center justify-center text-[#8b8b9e] hover:text-[#00f0ff] hover:border-[#00f0ff] hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#8b8b9e] hover:text-[#00f0ff] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Acquisition Notice */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[rgba(255,214,10,0.1)] to-[rgba(255,0,110,0.1)] border border-[rgba(255,214,10,0.3)] rounded-xl text-center">
          <p className="text-[#8b8b9e] text-sm">
            <span className="text-[#ffd60a] font-semibold">Interested in acquiring this app?</span> We're open to offers from serious buyers.{' '}
            <a href="mailto:support@tickboom.app" className="text-[#00f0ff] hover:text-[#b537ff] transition-colors underline">
              support@tickboom.app
            </a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(0,240,255,0.2)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8b8b9e] text-sm">
            © {currentYear} TickBoom. All rights reserved.
          </p>
          <p className="text-[#8b8b9e] text-sm">
            Built with <span className="text-[#ff006e]">discipline</span> and <span className="text-[#00f0ff]">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;