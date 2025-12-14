import React from 'react';
import { SectionId } from '../types';
import { Briefcase, XCircle, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-gray-50 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Reality Check Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t.title}<span className="text-red-600 decoration-wavy underline">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Old Way */}
          <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-gray-500">{t.oldWayTitle}</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-500">
                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5"></span>
                {t.oldWay1}
              </li>
              <li className="flex gap-3 text-gray-500">
                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5"></span>
                {t.oldWay2}
              </li>
              <li className="flex gap-3 text-gray-500">
                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5"></span>
                {t.oldWay3}
              </li>
              <li className="flex gap-3 text-gray-500">
                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5"></span>
                {t.oldWay4}
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl relative transform scale-105">
            <div className="absolute -top-4 right-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              THE FUTURE
            </div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{t.newWayTitle}</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-800 font-medium">
                <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                {t.newWay1}
              </li>
              <li className="flex gap-3 text-gray-800 font-medium">
                <Briefcase className="w-5 h-5 text-blue-500 flex-shrink-0" />
                {t.newWay2}
              </li>
              <li className="flex gap-3 text-gray-800 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                {t.newWay3}
              </li>
              <li className="flex gap-3 text-gray-800 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                {t.newWay4}
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm">
            {t.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;