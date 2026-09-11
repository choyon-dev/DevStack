export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface TechCardProps {
  tech: Technology;
}

export interface StackProps {
  techPromise: Promise<Technology[]>;
}

export interface TechGridProps {
  techPromise: Promise<Technology[]>;
}
