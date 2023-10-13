/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "customfade 0.4s ease-in-out",
      },
      keyframes: {
        customfade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      transition: {
        hamburger: "all 0.4s ease-in-out",
        filterIn: "transform 0.4s ease",
      },
      transitionDelay: {
        400: "0.4s",
      },
      transform: {
        transYDown: "translateY(-20px)",
        transYZero: "translateY(0)",
      },
      height: {
        screen75: "75vh",
      },
    },
    colors: {
      standard: "#221f20",
      black: `#000`,
      blue: `#0303fc`,
      blueRgba: `rgba(3, 3, 252, 0.8)`,
      blueRgbaHover: `rgba(3, 3, 252, 0.4)`,
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      // black: colors.black,
      // white: colors.white,
      // emerald: colors.emerald,
      // indigo: colors.indigo,
      // yellow: colors.yellow,
      // stone: colors.warmGray,
      // sky: colors.lightBlue,
      // neutral: colors.trueGray,
      // gray: colors.coolGray,
      // slate: colors.blueGray,
      ...colors,
    },

    transition: {
      duration: "0.4s",
      property: "ease-in-out",
    },
  },
  plugins: [],
};
