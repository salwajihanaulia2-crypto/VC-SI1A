export interface Project {
  id: string;
  title: string;
  subtitle: string;
  course: string;
  year: string;
  role: string;
  team: string;
  objective: string;
  results: string;
  image: string;
  summary: string;
  details: {
    problemContext: string;
    systemArchitecture?: {
      level: string;
      name: string;
      description: string;
      features: string[];
    }[];
    deliverables: string[];
    impact: string;
    islamicPrinciples?: {
      name: string;
      arabic?: string;
      meaning: string;
      applicationInIT: string;
    }[];
  };
}

export interface InformationRequirement {
  id: string;
  subsystem: 'TPS' | 'MIS' | 'DSS';
  name: string;
  input: string;
  process: string;
  output: string;
  users: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  competencies: string[];
  deliverableExamples: string[];
}
