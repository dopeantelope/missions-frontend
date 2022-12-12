/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#090F0F",
        brightTeal: "#26D6AD",
        darkGreen: "#0A3831",
        ming: "#577574",
        midGreen: "#1A6053"
      }
    },
  },
  plugins: [],
}
