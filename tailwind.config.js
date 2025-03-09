/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1708c8", // Custom primary color
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        shake: 'shake 2s infinite',
        download: 'download 1.5s infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateY(-5px)' },
        },
        download: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
