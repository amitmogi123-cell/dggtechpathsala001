import React from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
  t: any;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-none">DGG Tech</h1>
                <p className="text-xs text-blue-400 font-semibold tracking-wide">PATHSHALA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {t.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => onNavigate(SectionId.HOME)} className="hover:text-blue-400 transition-colors">{t.nav?.home || 'Home'}</button></li>
              <li><button onClick={() => onNavigate(SectionId.ABOUT)} className="hover:text-blue-400 transition-colors">{t.nav?.about || 'About Us'}</button></li>
              <li><button onClick={() => onNavigate(SectionId.COURSES)} className="hover:text-blue-400 transition-colors">{t.nav?.courses || 'Courses'}</button></li>
              <li><button onClick={() => onNavigate(SectionId.REVIEWS)} className="hover:text-blue-400 transition-colors">{t.nav?.reviews || 'Reviews'}</button></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.popularCourses}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Python for Kids</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">App Creation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Data Science Basics</a></li>
            </ul>
          </div>

           {/* Contact Small */}
           <div>
            <h4 className="font-bold text-lg mb-6">{t.visitUs}</h4>
            <p className="text-gray-400 text-sm mb-4">
              Gol Bazar, Behind Old Cinema Hall, Dongargarh, Chhattisgarh 491445
            </p>
            <p className="text-gray-400 text-sm">
              <span className="block text-white font-semibold">Phone:</span> +91 90981 74328
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t.copyright}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Dongargarh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;