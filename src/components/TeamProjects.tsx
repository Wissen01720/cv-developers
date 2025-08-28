import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { teamMembers } from "../data/teamData";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
  language?: string;
}

const TeamProjects: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number>(
    teamMembers[0].id
  );

  // Obtiene el miembro seleccionado
  const member = teamMembers.find((m) => m.id === selectedMember);
  const [githubProjects, setGithubProjects] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (member?.name === "Edgard Leonardo Patiño Largo") {
      setLoading(true);
      fetch(`https://api.github.com/users/Wissen01720/repos`)
        .then((res) => res.json())
        .then((data: GithubRepo[]) => {
          setGithubProjects(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [member?.name]);

  // ...existing code...
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyectos de {member?.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecciona un miembro para ver sus proyectos destacados.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamMembers.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMember(m.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedMember === m.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {loading && member?.name === "Edgard Leonardo Patiño Largo" ? (
            <div className="text-center col-span-3 text-gray-500">
              Cargando proyectos...
            </div>
          ) : member?.name === "Edgard Leonardo Patiño Largo" ? (
            githubProjects.slice(0, 5).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group border border-gray-100"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 truncate">
                      {project.name}
                    </h4>
                    <span className="text-xs text-blue-600 font-semibold">
                      {member.name}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 min-h-[40px]">
                    {project.description || "Sin descripción"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.language && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                        {project.language}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.html_url}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                      <span>Código</span>
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            member?.projects.slice(0, 5).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group border border-gray-100"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 truncate">
                      {project.title}
                    </h4>
                    <span className="text-xs text-blue-600 font-semibold">
                      {member?.name}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 min-h-[40px]">
                    {project.description || "Sin descripción"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies &&
                      project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                        <span>Código</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamProjects;
