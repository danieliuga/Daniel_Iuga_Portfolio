import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '#about',     label: 'About' },
  { href: '#skills',    label: 'Skills' },
  { href: '#projects',  label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#services',  label: 'What I Bring' },
  { href: '#contact',   label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/letra-d.png" alt="Daniel Iuga" className="w-8 h-8 rounded" />
          <span className="font-lora font-bold text-xl text-cream-text">Daniel.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-cream-text/80 hover:text-gold transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://cal.com/iuga-0-atqae8/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 border border-gold text-gold font-sans text-sm font-semibold hover:bg-gold hover:text-amber-dark transition-all duration-200"
        >
          Let's talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream-text"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-sm border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base text-cream-text/80 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://cal.com/iuga-0-atqae8/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center px-5 py-2 border border-gold text-gold font-sans text-sm font-semibold hover:bg-gold hover:text-amber-dark transition-all duration-200"
          >
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
