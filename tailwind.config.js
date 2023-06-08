/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#1b232e',
        secprimary: '#151826',
        abu: '#64748b',
        second: '#b5179e',
        ungu: '#6879be',
        secungu: '#536198',
        bgLight: '#f0f2f9',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
}

