import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Acerca de Mí
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soy un desarrollador full-stack apasionado por crear soluciones digitales 
            que marquen la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                Con más de 3 años de experiencia en desarrollo web, me especializo en 
                crear aplicaciones modernas, escalables y centradas en el usuario. 
                Mi pasión por la tecnología me impulsa a estar siempre aprendiendo 
                nuevas herramientas y metodologías.
              </p>
              <p>
                Trabajo con tecnologías como React, Node.js, TypeScript, y me encanta 
                experimentar con nuevos frameworks y librerías que puedan mejorar la 
                experiencia del usuario y la eficiencia del desarrollo.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                <Code className="text-yellow-500" size={20} />
                <span className="text-gray-700 font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                <Coffee className="text-yellow-500" size={20} />
                <span className="text-gray-700 font-medium">Coffee Lover</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                <Heart className="text-yellow-500" size={20} />
                <span className="text-gray-700 font-medium">Problem Solver</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-lg">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">3+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">∞</div>
                  <div className="text-gray-600">Café Consumido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;