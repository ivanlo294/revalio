import React, { useState } from 'react'; // Import useState
import { useForm } from 'react-hook-form'; // Import useForm
import { Building2, Award, BarChart3, Clock, CheckCircle2, Euro, LineChart, TrendingUp, Percent, Calendar } from 'lucide-react';

const LandingPage = () => {

    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const formSpreeEndpoint = 'https://formspree.io/f/xbldagdv'; // Replace with your Formspree endpoint

    const onSubmit = async (data) => {
        try {
            const response = await fetch(formSpreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setShowForm(false);
                reset();
            } else {
                const errorData = await response.json(); // Try to get error details from Formspree
                alert(`Error sending message: ${errorData?.error || 'Please try again.'}`); // Display a more specific error
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Estilo Radix */}
      <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold font-poppins text-blue-600">
                Revalio
              </h1>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Maximizamos el valor de tu propiedad
              <span className="block text-blue-600">sin que inviertas un euro</span>
            </h1>
            <p className="text-2xl mb-6 text-gray-600 max-w-2xl mx-auto">
              Convertimos inmuebles en oportunidades: financiamos la reforma, 
              gestionamos el cambio de uso y vendemos por ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="mx-auto">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl transition-shadow hover:shadow-xl w-full sm:w-auto">
                  Solicita un análisis gratuito
                </button>
                  {/* The pop-up form (Modal) */}
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50"> {/* z-50 for higher stacking */}
                    <div className="bg-white p-8 rounded-lg w-full max-w-md"> {/* Added max-w-md for responsiveness */}
                        <h2 className="text-2xl font-bold mb-4">Solicita un Análisis Gratuito</h2> {/* Added a title */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" {...register('email', { required: 'Email is required' })} placeholder="Tu Email" className="border p-2 mb-4 w-full rounded" />
                            <textarea {...register('comment', { required: 'Comment is required' })} placeholder="Tu Comentario" className="border p-2 mb-4 w-full rounded h-24" /> {/* Added h-24 for height */}
                            <div className="flex justify-end"> {/* Aligned buttons to the right */}
                                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded mr-2">Enviar</button> {/* Increased padding */}
                                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 px-6 py-3 rounded">Cancelar</button> {/* Increased padding */}
                            </div>
                        </form>
                    </div>
                </div>
            )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "150+", label: "Propiedades optimizadas" },
              { number: "45%", label: "Incremento medio de valor" },
              { number: "3-9", label: "Meses de proceso" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Cómo funciona</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Transformamos tu propiedad en una inversión más rentable en cuatro simples pasos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                icon: <Building2 className="w-16 h-16 text-blue-600" />,
                title: "Análisis y estrategia",
                description: "Evaluamos el potencial de tu activo y diseñamos la mejor estrategia para revalorizarlo."
              },
              {
                icon: <Award className="w-16 h-16 text-blue-600" />,
                title: "Cambio de uso o reforma",
                description: "Gestionamos el cambio de uso y optimizamos cada detalle de la reforma."
              },
              {
                icon: <BarChart3 className="w-16 h-16 text-blue-600" />,
                title: "Financiación sin inversión",
                description: "Nos encargamos de la inversión sin que tengas que adelantar dinero."
              },
              {
                icon: <Clock className="w-16 h-16 text-blue-600" />,
                title: "Venta optimizada",
                description: "Comercializamos tu activo al mejor precio, asegurando la máxima rentabilidad."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Casos de éxito</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a otros propietarios a maximizar el valor de sus inmuebles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                location: "Mollet del Vallès",
                type: "Piso Residencial",
                image: "/api/placeholder/600/400",
                initial: "90.000€",
                investment: "25.000€",
                final: "160.000€",
                time: "3 meses",
                profit: "45.000€"
              },
              {
                location: "Terrassa",
                type: "Oficina → Vivienda",
                image: "/api/placeholder/600/400",
                initial: "110.000€",
                investment: "40.000€",
                final: "220.000€",
                time: "7 meses",
                profit: "70.000€"
              },
              {
                location: "Valencia",
                type: "División en 2 viviendas",
                image: "/api/placeholder/600/400",
                initial: "220.000€",
                investment: "90.000€",
                final: "440.000€",
                time: "9 meses",
                profit: "130.000€"
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src={case_.image}
                  alt={case_.location}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{case_.location}</h3>
                  <p className="text-blue-600 mb-4">{case_.type}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Euro className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Valor inicial:</span>
                      </div>
                      <span className="font-semibold">{case_.initial}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <LineChart className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Inversión:</span>
                      </div>
                      <span className="font-semibold">{case_.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Valor final:</span>
                      </div>
                      <span className="font-semibold">{case_.final}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Tiempo:</span>
                      </div>
                      <span className="font-semibold">{case_.time}</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Percent className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">Beneficio:</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">+{case_.profit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Beneficios clave</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sin inversión inicial",
                description: "Nosotros financiamos la transformación y reforma"
              },
              {
                title: "Mayor rentabilidad garantizada",
                description: "Optimizamos para aumentar el valor de mercado"
              },
              {
                title: "Cambio de uso y revalorización",
                description: "Convertimos espacios infrautilizados en activos rentables"
              },
              {
                title: "Gestión completa",
                description: "Nos encargamos de todos los trámites y gestiones"
              },
              {
                title: "Alquiler garantizado",
                description: "Ingresos asegurados mientras optimizamos"
              },
              {
                title: "Tecnología avanzada",
                description: "Análisis con IA y big data para maximizar resultados"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-center">{benefit.title}</h3>
                <p className="text-white text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <CheckCircle2 className="w-24 h-24 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">¿Listo para maximizar el valor de tu propiedad?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Solicita ahora un análisis gratuito y descubre el potencial de tu inmueble en el mercado actual.
              </p>
              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                Quiero un análisis gratuito!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
