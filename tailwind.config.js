/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        neutral: {
          black: "#050505",
          "jungle-black": "#1F1F1F",
          "thunder-black": "#2D2D2D",
          "charcoal-black": "#3A3A3A",
          grey: "#757575",
          "light-grey": "#E9E9E9",
          white: "#FFFFFF",
          "white-smoke": "#F4F4F4",
        },
        primary: {
          purple: "#A445ED",
          red: "#FF5252",
        },
      },
    },
  },
  plugins: [],
};
