import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo y enlaces de contacto */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">Revalio</Link>
            <p className="text-gray-300">contacto@revalio.es</p>
            <p className="text-sm text-gray-400">Copyright © {currentYear} Revalio. Todos los derechos reservados.</p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:contacto@revalio.es"
              className="flex items-center space-x-2 bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-700 hover:shadow-md w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar email</span>
            </a>
            <a
              href="https://cal.com/revalio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar reunión</span>
            </a>
          </div>
        </div>

        {/* Enlaces secundarios simplificados */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
              <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</Link>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-gray-400">
                Revalio — Maximizando el valor de tu propiedad
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;