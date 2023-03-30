/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1920px",
      // => @media (min-width: 1920px) { ... }
    },

    fontSize: {
      smPrimary: ["1rem", "1.25rem"], // text-16px, leading-20px
      mdPrimary: ["1.125rem", "1.375rem"], // text-18px, leading-22px
      lgPrimary: ["1.5rem", "1.9rem"], // text-24px, leading-29px
      // "sm-secondary": ["1rem", "1.25rem"],
      mdSecondary: ["0.75rem", "1.18rem"], // text-12px, leading-19px
      lgSecondary: ["1.25rem", "2rem"], // text-20px, leading-32px
      mdTertiary: ["0.875rem", "1.375rem"],
    },

    padding: {
      80: "19.6rem",
    },

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
      // fontFamily: {
      //   Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
