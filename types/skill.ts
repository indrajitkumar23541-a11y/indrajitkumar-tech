export type SkillCategory = 
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Cloud & DevOps"
  | "Engineering & Architecture";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: "Proficient" | "Advanced" | "Familiar";
  projects: string[];
  description?: string;
  icon?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}

export interface DsaProfile {
  totalSolved: number;
  platform: string;
  primaryLanguage: string;
  topics: {
    name: string;
    description: string;
  }[];
  profileUrl?: string;
}
