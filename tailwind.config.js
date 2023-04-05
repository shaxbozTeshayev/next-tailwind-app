/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#F3F7FF",
        darkColor: "#1D242B",
        coolGray: "#7B8794",
        textSecondary: "#5877AB",
        textMain: "#1D242B",
        mainColor: "#315796",
        brandColor: "#0F4C81",
        fifthGray: "#778082",
        secondaryOrange: "#DD6B20",
        secondaryDanger: "#EB001A",
        secondarySuccess: "#5BA85A",
        secondaryYellow: "#F3CF00",
        mapColor: "#DEE6FF",
        illustrationColor: "#5E81BB",
      },

      // screens: {
      //   lg: { max: "1920px" },

      //   md: { max: "1024px" },

      //   sm: { max: "375px" },
      // },
      // fontFamily: {
      //   Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
