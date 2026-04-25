import { TbBrain, TbStack2, TbPalette } from 'react-icons/tb';
import type { ComponentType } from 'react';

export interface Service {
  id: string;
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    icon: TbBrain,
    title: 'AI & Automatizaciones',
    description: 'Integración de LLMs, agentes de IA y flujos de automatización con N8N y APIs de Anthropic para optimizar procesos repetitivos.',
  },
  {
    id: 'fullstack',
    icon: TbStack2,
    title: 'FullStack Development',
    description: 'Desarrollo de aplicaciones web completas con React en frontend y SQL en backend, enfocadas en rendimiento y experiencia de usuario.',
  },
  {
    id: 'ui-ux',
    icon: TbPalette,
    title: 'UI/UX Design',
    description: 'Diseño de interfaces intuitivas y atractivas en Figma, orientadas a la usabilidad y estética visual del producto final.',
  },
];
