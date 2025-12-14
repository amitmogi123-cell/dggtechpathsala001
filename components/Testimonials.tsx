import React from 'react';
import { SectionId, Review } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  t: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  const reviews: Review[] = [
    {
      id: '2',
      name: 'Mrs. Verma',
      role: t.t1_role,
      content: t.t1_content,
      rating: 5,
      avatar: "https://picsum.photos/seed/mother/100/100"
    },
    {
      id: '1',
      name: 'Priya Sharma',
      role: t.t2_role,
      content: t.t2_content,
      rating: 5,
      avatar: "https://picsum.photos/seed/priya/100/100"
    },
    {
      id: '3',
      name: 'Amit Patel',
      role: t.t3_role,
      content: t.t3_content,
      rating: 4,
      avatar: "https://picsum.photos/seed/amit/100/100"
    }
  ];

  return (
    <section id={SectionId.REVIEWS} className="py-20 bg-white scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          {t.title} <span className="text-blue-600">{t.titleHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-6 text-blue-100 w-10 h-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10 font-medium">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;