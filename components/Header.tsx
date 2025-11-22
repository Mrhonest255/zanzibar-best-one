
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from './Button';
import { BRAND_NAME, WHATSAPP_LINK } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Safari Calc', path: '/calculator' },
    { name: 'Transfers', path: '/transfers' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                <span className="font-serif font-bold text-xl">Z</span>
             </div>
             <span className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-dark' : 'text-white drop-shadow-md'}`}>
               {BRAND_NAME}
             </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm uppercase tracking-wide transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-gold drop-shadow-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-semibold ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}
            >
              <Phone size={18} />
              <span className="hidden xl:inline">Chat Now</span>
            </a>
            <Link to="/plan-trip">
              <Button size="sm" variant="secondary">
                <Calendar size={16} className="mr-2" />
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-800' : 'text-white drop-shadow-md'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col p-6 gap-4 lg:hidden animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button asLink href={WHATSAPP_LINK} variant="outline" fullWidth>
              WhatsApp Chat
            </Button>
            <Link to="/plan-trip" className="w-full">
              <Button variant="secondary" fullWidth>Plan My Trip</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
