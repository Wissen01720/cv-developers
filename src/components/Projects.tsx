import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración, carrito de compras, y sistema de pagos integrado.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real y notificaciones.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico interactivo con pronósticos detallados, mapas y análisis de tendencias climáticas.',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS Modules'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Plataforma de blog con editor de contenido markdown, sistema de comentarios y optimización SEO.',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Dashboard para gestión de redes sociales con análisis de métricas y programación de publicaciones.',
      technologies: ['Vue.js', 'Express', 'Redis', 'Social APIs'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Aplicación móvil para seguimiento de ejercicios con planes personalizados y seguimiento de progreso.',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Redux'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y proyectos que demuestran 
            mis habilidades técnicas
          </p>
        </div>

        {/* Proyectos Destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proyectos Principales</h3>
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
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition-colors"
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
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 font-medium"
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

        {/* Otros Proyectos */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Otros Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
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
                      className="px-2 py-1 bg-white text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white text-gray-500 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default Projects;