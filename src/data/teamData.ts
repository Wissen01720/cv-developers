import type { TeamMember } from "../types/Team";

export const teamMembers: TeamMember[] = [
  {
    id: 0,
    name: "Edgard Leonardo Patiño Largo",
    role: "Desarrollador Full Stack & Cybersecurity",
    description:
      "Apasionado por la tecnología, especializado en desarrollo web y movil y el ciber espacio. Experiencia en React, Node.js, kotlin, Flutter, Python, entre otros. Siempre buscando aprender y aportar soluciones innovadoras.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    skills: [
      { name: "JavaScript/TypeScript", level: 70, category: "Frontend" },
      { name: "React/Flutter/Kotlin", level: 80, category: "Frontend" },
      { name: "Tools cybersecurity", level: 65, category: "Security" },
      { name: "Ilustrator/Blender", level: 70, category: "Design" },
      { name: "Postgrest/MySQL", level: 75, category: "Backend" },
    ],
    projects: [
      {
        id: 100,
        title: "Mi Portafolio",
        description:
          "Sitio web personal donde muestro mis proyectos, habilidades y trayectoria profesional.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Docker"],
        image:
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        teamMemberId: 0,
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "Aplicación de gestión de tareas con colaboración en tiempo real.",
        technologies: ["Next.js", "TypeScript", "Prisma"],
        image:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        teamMemberId: 1,
      },
    ],
    contact: {
      email: "edgardlpl@hotmail.com",
      phone: "+57 3054082427",
      github: "https://github.com/Wissen01720",
      linkedin: "https://www.linkedin.com/in/edgard-leonardo-patiño-largo-a274072a4",
    },
    stats: {
      projectsCompleted: 22,
      yearsExperience: 4,
      speciality: "Full Stack & Cybersecurity",
    },
    showPortfolioButton: true,
  },
  {
    id: 2,
    name: "David Fernando Rico Mendivelso",
    role: "Frontend Developer",
    description:
      "Diseñador y desarrollador frontend con enfoque en experiencia de usuario. Experto en crear interfaces intuitivas y atractivas.",
    avatar:
      "c:/Users/david/OneDrive/Documentos/photo.jpg",
    skills: [
      { name: "React/Vue.js", level: 85, category: "Frontend" },
      { name: "CSS/Sass", level: 60, category: "Frontend" },
      { name: "Tailwind CSS", level: 70, category: "Frontend" },
    ],
    projects: [
      {
        id: 3,
        title: "Design System",
        description:
          "Sistema de diseño completo con componentes reutilizables y guías de estilo.",
        technologies: ["Figma", "React", "Tailwind"],
        image:
          "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        teamMemberId: 2,
      }
    ],
    contact: {
      email: "david.rico@usantoto.edu.co",
      phone: "+57 313 410 8164",
      github: "https://github.com/D3IVISS",
      linkedin: "",
    },
    stats: {
      projectsCompleted: 4,
      yearsExperience: 1,
      speciality: "Frontend Developer",
    },
  },
  {   
    id: 3,
    name: "Carlos Ruiz",
    role: "Backend Developer & DevOps",
    description:
      "Desarrollador backend especializado en arquitecturas de microservicios y DevOps. Experto en optimización y escalabilidad.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    skills: [
      { name: "Python/Django", level: 90, category: "Backend" },
      { name: "Node.js/Express", level: 85, category: "Backend" },
      { name: "PostgreSQL/MySQL", level: 90, category: "Database" },
      { name: "Docker/Kubernetes", level: 85, category: "DevOps" },
      { name: "AWS/GCP", level: 80, category: "Cloud" },
    ],
    projects: [
      {
        id: 5,
        title: "Microservices Architecture",
        description:
          "Arquitectura de microservicios escalable con Docker y Kubernetes.",
        technologies: ["Python", "Docker", "Kubernetes", "PostgreSQL"],
        image:
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        teamMemberId: 3,
      },
      {
        id: 6,
        title: "API Gateway",
        description:
          "Gateway de APIs con autenticación, rate limiting y monitoreo.",
        technologies: ["Node.js", "Redis", "MongoDB", "JWT"],
        image:
          "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
        teamMemberId: 3,
      },
    ],
    contact: {
      email: "carlos@equipo.com",
      phone: "+34 555 123 456",
      github: "https://github.com/carlos",
      linkedin: "https://linkedin.com/in/carlos",
    },
    stats: {
      projectsCompleted: 52,
      yearsExperience: 5,
      speciality: "Backend & DevOps",
    },
  },
];
