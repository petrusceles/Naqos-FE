/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center:true
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'primary':'#0A008A',
        'secondary':'#E1E0FF',
        'contrary':'#FFBA2C',
        'contary-secondary':"#FFDEAA"

      }},
  },
  plugins: [require("daisyui"),require('@tailwindcss/line-clamp')],
};
