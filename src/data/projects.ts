export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'emawey',
    image: '/LogoEmawey.png',
    title: 'Emawey',
    description: 'SaaS platform for Spanish-speaking pastors and churches that uses Claude AI to convert sermons into transcriptions, study guides, slides and clips. Pastors publish; believers access all content for free.',
    link: 'https://www.emawey.com/',
    tags: ['React', 'Supabase', 'Claude', 'Cloudflare'],
  },
  {
    id: 'financial-simulator',
    image: '/Simulador_Finanzas.png',
    title: 'Financial Simulator',
    description: 'All-in-one financial planner with mortgage, personal budget and retirement calculators. Three independent tools in one React app, each processing complex formulas in real time on the client.',
    link: 'https://financial-simulator-xi.vercel.app/',
    tags: ['React', 'JavaScript'],
  },
  {
    id: 'epc',
    image: '/EPC.png',
    title: 'EPC — Estudiants pel Canvi',
    description: 'Website for a Catalan student collective advocating for a public, critical and meritocratic university. Built with React to support their political training, debates and student activism campaigns.',
    link: 'https://epc-black.vercel.app/',
    tags: ['React'],
  },
  {
    id: 'data-format-converter',
    image: '/data_format.png',
    title: 'Data Format Converter',
    description: 'Real-time JSON ↔ CSV ↔ XML converter built with React and TypeScript. Runs fully client-side — no data leaves the browser — with instant validation and clear error feedback.',
    link: 'https://data-format-converter.vercel.app/',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'financial-calculator',
    image: '/interes.png',
    title: 'Financial Calculator',
    description: 'Compound interest and loan payment calculator with real-time recalculation. Built with custom React hooks, handling edge cases like irregular payment periods with zero external libraries.',
    link: 'https://financial-calculator-rho.vercel.app/',
    tags: ['React', 'JavaScript', 'CSS'],
  },
];
