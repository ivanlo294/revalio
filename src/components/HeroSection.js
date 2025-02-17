import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Detectar si es móvil al cargar y en resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px es el breakpoint md de Tailwind
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Solo aplicar el efecto de scroll en desktop
    if (!isMobile) {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  useEffect(() => {
    // Pre-cargar el video antes de la interacción del usuario
    if (videoRef.current) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
        // Intenta reproducir el video después de que los datos estén cargados
        playVideo();
      };
      
      const handlePlaying = () => {
        setVideoPlaying(true);
      };
      
      const handleError = (error) => {
        console.error("Error loading video:", error);
        // Asegúrate de mostrar una imagen de respaldo
        setVideoLoaded(false);
      };
      
      const playVideo = async () => {
        try {
          // En móviles, especialmente iOS, play() debe ser llamado como resultado de una interacción del usuario
          // o dentro de un evento controlado por el navegador como pageshow
          if (videoRef.current) {
            await videoRef.current.play();
          }
        } catch (error) {
          console.warn("Auto-play was prevented:", error);
          // Si autoplay falla, podemos mostrar un botón de play o simplemente usar una imagen estática
        }
      };
      
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('playing', handlePlaying);
      videoRef.current.addEventListener('error', handleError);
      
      // Empezar a cargar el video
      videoRef.current.load();
      
      // Intenta reproducir el video cuando el componente se monta
      playVideo();
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          videoRef.current.removeEventListener('playing', handlePlaying);
          videoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, []);

  // Verifica si el video está pausado y reinicia la reproducción cuando el usuario regresa a la página
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current && videoLoaded) {
        videoRef.current.play().catch((error) => {
          console.warn("Could not resume video playback:", error);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoLoaded]);

  const handleServicesClick = () => {
    navigate('/servicios');
    setIsMenuOpen(false);
  };

  // Calcular los estilos de transformación solo para desktop
  const getHeroStyles = () => {
    if (isMobile) {
      return {}; // Sin efectos en móvil
    }
    return {
      transform: `scale(${1 - scrollPosition / 2000})`,
      opacity: 1 - scrollPosition / 500
    };
  };

  // Imagen de respaldo para cuando el video no carga
  const fallbackImageUrl = '/Images/hero-fallback.jpg'; // Asegúrate de tener esta imagen

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
        <div className="absolute inset-0 overflow-hidden">
          {/* Video background with loading placeholder and fallback image */}
          <div className="absolute w-full h-full">
            {/* Fallback image always present, hidden when video is playing */}
            <div 
              className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-500 ${videoPlaying ? 'opacity-0' : 'opacity-100'}`}
              style={{ backgroundImage: `url(${fallbackImageUrl})` }}
            ></div>
            
            {/* Loading spinner */}
            {!videoLoaded && (
              <div className="absolute w-full h-full bg-blue-900/40 flex items-center justify-center">
                <div className="animate-pulse bg-blue-600/20 h-32 w-32 rounded-full"></div>
              </div>
            )}
            
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              preload="auto"
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${videoPlaying ? 'opacity-100' : 'opacity-0'}`}
              playsInline 
              disablePictureInPicture
              style={{ filter: 'brightness(1.0) contrast(1.0)' }}
            >
              {/* Usa formatos optimizados primero */}
              <source src="/Videos/Vesuvio_Time_Lapse.mp4" type="video/mp4" />
              <source src="/Videos/Vesuvio_Time_Lapse.webm" type="video/webm" />
              {/* Eliminar el mensaje de fallback ya que usaremos una imagen de respaldo */}
            </video>
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          </div>
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