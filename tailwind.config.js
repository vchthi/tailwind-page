/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        custom: "500px",
      },
      spacing: {
        "40-c": "40rem",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};