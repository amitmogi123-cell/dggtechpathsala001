import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import AiVideoSection from './components/AiVideoSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { SectionId, Language } from './types';
import { translations } from './constants/translations';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  const handleNavigate = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} language={language} onToggleLanguage={toggleLanguage} t={t.nav} />
      
      <main>
        <Hero onNavigate={handleNavigate} t={t.hero} />
        <Features t={t.features} />
        <Courses onNavigate={handleNavigate} t={t.courses} />
        <AiVideoSection t={t.video} />
        <Testimonials t={t.testimonials} />
        <ContactForm t={t.contact} />
      </main>

      <Footer onNavigate={handleNavigate} t={t.footer} />
      
      {/* Gemini AI Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;