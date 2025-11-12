"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C3364',
          hover: '#152848',
          light: '#2d4a8a',
          dark: '#0f1e3d'
        },
        secondary: {
          DEFAULT: '#F37325',
          hover: '#d96420',
          light: '#ff8f4a',
          dark: '#c55a1a'
        },
        accent: '#e8f4f8',
        dark: '#1a1a1a',
        light: '#ffffff'
      },
      fontFamily: {
        sans: ['Poppins', 'TT Masters', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'TT Masters', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'text-reveal': 'textReveal 1s ease-out forwards',
        'shake': 'shake 0.5s ease-in-out'
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-40px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(40px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        "float": {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-12px)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% center'
          },
          '100%': {
            backgroundPosition: '200% center'
          }
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(243, 115, 40, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(243, 115, 40, 0.8)'
          }
        },
        textReveal: {
          from: {
            opacity: '0',
            clipPath: 'inset(0 100% 0 0)'
          },
          to: {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)'
          }
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '25%': {
            transform: 'translateX(-5px)'
          },
          '75%': {
            transform: 'translateX(5px)'
          }
        }
      },
      boxShadow: {
        'professional': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'professional-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
};
//# sourceMappingURL=tailwind.config.dev.js.map
