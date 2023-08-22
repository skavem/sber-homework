const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-core-text-primary": "#292929",
      },
      fontFamily: {
        sans: ["SB Sans Text", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
