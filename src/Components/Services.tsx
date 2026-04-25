import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import { services } from '../data/services';

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
  visible,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  index: number;
  visible: boolean;
}) => (
  <div
    className="bg-white rounded-2xl border border-cream-border p-8 flex flex-col items-start gap-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-gold transition-all duration-300"
    style={{
      transitionDelay: visible ? `${index * 100}ms` : '0ms',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms, box-shadow 0.3s, border-color 0.3s`,
    }}
  >
    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center" style={{ color: '#7c4f2a' }}>
      <Icon size={22} />
    </div>
    <h3 className="font-lora font-bold text-xl text-navy">{title}</h3>
    <p className="font-sans text-sm text-[#666] leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="services" className="bg-cream py-20 px-6">
      <div ref={ref} className="container mx-auto">
        <SectionHeader
          eyebrow="What I do"
          title="Services"
          subtitle="How I can help you"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
