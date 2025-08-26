import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { Mail, Phone, MapPin, Send, Github, Linkedin,} from 'lucide-react';

const TeamContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredMember: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '', preferredMember: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estamos listos para 
            convertir tus ideas en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Team Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información del Equipo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Email General</p>
                    <p className="text-gray-900 font-medium">equipo@devteam.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Teléfono</p>
                    <p className="text-gray-900 font-medium">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Ubicación</p>
                    <p className="text-gray-900 font-medium">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Quick Contact */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Contacto Directo
              </h4>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900">{member.name}</h5>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <p className="text-sm text-blue-600">{member.contact.email}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={member.contact.github}
                          className="text-gray-600 hover:text-gray-800"
                          title="GitHub"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={member.contact.linkedin}
                          className="text-gray-600 hover:text-blue-600"
                          title="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Availability */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-green-800 font-medium">Equipo disponible para proyectos</p>
              </div>
              <p className="text-green-700 text-sm">
                Actualmente aceptando nuevos proyectos y colaboraciones. 
                Tiempo de respuesta: 24-48 horas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <div>
                  <label htmlFor="preferredMember" className="block text-sm font-medium text-gray-700 mb-2">
                    Miembro Preferido (Opcional)
                  </label>
                  <select
                    id="preferredMember"
                    name="preferredMember"
                    value={formData.preferredMember}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Todo el equipo</option>
                    {teamMembers.map((member) => (
                      <option key={member.id} value={member.name}>
                        {member.name} - {member.role}
                      </option>
                    ))}
                  </select>
                </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 group"
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

export default TeamContact;