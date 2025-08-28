import type { TeamMember } from '../types/Team';


export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Daniel García',
    role: 'Full Stack Developer',
    description: 'Especialista en desarrollo web moderno con experiencia en React, Node.js y arquitecturas escalables. Apasionado por crear soluciones innovadoras.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    skills: [
      { name: 'JavaScript/TypeScript', level: 95, category: 'Frontend' },
      { name: 'React/Next.js', level: 90, category: 'Frontend' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'MongoDB', level: 80, category: 'Database' },
      { name: 'Docker', level: 75, category: 'DevOps' }
    ],
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Plataforma completa de comercio electrónico con panel de administración y sistema de pagos.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: '#',
        githubUrl: '#',
        featured: true,
        teamMemberId: 1
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Aplicación de gestión de tareas con colaboración en tiempo real.',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: '#',
        githubUrl: '#',
        featured: false,
        teamMemberId: 1
      }
    ],
    contact: {
      email: 'daniel@equipo.com',
      phone: '+34 123 456 789',
      github: 'https://github.com/daniel',
      linkedin: 'https://linkedin.com/in/daniel',
      twitter: 'https://twitter.com/daniel'
    },
    stats: {
      projectsCompleted: 45,
      yearsExperience: 4,
      speciality: 'Full Stack'
    }
  },
  {
    id: 2,
    name: 'David Fernando Rico Mendivelso',
    role: 'Frontend Developer',
    description: 'Diseñador y desarrollador frontend con enfoque en experiencia de usuario. Experto en crear interfaces intuitivas y atractivas.',
    avatar: 'C:/Users/david/cv-developers/src/imagenes/david.jpg',
    skills: [
      { name: 'Figma/Adobe XD', level: 90, category: 'Design' },
      { name: 'React/Vue.js', level: 85, category: 'Frontend' },
      { name: 'CSS/Sass', level: 90, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 95, category: 'Frontend' }
    ],
    projects: [
    ],
    contact: {
      email: 'david.rico@usantoto.edu.co',
      phone: '+57 313 410 8164',
      github: 'https://github.com/D3IVISS',
      linkedin: ''
    },
    stats: {
      projectsCompleted: 5,
      yearsExperience: 1,
      speciality: 'React/Vue.js'
    }
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    role: 'Backend Developer & DevOps',
    description: 'Desarrollador backend especializado en arquitecturas de microservicios y DevOps. Experto en optimización y escalabilidad.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    skills: [
      { name: 'Python/Django', level: 90, category: 'Backend' },
      { name: 'Node.js/Express', level: 85, category: 'Backend' },
      { name: 'PostgreSQL/MySQL', level: 90, category: 'Database' },
      { name: 'Docker/Kubernetes', level: 85, category: 'DevOps' },
      { name: 'AWS/GCP', level: 80, category: 'Cloud' }
    ],
    projects: [
      {
        id: 5,
        title: 'Microservices Architecture',
        description: 'Arquitectura de microservicios escalable con Docker y Kubernetes.',
        technologies: ['Python', 'Docker', 'Kubernetes', 'PostgreSQL'],
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: '#',
        githubUrl: '#',
        featured: true,
        teamMemberId: 3
      },
      {
        id: 6,
        title: 'API Gateway',
        description: 'Gateway de APIs con autenticación, rate limiting y monitoreo.',
        technologies: ['Node.js', 'Redis', 'MongoDB', 'JWT'],
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        demoUrl: '#',
        githubUrl: '#',
        featured: false,
        teamMemberId: 3
      }
    ],
    contact: {
      email: 'carlos@equipo.com',
      phone: '+34 555 123 456',
      github: 'https://github.com/carlos',
      linkedin: 'https://linkedin.com/in/carlos'
    },
    stats: {
      projectsCompleted: 52,
      yearsExperience: 5,
      speciality: 'Backend & DevOps'
    }
  }
];