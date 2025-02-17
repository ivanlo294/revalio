import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileSpreadsheet, HardHat, TrendingUp, Wallet, Menu, X } from 'lucide-react';

const ServicesSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Building2 size={48} className="text-blue-600" />,
      title: "Revalorización de Activos",
      description: [
        "Analizamos tu propiedad y detectamos oportunidades de mejora",
        "Optimizamos su uso (cambio de uso, reformas estratégicas, etc.)",
        "Aumentamos su atractivo en el mercado"
      ]
    },
    {
      icon: <FileSpreadsheet size={48} className="text-blue-600" />,
      title: "Opciones de Compra Personalizadas",
      description: [
        "Ofrecemos opciones de compra con acuerdos flexibles",
        "Nos ocupamos de todos los trámites sin que tengas que preocuparte"
      ]
    },
    {
      icon: <HardHat size={48} className="text-blue-600" />,
      title: "Gestión Integral de Reformas y Cambios de Uso",
      description: [
        "Nos encargamos de la reforma, permisos y licencias",
        "Colaboramos con arquitectos y expertos en normativa urbanística",
        "Colaboración con empresas constructoras con amplia experiencia"
      ]
    },
    {
      icon: <TrendingUp size={48} className="text-blue-600" />,
      title: "Venta Estratégica con Máxima Rentabilidad",
      description: [
        "Planificamos la mejor estrategia de venta",
        "Nos apoyamos en inversores y canales especializados para cerrar operaciones óptimas"
      ]
    },
    {
      icon: <Wallet size={48} className="text-blue-600" />,
      title: "Acceso a Inversores para Proyectos Off-Market",
      description: [
        "Gestionamos operaciones exclusivas con inversores especializados",
        "Buscamos oportunidades de gran volumen con alto potencial"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-sm z-50 flex items-center px-6 shadow-md">
        <Link to="/" className="text-2xl font-bold text-blue-600">Revalio</Link>
        
        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link to="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all"
            onClick={() => setShowContactForm(true)}
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <nav className="flex flex-col items-center space-y-6 p-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className="text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all w-full"
              onClick={() => {
                setIsMenuOpen(false);
                setShowContactForm(true);
              }}
            >
              Contacto
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800 pt-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/Videos/Seoul_Time_Lapse.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transformamos tu propiedad para maximizar su valor
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Hacemos que tu propiedad valga más, sin que tengas que hacer nada
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 transform transition-all duration-300 hover:scale-102 
                border border-gray-200 hover:border-blue-500 hover:shadow-2xl
                relative overflow-hidden"
            >
              {/* Efecto de fondo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenido */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 text-lg">•</span>
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¿Quieres saber cómo podemos ayudarte?
          </h2>
          <button
            onClick={() => setShowContactForm(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 
              transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Descubre cómo podemos ayudarte
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Solicita más información</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  className="w-full border rounded-lg p-2 h-32"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;