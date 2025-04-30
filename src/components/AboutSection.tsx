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
            <video 
              className="w-full h-full object-cover" 
              controls
              poster="/videos/video-market.mp4?poster=true"
            >
              <source src="/videos/video-market.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
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
