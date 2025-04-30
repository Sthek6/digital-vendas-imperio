
import React from 'react';

// Placeholder partner logos - would be replaced with actual partner logos
const partners = [
  { id: 1, name: 'Partner 1', logo: 'https://via.placeholder.com/200x80?text=Partner+1' },
  { id: 2, name: 'Partner 2', logo: 'https://via.placeholder.com/200x80?text=Partner+2' },
  { id: 3, name: 'Partner 3', logo: 'https://via.placeholder.com/200x80?text=Partner+3' },
  { id: 4, name: 'Partner 4', logo: 'https://via.placeholder.com/200x80?text=Partner+4' },
  { id: 5, name: 'Partner 5', logo: 'https://via.placeholder.com/200x80?text=Partner+5' },
  { id: 6, name: 'Partner 6', logo: 'https://via.placeholder.com/200x80?text=Partner+6' },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-imperio-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-imperio-blue mb-4">PARCEIROS</h2>
          <div className="w-24 h-1 bg-imperio-blue mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Conheça nossos parceiros que podem agregar muito ao seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <a 
              key={partner.id} 
              href="#" 
              className="bg-imperio-gray-900 p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-imperio-gray-700"
              aria-label={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 max-w-full" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
