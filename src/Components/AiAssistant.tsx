import { TbBrain } from 'react-icons/tb';
import DarkSectionBg from './DarkSectionBg';

const EXAMPLE_QUESTIONS = [
  'What stack do you work with?',
  'Are you available for a full-time role?',
  'What AI tools have you built with?',
  'Tell me about your business background.',
];

const openChat = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).botpress?.open();
};

const AiAssistant = () => (
  <section className="relative bg-amber-dark py-20 px-6 overflow-hidden">
    <DarkSectionBg />
    <div className="relative z-10 container mx-auto text-center">
      <div className="max-w-2xl mx-auto">

        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="font-sans text-xs text-gold-bright tracking-wide">Live AI Agent</span>
        </div>

        <h2 className="font-lora font-bold text-4xl md:text-5xl text-cream-text leading-tight mb-4">
          Ask My AI Assistant
        </h2>

        <p className="font-sans text-base text-amber-text/80 leading-relaxed mb-8 max-w-lg mx-auto">
          I built and configured a custom AI agent trained on my full profile — experience, projects, skills and availability. Ask it anything about working with me.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {EXAMPLE_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={openChat}
              className="px-3 py-1.5 rounded-full border border-gold/20 text-xs font-sans text-amber-text/70 hover:border-gold/50 hover:text-gold-bright transition-all duration-200 cursor-pointer"
            >
              "{q}"
            </button>
          ))}
        </div>

        <button
          onClick={openChat}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold-bright text-amber-dark font-sans font-bold text-sm hover:brightness-110 transition-all duration-200 shadow-[0_4px_24px_rgba(232,197,71,0.35)]"
        >
          <TbBrain size={18} />
          Start chatting
        </button>

      </div>
    </div>
  </section>
);

export default AiAssistant;
