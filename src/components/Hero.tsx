import React from "react";
import LifeImg from "../img/Life.jpg";

interface HeroProps {
  name: string;
  subtitle: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, subtitle, imageUrl }) => {
  const avatar = imageUrl || LifeImg;
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f8fafc] pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hola, soy{" "}
                <span className="text-yellow-400 drop-shadow-lg">{name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mt-4 mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Desarrollador apasionado por crear experiencias web
                excepcionales. Especializado en tecnologías modernas y
                soluciones innovadoras.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-right">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-56 h-56 object-cover rounded-full border-4 border-yellow-400 shadow-lg transition-transform duration-500 hover:scale-105"
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(168,139,250,0.2)",
                    }}
                  />
                </div>
              </div>
              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-200 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-200 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-200 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Eliminado el botón flotante inferior */}
      </div>
    </section>
  );
};

export default Hero;
