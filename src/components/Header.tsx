import { Menu, X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    // Si estamos en la página de portafolio, navegar a la principal
    if (window.location.pathname === "/Portafolio_Edgard") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // Espera a que cargue la página principal
      setIsMenuOpen(false);
      return;
    }
    // Si ya estamos en la principal, solo hacer scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 transition-all duration-700">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 tracking-wide drop-shadow-lg animate-fade-in-left">
              Portfolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 animate-fade-in-right">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors rounded-lg shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ transition: "all 0.3s cubic-bezier(.4,2,.3,1)" }}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 w-full text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 w-full text-left"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 w-full text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 w-full text-left"
            >
              Contacto
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/Portafolio_Edgard");
              }}
              className="block px-3 py-2 text-base font-bold text-purple-700 hover:text-purple-900 hover:bg-purple-50 w-full text-left border border-purple-200 rounded-lg bg-purple-50 shadow-sm mt-2"
            >
              Mi Portafolio
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
