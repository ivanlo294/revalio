import React, { useState } from 'react'; // Import useState
import { Building2, Award, BarChart3, Clock, CheckCircle2, Euro, LineChart, TrendingUp, Percent, Calendar } from 'lucide-react'; // Import icons for examples section
import { Wallet, RefreshCw, ClipboardList, Shield, Database } from 'lucide-react'; // Import icons for benefit section

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    comment: ''
  });
  const formSpreeEndpoint = 'https://formspree.io/f/xbldagdv';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Formspree espera los datos en formato FormData
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.comment);

      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('¡Mensaje enviado exitosamente!');
        setShowForm(false);
        setFormData({ email: '', comment: '' });
      } else {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        alert(`Error al enviar el mensaje: ${errorData?.error || 'Por favor, intenta de nuevo.'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Ocurrió un error. Por favor, intenta más tarde.');
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Estilo Moderno */}
      <>
        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Solicita un Análisis Gratuito</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu Email"
                  required
                  className="border p-2 mb-4 w-full rounded"
                />
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Tu Comentario"
                  required
                  className="border p-2 mb-4 w-full rounded h-24"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded mr-2"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-300 px-6 py-3 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative min-h-screen">
          {/* Barra superior con logo */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-sm z-30">
            <div className="container mx-auto px-6 h-full flex items-center">
              <h1 className="text-2xl font-bold font-poppins text-blue-600">
                Revalio
              </h1>
            </div>
          </div>

          {/* Fondo con mosaico */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { type: 'image', top: '15%', left: '10%', size: 'h-20 w-20', src: "/Images/Barcelona_Eixample.jpg" },
              { type: 'square', top: '25%', left: '35%', size: 'h-15 w-15', color: 'bg-blue-400' },
              { type: 'image', top: '45%', left: '15%', size: 'h-20 w-20', src: "/Images/Barcelona_Puerto.jpg" },
              { type: 'square', top: '60%', left: '25%', size: 'h-10 w-10', color: 'bg-blue-500' },
              { type: 'image', top: '20%', left: '75%', size: 'h-19 w-19', src: "/Images/Madrid_GranVia.jpg" },
              { type: 'square', top: '40%', left: '85%', size: 'h-8 w-8', color: 'bg-blue-600' },
              { type: 'image', top: '65%', left: '80%', size: 'h-18 w-18', src: "/Images/Bilbao.jpg" },
              { type: 'square', top: '30%', left: '60%', size: 'h-16 w-16', color: 'bg-gray-200' },
              { type: 'square', top: '70%', left: '45%', size: 'h-18 w-18', color: 'bg-blue-500' },
            ].map((element, index) => (
              <div
                key={index}
                className={`absolute ${element.size} rounded-lg transform transition-transform duration-700 hover:scale-110`}
                style={{
                  top: element.top,
                  left: element.left,
                  transform: `rotate(${Math.random() * 20 - 10}deg)`,
                }}
              >
                {element.type === 'image' ? (
                  <img
                    src={element.src || "/api/placeholder/100/100"}
                    alt={`Cityscape ${index}`}
                    className="w-full h-full object-cover rounded-lg opacity-99"
                  />
                ) : (
                  <div className={`w-full h-full ${element.color} rounded-lg opacity-90`}></div>
                )}
              </div>
            ))}

            {/* Gradientes sutiles */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.8)_100%)]"></div>
          </div>

          {/* Contenido principal */}
          <section className="relative min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 relative z-20 pt-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Maximizamos el valor de tu propiedad
                  <span className="block text-blue-600 mt-4">sin que inviertas un euro</span>
                </h2>
                <p className="text-2xl mb-6 text-gray-600 max-w-2xl mx-auto">
                  Convertimos inmuebles en oportunidades: financiamos la reforma,
                  gestionamos el cambio de uso y vendemos por ti.
                </p>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => setShowForm(true)}
                  >
                    Solicita un análisis gratuito
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>

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
                image: "/Images/Piso_Mollet.jpg",
                initial: "90.000€",
                investment: "25.000€",
                final: "160.000€",
                time: "3 meses",
                profit: "45.000€"
              },
              {
                location: "Terrassa",
                type: "Oficina → Vivienda",
                image: "/Images/Piso_Terrassa.jpg",
                initial: "110.000€",
                investment: "40.000€",
                final: "220.000€",
                time: "7 meses",
                profit: "70.000€"
              },
              {
                location: "Valencia",
                type: "División en 2 viviendas",
                image: "/Images/Piso_Valencia.jpg",
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
<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAxLjc5IDQgNCA0em0tNCAxNGMtNy43MyAwLTE0LTYuMjctMTQtMTQgMC03LjczIDYuMjctMTQgMTQtMTRzMTQgNi4yNyAxNCAxNGMwIDcuNzMtNi4yNyAxNC0xNCAxNHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
  </div>
  
  <div className="container mx-auto px-6 relative">
    <h2 className="text-4xl font-bold text-center mb-16">
      Beneficios clave
      <div className="h-1 w-20 bg-white/40 mx-auto mt-4 rounded-full"></div>
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Sin inversión inicial",
          description: "Nosotros financiamos la transformación y reforma",
          icon: <Wallet size={28} className="text-white" />
        },
        {
          title: "Mayor rentabilidad garantizada",
          description: "Optimizamos para aumentar el valor de mercado",
          icon: <TrendingUp size={28} className="text-white" />
        },
        {
          title: "Cambio de uso y revalorización",
          description: "Convertimos espacios infrautilizados en activos rentables",
          icon: <RefreshCw size={28} className="text-white" />
        },
        {
          title: "Gestión completa",
          description: "Nos encargamos de todos los trámites y gestiones",
          icon: <ClipboardList size={28} className="text-white" />
        },
        {
          title: "Alquiler garantizado",
          description: "Ingresos asegurados mientras optimizamos",
          icon: <Shield size={28} className="text-white" />
        },
        {
          title: "Tecnología avanzada",
          description: "Análisis con IA y big data para maximizar resultados",
          icon: <Database size={28} className="text-white" />
        }
      ].map((benefit, index) => (
        <div 
          key={index} 
          className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl 
                    transition-all duration-300 ease-in-out
                    hover:bg-white/20 hover:transform hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-white/10
                    border border-white/10"
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/20 rounded-xl mb-6 
                          group-hover:bg-white/30 transition-colors
                          group-hover:scale-110 transform duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">{benefit.title}</h3>
            <p className="text-white/90 text-center">{benefit.description}</p>
          </div>
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
              <button
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                onClick={() => setShowForm(true)} // Botón para abrir el formulario
              >
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