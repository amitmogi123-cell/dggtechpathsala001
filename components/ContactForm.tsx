import React, { useState } from 'react';
import { SectionId } from '../types';
import Button from './Button';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  t: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-blue-600 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-gray-900 text-white p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">{t.title}</h3>
              <p className="text-gray-400 mb-10">
                {t.subtitle}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MapPin className="text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">{t.visit}</h5>
                    <p className="text-gray-400">Gol Bazar, Dongargarh,<br/>Chhattisgarh 491445</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Phone className="text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">{t.call}</h5>
                    <p className="text-gray-400">+91 90981 74328</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Mail className="text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">{t.email}</h5>
                    <p className="text-gray-400">admissions@dggtech.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-gray-800">
               <p className="text-sm text-gray-500">© 2024 DGG Tech Pathshala</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
            {!submitted ? (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{t.formTitle}</h3>
                  <p className="text-gray-600">{t.formSubtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.nameLabel}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.gradeLabel}</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                        <option>College (BCA/BTech)</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.phoneLabel}</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="e.g. 9098174328"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? t.submitting : t.submit}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    {t.footer}
                  </p>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
                <p className="text-gray-600 max-w-sm">
                  {t.successMsg}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  {t.bookAnother}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;