/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        grandstander: [
          'var(--font-grandstander)',
          ...defaultTheme.fontFamily.sans,
        ],
        arabic: ['var(--font-arabic)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        medhal: {
          light: '#07d5c0',
          dark: '#00796c',
        },
      },
      // Animations
      keyframes: {
        animateunderline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        animateunderline: 'animateunderline ease-in-out',
      },
      animationFillMode: {
        none: 'none',
        forwards: 'forwards',
        backwards: 'backwards',
        both: 'both',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(({ addUtilities, matchUtilities, theme }) => {
      /** https://github.com/tailwindlabs/tailwindcss/discussions/3378#discussioncomment-4177286 */
      // https://github.com/jamiebuilds/tailwindcss-animate

      matchUtilities(
        {
          'animation-duration': (val) => ({ animationDuration: val }),
        },
        { values: theme('transitionDuration') },
      );

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

      matchUtilities(
        { 'rotate-y': (value) => ({ transform: `rotateY(${value})` }) },
        { values: theme('rotate') },
      );
      // https://github.com/tailwindlabs/tailwindcss/discussions/6845
      addUtilities({
        /* ----- Writing & Text ----- */
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

        /* ------ Rotation & Transforms ----- */
      });
    }),
  ],
};
