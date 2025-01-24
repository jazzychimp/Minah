/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["CustomFont"],
      },
      colors: {
        customLightText: "rgb(220, 220, 200)", // Adding custom text color
        customUnavailable: "rgb(74, 74, 74)",
        customDark: "#161E13",
      },
    },
  },
  plugins: [],
};
