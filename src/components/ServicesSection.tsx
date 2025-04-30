
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Consultoria Estratégica',
    description: 'Consultoria estratégica personalizada para seu negócio.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Digital Analytics',
    description: 'Análise de todas as informações e métricas sobre o negócio, incluindo público-alvo, segmento e concorrentes.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Gestão de Tráfego Pago',
    description: 'Gerenciamento de anúncios Ads (Google Ads, Facebook Ads, TikTok Ads, etc.).',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Web Designer / Desenvolvimento de Sites',
    description: 'Criação de site, blog e landing page.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Social Mídia',
    description: 'Marketing e gestão de redes sociais.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Designer Gráfico',
    description: 'Criação de artes para publicações e anúncios.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    title: 'Vídeos Maker',
    description: 'Criação, manipulação e edição de vídeos institucionais, comerciais e para redes sociais.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    title: 'Copywriter',
    description: 'Elaboração de cartas de vendas, textos persuasivos e copy para anúncios.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    title: 'SEO',
    description: 'Tráfego orgânico e maior visibilidade na busca orgânica (gratuita) do Google.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    title: 'Automação de Atendimento, Marketing e Vendas',
    description: 'Automação de atendimento, marketing e processo de vendas no WhatsApp, E-mail, SMS, Chat no site e Instagram.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    title: 'Inbound Marketing',
    description: 'Transformar leads desconhecidos em clientes através de um funil de vendas dividido em 4 etapas: Atração, Conversão, Vendas e Encantamento.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    title: 'Terceirização de Funcionários de Inteligência Artificial',
    description: 'Agentes profissionais de IA que substituem humanos em funções empresariais (secretária, SDR, closer, suporte).',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-imperio-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-imperio-black mb-4">SERVIÇOS OFERECIDOS</h2>
          <div className="w-24 h-1 bg-imperio-blue mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="h-60 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-imperio-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
              <div className="service-description">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-imperio-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-lg mb-8">
            Plano personalizado para sua empresa de acordo com sua realidade e objetivo. Atendemos negócios com faturamento acima de R$ 100 mil/mês. Atuamos como CEO no processo de vendas online, alavancando vendas e gerando resultados consistentes e duradouros no mercado digital.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-imperio-blue hover:bg-imperio-blue/80 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Agende uma consultoria gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
