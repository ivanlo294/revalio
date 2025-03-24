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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            Cómo funciona
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform -skew-x-12"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Transformamos tu propiedad en una inversión más rentable en cuatro simples pasos
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Línea de conexión - visible solo en desktop y tablet */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 transform -translate-y-1/2 z-0">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 opacity-70"></div>
          </div>
          
          {/* Cards de pasos - 4x1 en pantallas grandes, 2x2 en medianas, 1x4 en pequeñas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-visible group"
              >
                {/* Borde superior decorativo */}
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                
                {/* Número indicador con efecto de dibujo a mano */}
                <div 
                  className="absolute -left-3 -top-5 w-14 h-14 z-20 flex items-center justify-center"
                >
                  <div 
                    className="w-12 h-12 bg-blue-500 rounded-full shadow flex items-center justify-center transform rotate-0 group-hover:rotate-6 transition-transform duration-300 border-2 border-white"
                    style={{
                      filter: 'url("#handdrawn")'
                    }}
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <div className="p-5 pt-5">
                  <div className="mb-2 flex items-center">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      {React.cloneElement(step.icon, { className: "w-6 h-6 text-blue-600" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Elemento decorativo */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="50" fill="currentColor" className="text-blue-900" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Elementos decorativos */}
          <div className="hidden lg:block">
            {/* Círculos decorativos */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-50 opacity-80"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-blue-100 opacity-60"></div>
            
            {/* Patrón de puntos */}
            <div className="absolute top-1/4 -right-16 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
              ))}
            </div>
            
            <div className="absolute bottom-1/4 -left-16 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG Filters para efecto de dibujo a mano */}
      <svg width="0" height="0" className="hidden">
        <filter id="handdrawn">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in="SourceGraphic" operator="atop" />
        </filter>
      </svg>
    </section>
  );
};

export default HowItWorksSection;