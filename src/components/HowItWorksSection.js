import React from 'react';
import { Building2, Award, BarChart3, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Building2 className="w-6 h-6 text-blue-600 mr-2" />,
      title: "Análisis y estrategia",
      description: "Evaluamos el potencial de tu activo y diseñamos la mejor estrategia para revalorizarlo."
    },
    {
      number: 2,
      icon: <Award className="w-6 h-6 text-blue-600 mr-2" />,
      title: "Cambio de uso o reforma",
      description: "Gestionamos el cambio de uso y optimizamos cada detalle de la reforma."
    },
    {
      number: 3,
      icon: <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />,
      title: "Financiación sin inversión",
      description: "Nos encargamos de la inversión sin que tengas que adelantar dinero."
    },
    {
      number: 4,
      icon: <Clock className="w-6 h-6 text-blue-600 mr-2" />,
      title: "Venta optimizada",
      description: "Comercializamos tu activo al mejor precio, asegurando la máxima rentabilidad."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Cómo funciona</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Transformamos tu propiedad en una inversión más rentable en cuatro simples pasos
        </p>
        
        {/* Nuevo diseño con aspecto "dibujado a mano" */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Primera fila */}
          <div className="md:flex mb-16 relative">
            {/* Numeración encima de la línea */}
            <div className="hidden md:flex absolute left-1/4 -top-12 items-center">
              <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-full text-blue-600 text-base font-bold shadow-md">
                {steps[0].number}
              </div>
            </div>
            <div className="hidden md:flex absolute right-1/4 -top-10 items-center">
              <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-full text-blue-600 text-base font-bold shadow-md">
                {steps[1].number}
              </div>
            </div>
            
            {/* Línea punteada con estilo "dibujado a mano" */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-2">
              <svg height="2" width="100%" className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <path
                  d="M0,1 C50,-5 100,7 150,1 C200,-5 250,7 300,1"
                  stroke="#CBD5E0"
                  strokeWidth="2"
                  strokeDasharray="6,8"
                  fill="transparent"
                />
              </svg>
            </div>
            
            {/* Paso 1 - Izquierda */}
            <div className="md:w-2/5 bg-white p-6 rounded-2xl shadow-lg md:mr-auto mb-8 md:mb-0 relative transform md:-rotate-1">
              <div className="md:hidden absolute top-4 left-4 bg-blue-100 w-6 h-6 flex items-center justify-center rounded-full text-blue-600 text-sm font-bold">
                {steps[0].number}
              </div>
              <div className="flex items-start mt-4">
                {steps[0].icon}
                <h3 className="text-xl font-semibold ml-2">{steps[0].title}</h3>
              </div>
              <p className="text-gray-600 mt-4">{steps[0].description}</p>
            </div>
            
            {/* Espacio entre cajas */}
            <div className="md:w-1/5"></div>
            
            {/* Paso 2 - Derecha */}
            <div className="md:w-2/5 bg-white p-6 rounded-2xl shadow-lg md:ml-auto relative transform md:rotate-1 md:translate-y-4">
              <div className="md:hidden absolute top-4 left-4 bg-blue-100 w-6 h-6 flex items-center justify-center rounded-full text-blue-600 text-sm font-bold">
                {steps[1].number}
              </div>
              <div className="flex items-start mt-4">
                {steps[1].icon}
                <h3 className="text-xl font-semibold ml-2">{steps[1].title}</h3>
              </div>
              <p className="text-gray-600 mt-4">{steps[1].description}</p>
            </div>
          </div>
          
          {/* Línea de conexión vertical estilo "dibujado a mano" */}
          <div className="hidden md:block h-16 relative mx-auto" style={{width: '2px'}}>
            <svg height="100%" width="40" className="absolute top-0 right-1/4 transform translate-x-1/2">
              <path
                d="M20,0 C15,20 25,40 20,60"
                stroke="#CBD5E0"
                strokeWidth="2"
                strokeDasharray="6,8"
                fill="transparent"
              />
            </svg>
          </div>
          
          {/* Segunda fila */}
          <div className="md:flex relative">
            {/* Numeración encima de la línea */}
            <div className="hidden md:flex absolute left-1/4 -top-12 items-center">
              <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-full text-blue-600 text-base font-bold shadow-md">
                {steps[3].number}
              </div>
            </div>
            <div className="hidden md:flex absolute right-1/4 -top-10 items-center">
              <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-full text-blue-600 text-base font-bold shadow-md">
                {steps[2].number}
              </div>
            </div>
            
            {/* Línea punteada con estilo "dibujado a mano" */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-2">
              <svg height="2" width="100%" className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <path
                  d="M300,1 C250,-5 200,7 150,1 C100,-5 50,7 0,1"
                  stroke="#CBD5E0"
                  strokeWidth="2"
                  strokeDasharray="6,8"
                  fill="transparent"
                />
              </svg>
            </div>
            
            {/* Paso 4 - Izquierda */}
            <div className="md:w-2/5 bg-white p-6 rounded-2xl shadow-lg md:mr-auto mb-8 md:mb-0 relative transform md:rotate-1">
              <div className="md:hidden absolute top-4 left-4 bg-blue-100 w-6 h-6 flex items-center justify-center rounded-full text-blue-600 text-sm font-bold">
                {steps[3].number}
              </div>
              <div className="flex items-start mt-4">
                {steps[3].icon}
                <h3 className="text-xl font-semibold ml-2">{steps[3].title}</h3>
              </div>
              <p className="text-gray-600 mt-4">{steps[3].description}</p>
            </div>
            
            {/* Espacio entre cajas */}
            <div className="md:w-1/5"></div>
            
            {/* Paso 3 - Derecha */}
            <div className="md:w-2/5 bg-white p-6 rounded-2xl shadow-lg md:ml-auto relative transform md:-rotate-1 md:translate-y-4">
              <div className="md:hidden absolute top-4 left-4 bg-blue-100 w-6 h-6 flex items-center justify-center rounded-full text-blue-600 text-sm font-bold">
                {steps[2].number}
              </div>
              <div className="flex items-start mt-4">
                {steps[2].icon}
                <h3 className="text-xl font-semibold ml-2">{steps[2].title}</h3>
              </div>
              <p className="text-gray-600 mt-4">{steps[2].description}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;