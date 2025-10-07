import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-[rgba(0,240,255,0.2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00f0ff] to-[#b537ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00f0ff]/50">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold tracking-wide">
              TICK<span className="bg-gradient-to-r from-[#00f0ff] to-[#b537ff] bg-clip-text text-transparent">BOOM</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-[#8b8b9e] hover:text-[#00f0ff] transition-colors text-base font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#8b8b9e] hover:text-[#00f0ff] transition-colors text-base font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-[#8b8b9e] hover:text-[#00f0ff] transition-colors text-base font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('cta')} className="btn-primary px-6 py-2 min-h-[44px] text-sm">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[rgba(0,255,209,0.2)] pt-4">
            <button onClick={() => scrollToSection('features')} className="text-[#666666] hover:text-[#00FFD1] transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#666666] hover:text-[#00FFD1] transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-[#666666] hover:text-[#00FFD1] transition-colors text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection('cta')} className="btn-primary w-full text-sm">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;