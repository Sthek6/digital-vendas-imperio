
import React, { useState, useEffect } from 'react';

const bannerImages = [
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80', // Displays with video screens
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80', // Code on screen
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80', // Laptop
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80', // Circuit board
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-imperio-black/70 z-10"></div>
            <img
              src={image}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-white mb-8 leading-tight">
            IMPÉRIO DIGITAL
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-light">
            Faturamos múltiplos milhões em vendas para negócios de diversos segmentos.
          </p>
          <p className="text-xl md:text-2xl text-imperio-blue mb-10">
            Escalamos vendas para patamares de negócio milionário.
          </p>
          <a
            href="#contact"
            className="inline-block bg-imperio-blue hover:bg-imperio-blue/80 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Agende uma Consultoria
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Conheça mais</span>
          <div className="w-1 h-10 bg-imperio-blue animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
