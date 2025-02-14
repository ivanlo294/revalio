import React from 'react';
import { FaHome, FaChartLine, FaClock } from 'react-icons/fa';

const StatsSection = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-12 bg-gray-100 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { number: "150+", label: "Propiedades optimizadas", icon: <FaHome className="text-blue-600 text-4xl" /> },
            { number: "45%", label: "Incremento medio de valor", icon: <FaChartLine className="text-blue-600 text-4xl" /> },
            { number: "3-9", label: "Meses de proceso", icon: <FaClock className="text-blue-600 text-4xl" /> }
          ].map((stat, index) => {
            // Efecto de transparencia VISIBLE y SINCRONIZADO con el movimiento
            const startFadePosition = 200; 
            const fadeRange = 600; 
            let opacity = 1;

            if (scrollPosition > startFadePosition) {
              opacity = 1 - (scrollPosition - startFadePosition) / fadeRange;
              opacity = Math.max(0, opacity);
            }

            // Movimiento hacia el centro 
            let translateX = 0;
            if (index === 0) {
              translateX = scrollPosition / 7;
            } else if (index === 2) {
              translateX = -scrollPosition / 7;
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center flex flex-col items-center transition-all duration-700"
                style={{
                  opacity: opacity,
                  transform: `translateX(${translateX}px)`,
                  width: '80%', //  <-- ANCHO REDUCIDO AÚN MÁS: 80% (antes 90%)
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {stat.icon}
                <h3 className="text-4xl font-bold text-blue-600 mt-4">{stat.number}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;