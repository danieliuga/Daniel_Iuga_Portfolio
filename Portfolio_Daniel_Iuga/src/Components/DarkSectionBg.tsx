const DarkSectionBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient id="rg1" cx="50%" cy="0%" r="55%">
        <stop offset="0%" stopColor="#c8850a" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#c8850a" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg2" cx="15%" cy="100%" r="45%">
        <stop offset="0%" stopColor="#8b5e0a" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#8b5e0a" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg3" cx="85%" cy="100%" r="45%">
        <stop offset="0%" stopColor="#8b5e0a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#8b5e0a" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Gradient layers */}
    <rect width="100%" height="100%" fill="url(#rg1)" />
    <rect width="100%" height="100%" fill="url(#rg2)" />
    <rect width="100%" height="100%" fill="url(#rg3)" />

    {/* Light rays from top-center */}
    {[-60, -35, -15, 0, 15, 35, 60].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const length = 1200;
      const x2 = 50 + Math.sin(rad) * length * 0.7;
      const y2 = Math.cos(rad) * length * 0.7;
      return (
        <line
          key={i}
          x1="50%"
          y1="0"
          x2={`${x2}%`}
          y2={`${y2}px`}
          stroke="#d4a030"
          strokeWidth={i === 3 ? 0.5 : 0.4}
          strokeOpacity={i === 3 ? 0.08 : 0.05}
        />
      );
    })}

    {/* Origin point */}
    <circle cx="50%" cy="0" r="3" fill="#e8c547" fillOpacity="0.5" />

    {/* Decorative particles */}
    <circle cx="20%" cy="30%" r="1.2" fill="#d4a030" fillOpacity="0.35" />
    <circle cx="75%" cy="25%" r="1"   fill="#c8850a" fillOpacity="0.3" />
    <circle cx="85%" cy="65%" r="1.2" fill="#d4a030" fillOpacity="0.4" />
    <circle cx="10%" cy="70%" r="1"   fill="#c8850a" fillOpacity="0.25" />
    <circle cx="60%" cy="80%" r="1"   fill="#d4a030" fillOpacity="0.3" />

    {/* Corner crosses */}
    <g fill="#e8c547" fillOpacity="0.06">
      <rect x="2%"  y="5%"  width="12" height="2" />
      <rect x="2.4%" y="4%"  width="2"  height="12" transform="translate(3,0)" />
      <rect x="94%" y="5%"  width="12" height="2" />
      <rect x="94.4%" y="4%"  width="2"  height="12" transform="translate(3,0)" />
      <rect x="2%"  y="92%" width="12" height="2" />
      <rect x="2.4%" y="91%" width="2"  height="12" transform="translate(3,0)" />
    </g>
  </svg>
);

export default DarkSectionBg;
