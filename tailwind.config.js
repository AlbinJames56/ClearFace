/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      fuchsia: "#E74B7E",
      navy_blue: "blueviolet",
      
      blue: "blue",
      meroon: "#980877",
    },
    extend: {},
  },
  plugins: [],
};
