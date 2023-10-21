/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./about.html", "./form.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Noto Serif", "serif"],
        para: ["Poppins", "sans-serif"],
        code: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        "primary-500": "#4400FF",
        "primary-450": "#7543FF",
        "primary-400": "#A685FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
