import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '1+',  label: 'Years of Experience' },
  { value: '20+', label: 'Personal Projects' },
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
                src="/foto_Dani2.jpg"
                alt="Daniel Iuga"
                loading="lazy"
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
                Junior Frontend Developer
              </h3>
            </div>

            <p className="font-lora font-bold text-xl text-navy/80 leading-snug">
              Aspiring to create impactful web applications through clean code, responsive design, and a user-centric approach.
            </p>

            <p className="font-sans text-base text-[#666] leading-relaxed">
              I specialize in front-end development using React and TypeScript, with growing expertise in AI automation and full-stack development. Based in Barcelona, I'm always excited to collaborate on meaningful projects that apply technology to real-world problems.
            </p>

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
              <span className="text-sm font-sans text-[#666]">
                📍 Barcelona, Spain
              </span>
              <span className="text-sm font-sans text-[#666]">
                🎂 17 November 2004
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
