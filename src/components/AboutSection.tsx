
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-imperio-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-imperio-blue mb-4">CONHEÇA A IMPÉRIO DIGITAL</h2>
          <div className="w-24 h-1 bg-imperio-blue mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-imperio-gray-900 rounded-lg overflow-hidden mb-10">
            {/* Video placeholder - in a real implementation, this would be replaced with an actual video */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-imperio-blue/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full bg-imperio-blue/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-imperio-blue flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-imperio-gray-300">Vídeo de apresentação da Império Digital</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              Somos uma agência de marketing digital focada em resultados. Nossa missão é alavancar o seu negócio através de estratégias inovadoras e personalizadas.
            </p>
            <p className="text-lg">
              Com uma equipe de especialistas em diferentes áreas do marketing digital, estamos prontos para transformar sua presença online e impulsionar suas vendas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
