import React from 'react';
import { Building2, Award, BarChart3, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Análisis y estrategia",
      description: "Evaluamos el potencial de tu activo y diseñamos la mejor estrategia para revalorizarlo."
    },
    {
      number: 2,
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Cambio de uso o reforma",
      description: "Gestionamos el cambio de uso y optimizamos cada detalle de la reforma."
    },
    {
      number: 3,
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Financiación sin inversión",
      description: "Nos encargamos de la inversión sin que tengas que adelantar dinero."
    },
    {
      number: 4,
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Venta optimizada",
      description: "Comercializamos tu activo al mejor precio, asegurando la máxima rentabilidad."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Cómo funciona</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Transformamos tu propiedad en una inversión más rentable en cuatro simples pasos
        </p>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Línea principal a mano con zigzag - visible solo en desktop */}
          <div className="hidden lg:block absolute top-32 left-8 right-8" style={{zIndex: 0}}>
            <svg width="100%" height="200" className="absolute" preserveAspectRatio="none">
              <path
                d="M0,50 C60,20 120,80 180,40 C240,0 300,90 360,30 C420,-10 480,70 540,40 C600,10 660,80 720,50"
                stroke="#CBD5E0"
                strokeWidth="4"
                strokeDasharray="10,12"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* Grid responsivo: cambia de 4 columnas a 2x2 y luego a 1 columna */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              // Aplicamos rotación solo en desktop/tablet y la neutralizamos en móvil
              const rotateDesktop = [-2, 1.5, -1, 2][index];
              const translateYDesktop = [0, -8, 12, -5][index];
              
              return (
                <div 
                  key={step.number}
                  className="bg-white p-5 md:p-6 rounded-2xl shadow-md relative"
                  style={{
                    transform: `rotate(${rotateDesktop}deg) translateY(${translateYDesktop}px)`,
                    marginBottom: 0, // Evitar espacios adicionales no deseados
                    zIndex: 10
                  }}
                >
                  {/* Número flotante con aspecto de boceto */}
                  <div className="absolute -top-8 -left-3 flex items-center justify-center"
                       style={{zIndex: 20}}>
                    <div className="relative">
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <path
                          d="M20,2 C28,2 34,8 36,16 C38,24 34,32 26,36 C18,38 10,34 6,26 C4,18 8,10 16,6 C18,4 18,2 20,2 Z"
                          fill="#EBF8FF"
                          stroke="#90CDF4"
                          strokeWidth="1.5"
                          style={{filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.1))"}}
                        />
                      </svg>
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-start mb-3 flex-wrap">
                      <div className="bg-blue-50 p-2 rounded-full mr-3 flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mt-1 break-words">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                  </div>
                  
                  {/* Decoración de esquina tipo sketch */}
                  <svg width="30" height="30" viewBox="0 0 30 30" className="absolute bottom-0 right-0 opacity-30">
                    <path
                      d="M30,30 C28,28 26,30 24,28 C22,26 24,24 22,22 C20,20 18,22 16,20 C14,18 16,16 14,14 C12,12 10,14 8,12 C6,10 8,8 6,6 C4,4 2,6 0,4"
                      stroke="#CBD5E0"
                      strokeWidth="1"
                      fill="transparent"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          
          {/* Elementos decorativos tipo sketch - solo en desktop y tablet */}
          <div className="hidden md:block absolute -right-16 top-10 transform rotate-15">
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path
                d="M10,10 C30,0 60,40 90,20 C120,0 100,30 80,40 C60,50 30,10 10,30"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </div>
          
          <div className="hidden md:block absolute -left-20 bottom-20 transform -rotate-10">
            <svg width="100" height="80" viewBox="0 0 100 80">
              <path
                d="M10,40 C20,20 40,60 60,30 C80,0 90,40 70,60 C50,80 30,60 10,40"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;