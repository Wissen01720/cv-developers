import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre abierto a 
            nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">daniel@ejemplo.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Teléfono</p>
                    <p className="text-gray-900 font-medium">+34 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Ubicación</p>
                    <p className="text-gray-900 font-medium">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Redes Profesionales
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors"
                  title="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-green-800 font-medium">Disponible para proyectos</p>
              </div>
              <p className="text-green-700 text-sm">
                Actualmente aceptando nuevos proyectos freelance y oportunidades laborales.
              </p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group"
              >
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;