import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mosaicElements, setMosaicElements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const elements = [
      { type: 'image', src: "/Images/Barcelona_Eixample.jpg" },
      { type: 'square', color: 'bg-blue-400' },
      { type: 'image', src: "/Images/Barcelona_Puerto.jpg" },
      { type: 'square', color: 'bg-blue-500' },
      { type: 'image', src: "/Images/Madrid_GranVia.jpg" },
      { type: 'square', color: 'bg-blue-600' },
      { type: 'image', src: "/Images/Bilbao.jpg" },
      { type: 'square', color: 'bg-gray-200' },
      { type: 'square', color: 'bg-blue-500' },
    ].map((element, index) => ({
      ...element,
      id: index,
      top: Math.random() * 70 + 15,
      left: Math.random() * 70 + 15,
      size: element.type === 'image' 
        ? Math.random() * 40 + 80 
        : Math.random() * 20 + 40,
      rotation: Math.random() * 20 - 10,
    }));

    setMosaicElements(elements);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = () => {
    navigate('/servicios');
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Solicita un Análisis Gratuito</h2>
            <form>
              <input type="email" placeholder="Tu Email" className="border p-2 mb-4 w-full rounded" required />
              <textarea placeholder="Tu Comentario" className="border p-2 mb-4 w-full rounded h-24" required />
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded mr-2">Enviar</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 px-6 py-3 rounded">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-sm z-50 flex items-center px-6 shadow-md">
        <Link to="/" className="text-2xl font-bold text-blue-600">Revalio</Link>
        <nav className="ml-auto flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link to="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
          {/* <Link to="/nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>; */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all"
            onClick={() => setShowForm(true)}
          >
            Contacto
          </button>
        </nav>
      </header>

      <div 
        className="hero-container relative min-h-[5vh] transition-all duration-500 pt-20"
        style={{
          transform: `scale(${1 - scrollPosition / 2000})`,
          opacity: 1 - scrollPosition / 500
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-white/40">
          {mosaicElements.map(element => (
            <div
              key={element.id}
              className="absolute rounded-lg transform transition-transform duration-700 hover:scale-110"
              style={{
                top: `${element.top}%`,
                left: `${element.left}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                transform: `rotate(${element.rotation}deg)`,
              }}
            >
              {element.type === 'image' ? (
                <div className="relative w-full h-full">
                  <img 
                    src={element.src} 
                    alt="Cityscape" 
                    className="w-full h-full object-cover rounded-lg"
                    style={{
                      opacity: 0.6,
                      mixBlendMode: 'multiply'
                    }} 
                  />
                </div>
              ) : (
                <div 
                  className={`w-full h-full ${element.color} rounded-lg`}
                  style={{ opacity: 0.2 }}
                ></div>
              )}
            </div>
          ))}
        </div>

        <section className="relative flex flex-col justify-center h-[50vh] text-center">
          <div className="container mx-auto px-6 relative z-20 pt-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Maximizamos el valor de tu propiedad
              <span className="block text-blue-600 mt-4">sin que inviertas un euro</span>
            </h2>
            <p className="text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
              Convertimos inmuebles en oportunidades: financiamos la reforma, gestionamos el cambio de uso y vendemos por ti.
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
        </section>
      </div>
    </>
  );
};

export default HeroSection;