import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { Mail, Phone, Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales que hacen posible cada proyecto
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                selectedMember.id === member.id ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{member.stats.projectsCompleted}</div>
                    <div className="text-xs text-gray-600">Proyectos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{member.stats.yearsExperience}+</div>
                    <div className="text-xs text-gray-600">Años</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">★</div>
                    <div className="text-xs text-gray-600">{member.stats.speciality}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Member Details */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Member Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-lg text-blue-600">{selectedMember.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedMember.description}</p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-500" size={18} />
                  <span className="text-gray-700">{selectedMember.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-500" size={18} />
                  <span className="text-gray-700">{selectedMember.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-500" size={18} />
                  <span className="text-gray-700">Tunja, Boyaca</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href={selectedMember.contact.github}
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={selectedMember.contact.linkedin}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                {selectedMember.contact.twitter && (
                  <a
                    href={selectedMember.contact.twitter}
                    className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors"
                    title="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Habilidades Técnicas</h4>
              <div className="space-y-4">
                {selectedMember.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;