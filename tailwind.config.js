/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
  plugins: [
    plugin(({ addUtilities, matchUtilities, theme }) => {
      /** https://github.com/tailwindlabs/tailwindcss/discussions/3378#discussioncomment-4177286 */
      // https://github.com/jamiebuilds/tailwindcss-animate
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );

      matchUtilities(
        { 'fill-mode': (value) => ({ animationFillMode: value }) },
        { values: theme('animationFillMode') },
      );

      // https://github.com/tailwindlabs/tailwindcss/discussions/6845
      addUtilities({
        '.writing-vertical-lr': {
          writingMode: 'vertical-lr',
        },
        '.writing-horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.writing-vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.orientation-sideways': {
          textOrientation: 'sideways',
        },
        '.orientation-upright': {
          textOrientation: 'upright',
        },
        '.orientation-mixed': {
          textOrientation: 'mixed',
        },
        '.orientation-sideways-right': {
          textOrientation: 'sideways-right',
        },
        '.orientation-glyph': {
          textOrientation: 'use-glyph-orientation',
        },
      });
    }),
  ],
};
