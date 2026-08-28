export type LocalizedText = {
  es: string;
  en: string;
};

export type Theme = "dark" | "light";
export type Language = "es" | "en";

export interface Technology {
  name: string;
  short: string;
}

export interface Skill extends Technology {
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: LocalizedText;
  status: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  url: string | null;
  technologies: Technology[];
}

export interface ExperiencePosition {
  id: string;
  role: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  technologies: Technology[];
}

export interface Experience {
  id: string;
  period: LocalizedText;
  organization: string;
  role?: LocalizedText;
  description?: LocalizedText;
  technologies?: Technology[];
  roles?: ExperiencePosition[];
  positions?: ExperiencePosition[];
}

export interface Certification {
  id: string;
  name: LocalizedText;
  issuer: LocalizedText;
  date: LocalizedText;
  validationUrl: string | null;
  placeholder?: boolean;
}

export interface SkillCategory {
  id: "backend" | "frontend" | "ai-engineering" | "tools-systems";
  title: LocalizedText;
  description: LocalizedText;
  skills: Skill[];
}
