import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

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
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative bg-black border-t border-[rgba(0,255,209,0.2)] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00FFD1] to-[#00FF41] flex items-center justify-center" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                <span className="text-black font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold tracking-wider">
                TICK<span className="text-[#00FFD1]">BOOM</span>
              </span>
            </div>
            <p className="text-[#666666] mb-6 max-w-sm">
              Transform your resolutions into reality with ruthless discipline. No excuses, only results.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-[rgba(0,255,209,0.3)] flex items-center justify-center text-[#666666] hover:text-[#00FFD1] hover:border-[#00FFD1] transition-colors"
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
                      className="text-[#666666] hover:text-[#00FFD1] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(0,255,209,0.2)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666666] text-sm">
            © {currentYear} TickBoom. All rights reserved.
          </p>
          <p className="text-[#666666] text-sm">
            Built with <span className="text-[#FF0055]">discipline</span> and <span className="text-[#00FFD1]">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;