module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { "White": "#FFFFFF", "Gainsboro": "#E0E0E0", "Silver": "#C0C0C0", "Quick-Silver": "#A1A1A1", "Gray-Web": "#818181", "Granite-Gray": "#626262", "Onyx": "#424242" }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
