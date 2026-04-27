import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import DarkSectionBg from './DarkSectionBg';

const items = [
  {
    type: 'degree' as const,
    title: 'Computer Engineering',
    institution: 'Universidad',
    status: 'In progress',
    active: true,
  },
  {
    type: 'degree' as const,
    title: 'Higher Degree in Web Application Development (DAW)',
    institution: 'Ciclo Formativo de Grado Superior',
    status: 'Completed',
    active: false,
  },
  {
    type: 'cert' as const,
    title: 'AI Specialist',
    institution: 'Racks Academy',
    status: 'Certified',
    active: false,
  },
  {
    type: 'cert' as const,
    title: 'Business, Innovation & Technology',
    institution: 'IUNIT',
    status: 'Certified',
    active: false,
  },
  {
    type: 'cert' as const,
    title: 'Digital Business',
    institution: 'Universidad Rey Juan Carlos (URJC)',
    status: 'Certified',
    active: false,
  },
];

const Education = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="education" className="relative bg-amber-dark py-20 px-6 overflow-hidden">
      <DarkSectionBg />
      <div ref={ref} className="relative z-10 container mx-auto">
        <SectionHeader
          eyebrow="Formation"
          title="Education"
          dark
        />
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {items.map((item, i) => {
            const Icon = item.type === 'degree' ? FaGraduationCap : FaCertificate;
            return (
              <div
                key={i}
                className={`flex gap-4 p-5 rounded-xl border transition-all duration-300 ${
                  item.active
                    ? 'border-gold/50 bg-gold/10'
                    : 'border-white/10 bg-white/5'
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                <div className={`mt-0.5 shrink-0 ${item.active ? 'text-gold' : 'text-amber-text/50'}`}>
                  <Icon size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-lora font-bold text-base text-cream-text leading-snug">
                    {item.title}
                  </p>
                  <p className="font-sans text-sm text-amber-text/70">
                    {item.institution}
                  </p>
                  <span
                    className={`mt-1 w-fit px-2 py-0.5 rounded-full text-xs font-sans font-semibold ${
                      item.active
                        ? 'bg-gold/20 text-gold-bright'
                        : 'bg-white/10 text-amber-text/60'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
