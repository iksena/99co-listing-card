const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-avenir)', ...fontFamily.sans],
      },
    },
    colors: {
      '99-dark': '#1A2258',
      '99-grey': '#787D9C',
      '99-link': '#216BFF',
      '99-icon': '#98BAFC',
      ribbon: '#FF72B6',
      'ribbon-text': '#FFFFFF',
    },
  },
  plugins: [],
};
