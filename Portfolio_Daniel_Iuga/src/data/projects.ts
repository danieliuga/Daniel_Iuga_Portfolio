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
    id: 'data-format-converter',
    image: '/data_format.png',
    title: 'Data Format Converter',
    description: 'A web tool built to convert data formats such as JSON, CSV, and XML, enhancing user experience through a clean UI and fast conversions.',
    link: 'https://data-format-converter.vercel.app/',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'financial-calculator',
    image: '/interes.png',
    title: 'Financial Calculator',
    description: 'A calculator that helps users compute financial metrics such as interest rates and payments, built with React hooks and clean component architecture.',
    link: 'https://financial-calculator-rho.vercel.app/',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 'loan-amortization',
    image: '/amortizacion.png',
    title: 'Loan Amortization Tool',
    description: 'An application that generates detailed loan amortization schedules, ideal for users looking to better understand their repayment plans.',
    link: 'https://financial-calculator-rho.vercel.app/',
    tags: ['React', 'JavaScript'],
  },
];
