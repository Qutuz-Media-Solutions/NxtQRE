/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grandstander: [
          'var(--font-grandstander)',
          ...defaultTheme.fontFamily.sans,
        ],
        arabic: ['var(--font-arabic)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
