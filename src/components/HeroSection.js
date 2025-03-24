import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Detección de dispositivo y plataforma
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Detección de iOS mejorada
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipad|ipod|mac/.test(userAgent);
      setIsIOS(isIOSDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Optimización de scroll
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        setScrollPosition(Math.min(window.scrollY, 500));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Transformaciones de scroll optimizadas
  const getHeroStyles = () => {
    if (isMobile) return {}; 
    
    const scale = Math.max(0.5, 1 - scrollPosition / 2000);
    const opacity = Math.max(0.2, 1 - scrollPosition / 500);
    
    return {
      transform: `scale(${scale})`,
      opacity: opacity
    };
  };

  // Optimización de carga de multimedia
  useEffect(() => {
    const mediaElement = videoRef.current;
    if (mediaElement) {
      mediaElement.preload = 'metadata';
      mediaElement.onerror = () => {
        console.error('Error loading media');
      };
    }
  }, [isIOS]);
  
    return (
    <>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-4">
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
        
        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link to="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all"
            onClick={() => setShowForm(true)}
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
                setShowForm(true);
              }}
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
	  
      <div 
        className="hero-container relative min-h-[90vh] md:min-h-[50vh] transition-all duration-500 pt-32 md:pt-20"
        style={getHeroStyles()}
      >
        <div className="absolute inset-0">
          {isIOS ? (
            // Optimización para GIF en iOS
            <div className="w-full h-full">
              <img
                src="/Images/Vesuvio_Time_Lapse_Compressed.webp" // Cambio a WebP
                alt="Time lapse de Vesuvio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30"></div>
            </div>
          ) : (
            // Video para otros navegadores
            <>
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/Images/Vesuvio_Poster.jpg"
                className="w-full h-full object-cover"
              >
                <source 
                  src="/Videos/Vesuvio_Time_Lapse_Compressed.webm" 
                  type="video/webm" 
                />
                <source 
                  src="/Videos/Vesuvio_Time_Lapse_Compressed.mp4" 
                  type="video/mp4" 
                />
                {/* Fallback image */}
                <img 
                  src="/Images/Vesuvio_Fallback.jpg" 
                  alt="Fondo de Revalio"
                  className="w-full h-full object-cover" 
                />
              </video>
              <div className="absolute inset-0 bg-blue-900/30"></div>
            </>
          )}
        </div>

        <section className="relative flex flex-col justify-center md:h-[50vh] text-center px-4">
          <div className="container mx-auto px-4 md:px-6 relative z-20 py-12 md:pt-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Maximizamos el valor de tu propiedad
              <span className="block text-blue-300 mt-4">sin que inviertas un euro</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
              Convertimos inmuebles en oportunidades: financiamos la reforma, gestionamos el cambio de uso y vendemos por ti.
            </p>
            <div className="flex justify-center mb-8 md:mb-0">
              <button
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto"
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