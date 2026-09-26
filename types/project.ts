export type ProjectStatus = "ACTIVE" | "COMPLETED" | "R&D" | "EXPERIMENTAL" | "ARCHIVED";

export type ProjectCategory = 
  | "AI Systems" 
  | "Full-Stack Platforms" 
  | "Spatial & 3D" 
  | "Cloud & Systems" 
  | "Exploratory Labs";

export interface ProjectArchitectureLayer {
  layer: string;
  components: string[];
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  goal: string;
  solution: string;
  architectureLayers: ProjectArchitectureLayer[];
  engineeringDecisions: string[];
  challenges: string[];
  futureRoadmap: string[];
}

export interface Project {
  id: string;
  name: string;
  codename?: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  role: string;
  year: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  caseStudy?: ProjectCaseStudy;
  universeCoordinates?: {
    orbit: number;
    angle: number;
    color?: string;
  };
}
