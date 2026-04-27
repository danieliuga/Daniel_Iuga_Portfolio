import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DarkSectionBg from './DarkSectionBg';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const { ref, visible } = useScrollAnimation(0.05);

  return (
    <section className="relative min-h-screen bg-amber-dark flex items-center overflow-hidden">
      <DarkSectionBg />

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Text */}
        <div className="flex flex-col items-center text-center">
          {/* Availability badge */}
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-sans text-xs text-gold-bright tracking-wide">Open to opportunities · Available now</span>
            </div>
            <p className="font-sans text-xs text-amber-muted tracking-wide">Full-time · Remote / Hybrid</p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-gold opacity-50" />
            <span className="text-xs font-sans tracking-[3px] uppercase text-gold">
              Fullstack · AI · Business-Minded
            </span>
            <span className="block w-7 h-px bg-gold opacity-50" />
          </div>

          <h1 className="font-lora font-bold text-4xl md:text-5xl lg:text-6xl text-cream-text leading-tight">
            Hi, I'm{' '}
            <span className="text-gold-text italic">Daniel Iuga</span>
          </h1>

          <p className="mt-4 font-lora italic text-lg md:text-xl text-amber-text">
            FullStack Developer & AI Automation Specialist
          </p>

          <p className="mt-6 font-sans text-base text-amber-text/80 max-w-md leading-relaxed">
            Based in Barcelona — I build web apps and AI systems with a business background that lets me understand your problems before writing a single line of code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
            <a
              href="/CV Dani Iuga.pdf"
              download
              className="inline-flex items-center px-7 py-3 bg-gold-bright text-amber-dark font-sans font-bold text-sm hover:brightness-110 transition-all duration-200 shadow-[0_4px_24px_rgba(232,197,71,0.35)]"
            >
              Download CV
            </a>
            <button
              onClick={onContactClick}
              className="inline-flex items-center px-7 py-3 bg-white/10 text-cream-text border border-cream-text/35 font-sans text-sm font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Message Me
            </button>
          </div>

          {/* Social links + Schedule */}
          <div className="flex items-center gap-5 mt-5">
            <a
              href="https://www.linkedin.com/in/danieliuga/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-amber-text/60 hover:text-gold transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/danieliuga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-amber-text/60 hover:text-gold transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <span className="w-px h-4 bg-amber-text/20" />
            <a
              href="https://cal.com/iuga-0-atqae8/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-amber-text/60 hover:text-gold transition-colors duration-200"
            >
              Schedule a 15-min call →
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-gold/30 to-amber-mid/20 blur-sm" />
            <img
              src="/imagen_Dani.jpg"
              alt="Daniel Iuga"
              width="400"
              height="500"
              className="relative w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-8 inset-x-0 mx-auto w-fit flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-sans tracking-widest text-amber-muted uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
