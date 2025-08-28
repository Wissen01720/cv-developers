import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DevTeam Portfolio</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Equipo de desarrolladores especializados en crear experiencias web 
              excepcionales y soluciones digitales innovadoras.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Hecho con</span>
              <Heart className="text-red-400 fill-current" size={16} />
              <span>y mucho café ☕</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Equipo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>Tunja, Boyaca</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 sm:mb-0">
            © 2024 DevTeam Portfolio. Todos los derechos reservados.
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors group"
            title="Volver arriba"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;