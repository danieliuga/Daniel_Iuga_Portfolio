/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:        '#1a2744',
        brown:       '#7c4f2a',
        gold:        '#c9a84c',
        cream:       '#f5f0e8',
        'cream-border': '#f0e8d8',
        'amber-dark': '#1e1408',
        'amber-mid':  '#c8850a',
        'amber-soft': '#8b5e0a',
        'gold-bright': '#e8c547',
        'gold-text':   '#e0a830',
        'cream-text':  '#f5edd8',
        'amber-text':  '#b89e78',
        'amber-muted': '#9a856a',
      },
      fontFamily: {
        lora:  ['Lora', 'serif'],
        sans:  ['Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        logoDrop: {
          '0%':   { opacity: '0', transform: 'translateY(-100px)' },
          '60%':  { opacity: '1', transform: 'translateY(8px)' },
          '80%':  { opacity: '1', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rowSlide: {
          '0%':   { transform: 'translateX(44px)' },
          '100%': { transform: 'translateX(0)' },
        },
        letterReveal: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        overlayFade: {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.5s ease-out forwards',
        'logo-drop':    'logoDrop 0.6s ease-out forwards',
        'row-slide':    'rowSlide 0.7s ease-out forwards',
        'letter-reveal':'letterReveal 0.25s ease-out forwards',
        'overlay-fade': 'overlayFade 0.6s ease-in forwards',
      },
    },
  },
  plugins: [],
}

