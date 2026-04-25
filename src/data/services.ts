import { TbBrain, TbStack2, TbWorld } from 'react-icons/tb';
import type { ComponentType } from 'react';

export interface Service {
  id: string;
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'business-engineering',
    icon: TbBrain,
    title: 'Business-First Engineering',
    description: 'I understand your problem before writing a single line of code. My background in digital business and innovation means I bridge tech and strategy — rare in a developer.',
  },
  {
    id: 'fullstack-execution',
    icon: TbStack2,
    title: 'Full-Stack Execution',
    description: 'React, TypeScript and AI automation from prototype to production. Clean, maintainable code focused on performance, scalability and long-term developer experience.',
  },
  {
    id: 'communication',
    icon: TbWorld,
    title: 'Communication Across Boundaries',
    description: 'Fluent in 4 languages with formal training in international business. I work effectively across technical and non-technical stakeholders, cultures and seniority levels.',
  },
];
