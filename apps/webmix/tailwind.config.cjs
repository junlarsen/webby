/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans JP"', '"Noto Sans"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
