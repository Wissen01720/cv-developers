import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hola, soy{' '}
                <span className="text-yellow-500">Daniel</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mt-4 mb-6">
                Full Stack Web Developer
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                Desarrollador apasionado por crear experiencias web excepcionales. 
                Especializado en tecnologías modernas y soluciones innovadoras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Contáctame
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Ver Proyectos
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-right">
              <div className="w-80 h-80 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Cara */}
                    <circle cx="100" cy="90" r="45" fill="#F3E5AB" stroke="#333" strokeWidth="2"/>
                    
                    {/* Cabello */}
                    <path d="M55 70 Q100 40 145 70 L145 55 Q100 25 55 55 Z" fill="#2D1810"/>
                    
                    {/* Ojos */}
                    <circle cx="85" cy="80" r="3" fill="#333"/>
                    <circle cx="115" cy="80" r="3" fill="#333"/>
                    
                    {/* Sonrisa */}
                    <path d="M85 100 Q100 115 115 100" stroke="#333" strokeWidth="2" fill="none"/>
                    
                    {/* Cuerpo */}
                    <rect x="80" y="130" width="40" height="50" rx="5" fill="#4A90E2"/>
                    
                    {/* Corbata */}
                    <polygon points="95,140 105,140 102,170 98,170" fill="#8B0000"/>
                    <polygon points="98,140 102,140 100,150" fill="#A00000"/>
                  </svg>
                </div>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;