import { SiReact, SiN8N } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { TbRobot } from 'react-icons/tb';
import type { ComponentType } from 'react';

export interface Skill {
  id: string;
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: 'react',
    icon: SiReact,
    title: 'React',
    description: 'Component-based UI library for building fast and scalable web interfaces.',
  },
  {
    id: 'sql',
    icon: FaDatabase,
    title: 'SQL',
    description: 'Relational database design and querying for structured data management.',
  },
  {
    id: 'claude-code',
    icon: TbRobot,
    title: 'Claude Code',
    description: 'Agentic AI-powered development with Anthropic\'s Claude CLI to accelerate engineering workflows.',
  },
  {
    id: 'prompt-engineering',
    icon: HiSparkles,
    title: 'Prompt & Context Engineering',
    description: 'Designing precise prompts and context structures to maximize LLM output quality.',
  },
  {
    id: 'n8n',
    icon: SiN8N,
    title: 'N8N',
    description: 'Workflow automation platform for connecting APIs, services and business logic without friction.',
  },
];
