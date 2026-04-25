import type { ComponentType } from 'react';

interface SkillItemProps {
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
  index: number;
  visible: boolean;
}

const SkillItem = ({ icon: Icon, title, description, index, visible }: SkillItemProps) => (
  <div
    className="bg-white rounded-2xl border border-cream-border p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-gold transition-all duration-300"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.5s ease-out ${index * 80}ms, transform 0.5s ease-out ${index * 80}ms, box-shadow 0.3s, border-color 0.3s`,
    }}
  >
    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center" style={{ color: '#7c4f2a' }}>
      <Icon size={26} />
    </div>
    <p className="font-lora font-bold text-lg text-navy">{title}</p>
    <p className="font-sans text-sm text-[#666] leading-relaxed">{description}</p>
  </div>
);

export default SkillItem;
