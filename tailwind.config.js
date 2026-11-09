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
          950: '#140A17',
          900: '#1F1122',
          850: '#2A162E',
          800: '#38213D', // Primary Deep Plum
          750: '#43264A',
          700: '#4D2C54',
          600: '#64396D',
          500: '#804B8B',
          400: '#A16EAC',
          300: '#C298CC',
          200: '#E6D3E8', // Light Lilac
          100: '#F3EAF4',
          50: '#FAF5FB',
        },
        orange: {
          accent: '#F0A05A', // Warm Orange
          hover: '#E59247',
          light: '#FCEFE4',
          glow: 'rgba(240, 160, 90, 0.35)',
        },
        lilac: {
          light: '#F8F2F9',
          DEFAULT: '#E6D3E8',
          muted: '#C9ADC2',
          dark: '#7B5D77',
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
        'festival': '0 20px 40px -15px rgba(56, 33, 61, 0.25)',
        'festival-hover': '0 25px 50px -12px rgba(240, 160, 90, 0.25)',
        'glow-orange': '0 0 25px rgba(240, 160, 90, 0.4)',
        'glow-plum': '0 0 35px rgba(56, 33, 61, 0.5)',
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
        }
      },
      animation: {
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      }
    },
  },
  plugins: [],
}
