import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Languages } from 'lucide-react';
import Button from './Button';
import { SectionId, Language } from '../types';

interface HeaderProps {
  onNavigate: (sectionId: SectionId) => void;
  language: Language;
  onToggleLanguage: () => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, language, onToggleLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, id: SectionId.HOME },
    { label: t.about, id: SectionId.ABOUT },
    { label: t.courses, id: SectionId.COURSES },
    { label: t.reviews, id: SectionId.REVIEWS },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick(SectionId.HOME)}
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">DGG Tech</h1>
              <p className="text-xs text-blue-600 font-semibold tracking-wide">PATHSHALA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <button 
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'हिंदी' : 'ENG'}
            </button>

            <Button 
              variant="accent" 
              size="sm"
              onClick={() => handleNavClick(SectionId.CONTACT)}
            >
              {t.bookDemo}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-bold"
            >
              {language === 'en' ? 'HI' : 'EN'}
            </button>
            <button 
              className="p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="accent" 
            className="w-full justify-center"
            onClick={() => handleNavClick(SectionId.CONTACT)}
          >
            {t.bookDemo}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;