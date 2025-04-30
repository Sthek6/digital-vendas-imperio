
import React from 'react';
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: 'Pacote Essencial',
    description: 'Ideal para pequenas empresas que estão iniciando sua presença digital.',
    features: [
      'Gestão de 2 redes sociais',
      'Criação de 12 posts mensais',
      'Análise de métricas básicas',
      'Suporte por email'
    ],
    price: 'R$ 1.500/mês'
  },
  {
    id: 2,
    name: 'Pacote Avançado',
    description: 'Perfeito para empresas em crescimento que buscam expandir sua presença online.',
    features: [
      'Gestão de 4 redes sociais',
      'Criação de 20 posts mensais',
      'Campanha básica de Google Ads',
      'Relatório mensal de performance',
      'Suporte prioritário'
    ],
    price: 'R$ 3.000/mês',
    highlighted: true
  },
  {
    id: 3,
    name: 'Pacote Premium',
    description: 'Solução completa para empresas que buscam dominar sua presença digital.',
    features: [
      'Gestão de todas as redes sociais',
      'Criação de 30 posts mensais',
      'Campanhas completas de Google e Facebook Ads',
      'Estratégia de SEO',
      'Consultoria personalizada',
      'Suporte 24/7'
    ],
    price: 'R$ 5.000/mês'
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-imperio-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-imperio-blue mb-4">PRODUTOS</h2>
          <div className="w-24 h-1 bg-imperio-blue mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Conheça nossos pacotes de serviços desenhados para atender diferentes necessidades e orçamentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                product.highlighted 
                  ? 'border-2 border-imperio-blue bg-imperio-gray-900 shadow-lg shadow-imperio-blue/20' 
                  : 'border border-imperio-gray-700 bg-imperio-gray-900/50'
              }`}
            >
              {product.highlighted && (
                <div className="bg-imperio-blue text-white text-center py-2">
                  <span className="font-semibold">Mais Popular</span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-imperio-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <p className="text-3xl font-bold text-white mb-2">{product.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-imperio-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    product.highlighted 
                      ? 'bg-imperio-blue hover:bg-imperio-blue/80' 
                      : 'bg-white text-imperio-black hover:bg-imperio-gray-100'
                  }`}
                >
                  Contratar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            Todos os pacotes podem ser personalizados para atender às necessidades específicas do seu negócio.
          </p>
          <a href="#contact" className="inline-block bg-imperio-blue hover:bg-imperio-blue/80 text-white font-bold py-3 px-8 rounded-md transition-all duration-300">
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
