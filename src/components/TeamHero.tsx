import React from 'react';
import { ArrowDown, Users, Code, Zap } from 'lucide-react';

const TeamHero: React.FC = () => {
  const scrollToTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                <Users className="text-white" size={48} />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Somos{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevTeam
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">
              Un equipo de desarrolladores apasionados
            </p>
            
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              Combinamos experiencia en desarrollo full-stack, diseño UX/UI y DevOps 
              para crear soluciones digitales excepcionales que impulsan el crecimiento 
              de tu negocio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Desarrollo Full-Stack</h3>
                <p className="text-gray-600 text-sm">Frontend, Backend y bases de datos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Diseño UX/UI</h3>
                <p className="text-gray-600 text-sm">Experiencias centradas en el usuario</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">DevOps & Cloud</h3>
                <p className="text-gray-600 text-sm">Infraestructura escalable y segura</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Trabajar con Nosotros
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Proyectos
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 animate-bounce">
          <button
            onClick={scrollToTeam}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;