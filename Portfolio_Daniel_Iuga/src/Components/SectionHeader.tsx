interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeader = ({ eyebrow, title, subtitle, dark = false }: SectionHeaderProps) => (
  <div className="flex flex-col items-center text-center mb-12">
    {eyebrow && (
      <div className={`flex items-center gap-3 mb-4 ${dark ? 'text-gold' : 'text-amber-soft'}`}>
        <span className={`block w-7 h-px ${dark ? 'bg-gold' : 'bg-gold'} opacity-50`} />
        <span className="text-xs font-sans tracking-[3px] uppercase">{eyebrow}</span>
        <span className={`block w-7 h-px ${dark ? 'bg-gold' : 'bg-gold'} opacity-50`} />
      </div>
    )}
    <h2
      className={`font-lora font-bold text-4xl md:text-5xl leading-tight ${
        dark ? 'text-cream-text' : 'text-navy'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 font-lora italic text-lg ${dark ? 'text-amber-text' : 'text-brown'}`}>
        {subtitle}
      </p>
    )}
    <div
      className={`mt-4 w-16 h-0.5 ${
        dark
          ? 'bg-gradient-to-r from-transparent via-gold-bright to-transparent'
          : 'bg-gradient-to-r from-transparent via-gold to-transparent'
      }`}
    />
  </div>
);

export default SectionHeader;
