
import React from 'react';
import { Button } from "@/components/ui/button";

const jobPositions = [
  { 
    id: 1, 
    title: 'Especialista em Marketing Digital',
    location: 'Remoto',
    type: 'Tempo integral'
  },
  { 
    id: 2, 
    title: 'Designer Gráfico',
    location: 'Remoto',
    type: 'Freelancer'
  },
  { 
    id: 3, 
    title: 'Desenvolvedor Web',
    location: 'Remoto',
    type: 'Tempo integral'
  },
  { 
    id: 4, 
    title: 'Gestor de Tráfego Pago',
    location: 'Remoto',
    type: 'Tempo integral'
  }
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-imperio-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-imperio-black mb-4">TRABALHE CONOSCO</h2>
          <div className="w-24 h-1 bg-imperio-blue mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Faça parte do nosso time e contribua para o crescimento de negócios por todo o Brasil.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-imperio-black mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-imperio-gray-100 text-imperio-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="bg-imperio-gray-100 text-imperio-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-imperio-blue hover:bg-imperio-blue/80">
                    Candidatar-se
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg">
              Não encontrou uma vaga adequada? Envie seu currículo e vamos manter seu cadastro em nosso banco de talentos.
            </p>
            <Button className="bg-imperio-black hover:bg-imperio-gray-900">
              Enviar Currículo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
