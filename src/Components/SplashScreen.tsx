import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [fading, setFading] = useState(false);
  const [done, setDone]     = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2700);
    const t2 = setTimeout(() => setDone(true),   3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-amber-dark flex items-center justify-center overflow-hidden"
      style={
        fading
          ? { animation: 'splashExit 0.9s ease-in forwards', pointerEvents: 'none' }
          : undefined
      }
    >
      {/* Radial gold glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Content stack */}
      <div className="relative flex flex-col items-center gap-5">

        {/* Logo — drops + glows gold on landing */}
        <img
          src="/letra-d.png"
          alt=""
          aria-hidden="true"
          className="w-20 h-20 rounded"
          style={{
            animation:
              'splashDrop 0.7s cubic-bezier(0.22,1,0.36,1) both, splashGlow 0.75s ease-out 0.55s both',
          }}
        />

        {/* Gold accent line — extends symmetrically from center */}
        <div
          style={{
            width: '210px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #c9a84c 40%, #c9a84c 60%, transparent)',
            transformOrigin: 'center',
            animation: 'splashLine 0.55s ease-out 0.85s both',
          }}
        />

        {/* Name — clip-path curtain wipe left → right */}
        <h1
          className="font-lora font-bold text-4xl md:text-5xl text-cream-text tracking-widest"
          style={{ animation: 'splashReveal 0.9s cubic-bezier(0.4,0,0.2,1) 1.15s both' }}
        >
          Daniel Iuga
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase text-amber-text"
          style={{ animation: 'splashSubtitle 0.65s ease-out 1.9s both' }}
        >
          AI Specialist &amp; Developer
        </p>

      </div>
    </div>
  );
};

export default SplashScreen;
