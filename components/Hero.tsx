import React, { useState } from 'react';
import { SectionId } from '../types';
import Button from './Button';
import { TrendingUp, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: SectionId) => void;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, t }) => {
  const [imgSrc, setImgSrc] = useState("./classroom.jpg");

  return (
    <section 
      id={SectionId.HOME} 
      className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-red-100 animate-fade-in-up">
              <AlertCircle className="w-4 h-4" />
              {t.alert}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t.titlePrefix}<span className="text-blue-600">{t.titleHighlight}</span>{t.titleSuffix}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => onNavigate(SectionId.CONTACT)}
                className="group"
              >
                {t.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate(SectionId.ABOUT)}
              >
                {t.ctaSecondary}
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>{t.global}</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-full group">
            <div className="relative z-10 bg-white rounded-3xl p-3 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border border-gray-100">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  src={imgSrc}
                  onError={() => setImgSrc("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")}
                  alt="Students Collaborating" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{t.imageLabel}</p>
                    <p className="font-bold text-gray-900">{t.imageTitle}</p>
                    <p className="text-xs text-gray-600">{t.imageDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;