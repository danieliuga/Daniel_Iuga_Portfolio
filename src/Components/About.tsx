import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '2+',  label: 'Years of Experience' },
  { value: '10+', label: 'Personal Projects' },
  { value: '4+',  label: 'Languages Spoken' },
];

const About = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="bg-cream py-20 px-6">
      <div ref={ref} className="container mx-auto">
        <SectionHeader
          eyebrow="Who I am"
          title="About Me"
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/30 to-brown/20 blur-sm" />
              <img
                src="/imagen_Dani.jpg"
                alt="Daniel Iuga"
                loading="lazy"
                width="400"
                height="500"
                className="relative w-72 md:w-80 rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-lora italic text-gold text-sm tracking-widest uppercase mb-1">
                Daniel <span className="text-brown">*</span> Iuga
              </p>
              <h3 className="font-lora font-bold text-3xl text-navy leading-snug">
                The Dev Who Speaks Both Code and Business
              </h3>
            </div>

            {/* Why — most prominent */}
            <div className="border-l-[3px] border-gold pl-4">
              <p className="font-lora font-bold text-lg text-navy leading-snug">
                Everything I build starts from a single belief: technology should remove friction from people's lives, not add it. I don't just write code — I challenge how problems get solved.
              </p>
            </div>

            {/* How — medium */}
            <div className="border-l-[2px] border-brown/50 pl-4">
              <p className="font-sans text-base text-navy/75 leading-relaxed">
                I combine clean, scalable frontend development with AI automation systems that actually think. Every project is designed to be fast, intuitive, and smarter than the one before.
              </p>
            </div>

            {/* What — least prominent */}
            <div className="border-l border-cream-border pl-4">
              <p className="font-sans text-sm text-[#888] leading-relaxed">
                I build web applications and AI-powered tools. And if that sounds like your next project — let's talk.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 py-5 rounded-xl border border-cream-border bg-white shadow-sm"
                >
                  <p className="font-lora font-bold text-3xl text-navy">{value}</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#666] text-center leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <span className="text-sm font-sans text-[#666]">📍 Barcelona, Spain</span>
              <span className="text-sm font-sans text-[#666]">🎂 17 November 2004</span>
              <span className="text-sm font-sans text-[#666]">📚 Studying Computer Engineering</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Spanish', 'Catalan', 'English', 'Romanian'].map((lang) => (
                <span
                  key={lang}
                  className="px-2.5 py-0.5 rounded-full border border-cream-border bg-white text-xs font-sans text-navy/70"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
