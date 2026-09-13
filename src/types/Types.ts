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
  onAddToStack: (tech: Technology) => void;
  isAdded: boolean;
}

export interface StackProps {
  techPromise: Promise<Technology[]>;
  selectedStacks: Technology[];
  onAddToStack: (tech: Technology) => void;
  onRemoveFromStack: (tech: Technology) => void;
  onRemoveAll: () => void;
}

export interface TechGridProps {
  techPromise: Promise<Technology[]>;
  onAddToStack: (tech: Technology) => void;
  selectedStacks: Technology[];
}

export interface HeaderProps {
  selectedStacks: Technology[];
  onRemoveFromStack: (tech: Technology) => void;
  onRemoveAll: () => void;
}

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStacks: Technology[];
  onRemoveFromStack: (tech: Technology) => void;
  onRemoveAll: () => void;
}

export interface NavHeaderActionProps {
  onOpenDrawer: () => void;
  selectedCount: number;
}
