/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#0A008A",
        secondary: "#E1E0FF",
        contrary: "#FFBA2C",
        "contary-secondary": "#FFDEAA",
        "contrary-tertiary": "#FFDCBD",
      },
      animation: {
        slide100: "slide 1s infinite",
        slideMobile100: "slideMobile 1s infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-400px)" },
          // '50%': { transform: 'translateX(0px)'},
          "100%": { transform: "translateX(400px)" },
        },
        slideMobile: {
          "0%": { transform: "translateX(-450px)" },
          // '50%': { transform: 'translateX(0px)'},
          "100%": { transform: "translateX(450px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
