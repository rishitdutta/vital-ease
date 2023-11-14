/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.jpg')",
      },
      colors: {
        "mygreen": "#2B6731",
      },
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}
/* vim: set et sw=2: */
