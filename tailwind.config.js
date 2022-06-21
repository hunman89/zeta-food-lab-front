const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["NanumSquare", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      sky: colors.sky,
      pink: colors.pink,
      amber: colors.amber,
      zetadark: "#003873",
      zetalight: "#0054a6",
    },
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 2s",
        fadeInUp: "fadeInUp 1s",
        fadeIn: "fadeIn 3s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
