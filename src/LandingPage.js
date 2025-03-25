import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Building2, Award, BarChart3, Clock, CheckCircle2, Euro, LineChart, TrendingUp, Percent, Calendar } from 'lucide-react';
import { Wallet, RefreshCw, ClipboardList, Shield, Database } from 'lucide-react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from './components/Footer';
import HowItWorksSection from './components/HowItWorksSection';

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

  const MainContent = () => (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />
	  
	  
	        {/* How it Works Section */}
     <HowItWorksSection />

      {/* Success Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Casos de éxito</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a otros propietarios a maximizar el valor de sus inmuebles
            <SpeedInsights />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                location: "Mollet del Vallès",
                type: "Piso Residencial",
                image: "/Images/Piso_Mollet.webp",
                initial: "90.000€",
                investment: "25.000€",
                final: "160.000€",
                time: "3 meses",
                profit: "45.000€"
              },
              {
                location: "Terrassa",
                type: "Oficina → Vivienda",
                image: "/Images/Piso_Terrassa.webp",
                initial: "110.000€",
                investment: "40.000€",
                final: "220.000€",
                time: "7 meses",
                profit: "70.000€"
              },
              {
                location: "Valencia",
                type: "División en 2 viviendas",
                image: "/Images/Piso_Valencia.webp",
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
      
      {/* Footer Section */}
      <Footer />

    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/servicios" element={<ServicesSection />} />
        {/* Añade aquí otras rutas según necesites */}
      </Routes>
    </Router>
  );
};

export default LandingPage;