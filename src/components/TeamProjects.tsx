import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const TeamProjects: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  
  const allProjects = teamMembers.flatMap(member => 
    member.projects.map(project => ({
      ...project,
      memberName: member.name,
      memberRole: member.role
    }))
  );

  const filteredProjects = selectedMember 
    ? allProjects.filter(project => project.teamMemberId === selectedMember)
    : allProjects;

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyectos del Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de nuestros trabajos más destacados que demuestran 
            nuestras habilidades colaborativas
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedMember(null)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedMember === null
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Filter size={18} />
            <span>Todos los Proyectos</span>
          </button>
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedMember === member.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {member.name}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.demoUrl}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                        title="Ver Demo"
                      >
                        <Eye size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors"
                        title="Ver Código"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                      <span className="text-sm text-blue-600 font-medium">{project.memberName}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium"
                      >
                        <Github size={16} />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Otros Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                      <p className="text-sm text-blue-600">{project.memberName}</p>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-700"
                        title="Ver Código"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demoUrl}
                        className="text-gray-600 hover:text-gray-700"
                        title="Ver Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github size={20} />
            <span>Ver más en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamProjects;