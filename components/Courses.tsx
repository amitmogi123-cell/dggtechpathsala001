import React from 'react';
import { SectionId } from '../types';
import { Globe, Smartphone, Brain, Terminal, Sparkles, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onNavigate: (sectionId: SectionId) => void;
  t: any;
}

const Courses: React.FC<CoursesProps> = ({ onNavigate, t }) => {
  
  const domains = [
    {
      id: 'ai-prod',
      title: t.c1_title,
      description: t.c1_desc,
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      highlight: t.c1_tag
    },
    {
      id: '1',
      title: t.c2_title,
      description: t.c2_desc,
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      highlight: t.c2_tag
    },
    {
      id: '2',
      title: t.c3_title,
      description: t.c3_desc,
      icon: <Brain className="w-8 h-8 text-green-600" />,
      highlight: t.c3_tag
    },
    {
      id: '3',
      title: t.c4_title,
      description: t.c4_desc,
      icon: <Smartphone className="w-8 h-8 text-amber-600" />,
      highlight: t.c4_tag
    },
    {
      id: '4',
      title: t.c5_title,
      description: t.c5_desc,
      icon: <Terminal className="w-8 h-8 text-purple-600" />,
      highlight: t.c5_tag
    }
  ];

  return (
    <section id={SectionId.COURSES} className="py-20 bg-white scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title} <span className="text-blue-600">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div 
              key={domain.id}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {domain.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {domain.highlight}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {domain.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {domain.description}
              </p>

              <button 
                onClick={() => onNavigate(SectionId.CONTACT)}
                className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all"
              >
                {t.enquire} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;