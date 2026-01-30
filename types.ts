
import { LucideIcon } from 'lucide-react';

export interface Protocol {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  actionItems: string[];
}

export interface StepOneProps {
  onUnlock: () => void;
  activeUsers: number;
  showNotification: boolean;
}

export interface StepTwoProps {
  onProceed: () => void;
}
