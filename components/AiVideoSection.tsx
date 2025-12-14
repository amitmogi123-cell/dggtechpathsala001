import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

interface AiVideoSectionProps {
  t: any;
}

const AiVideoSection: React.FC<AiVideoSectionProps> = ({ t }) => {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-500/20">
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              {t.title}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t.titleHighlight}</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200">{t.check1}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200">{t.check2}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200">{t.check3}</span>
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative aspect-video bg-black rounded-2xl border border-gray-700 overflow-hidden shadow-2xl group ring-1 ring-white/10">
              {/* 
                 IMPORTANT: 
                 1. Save your video file as 'video.mp4' in the same folder as index.html
                 2. Save your image file as 'classroom.jpg' in the same folder as index.html
              */}
              <video 
                src="./video.mp4" 
                poster="./classroom.jpg"
                controls 
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                {/* Fallback source if local file isn't found */}
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              {t.note}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiVideoSection;