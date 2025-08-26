export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  skills: Skill[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    twitter?: string;
  };
  stats: {
    projectsCompleted: number;
    yearsExperience: number;
    speciality: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  teamMemberId: number;
}