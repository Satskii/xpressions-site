/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: 'rgb(var(--plum-950) / <alpha-value>)',
          900: 'rgb(var(--plum-900) / <alpha-value>)',
          850: 'rgb(var(--plum-850) / <alpha-value>)',
          800: 'rgb(var(--plum-800) / <alpha-value>)',
          750: 'rgb(var(--plum-750) / <alpha-value>)',
          700: 'rgb(var(--plum-700) / <alpha-value>)',
          600: 'rgb(var(--plum-600) / <alpha-value>)',
          500: 'rgb(var(--plum-500) / <alpha-value>)',
          400: 'rgb(var(--plum-400) / <alpha-value>)',
          300: 'rgb(var(--plum-300) / <alpha-value>)',
          200: 'rgb(var(--plum-200) / <alpha-value>)',
          100: 'rgb(var(--plum-100) / <alpha-value>)',
          50: 'rgb(var(--plum-50) / <alpha-value>)',
        },
        orange: {
          accent: 'rgb(var(--accent-primary) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
          light: 'rgb(var(--accent-light) / <alpha-value>)',
          glow: 'var(--accent-glow)',
        },
        lilac: {
          light: 'rgb(var(--text-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--text-highlight) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
          dark: 'rgb(var(--text-dark) / <alpha-value>)',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'festival': '0 20px 40px -15px rgb(var(--plum-800) / 0.25)',
        'festival-hover': '0 25px 50px -12px rgb(var(--accent-primary) / 0.25)',
        'glow-orange': '0 0 25px rgb(var(--accent-primary) / 0.45)',
        'glow-plum': '0 0 35px rgb(var(--plum-800) / 0.5)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'marquee': 'marquee 28s linear infinite',
      }
    },
  },
  plugins: [],
}
