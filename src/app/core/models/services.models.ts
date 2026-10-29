import { IconName } from '../../shared/ui/icon/icons';

export interface ServiceOffering {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly technologies: readonly string[];
}

export interface ServiceCategory {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly icon: IconName;
  readonly outcomes: readonly string[];
  readonly technologies: readonly string[];
  readonly services: readonly ServiceOffering[];
}

export interface TechStackGroup {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly items: readonly string[];
}

export interface BusinessSolution {
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
  readonly icon: IconName;
}

export interface Industry {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface Differentiator {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly deliverables: readonly string[];
}

export interface ContactDetails {
  readonly email: string;
  readonly phone: string;
  readonly whatsapp: string;
}

export interface HeroHighlight {
  readonly value: string;
  readonly label: string;
}
