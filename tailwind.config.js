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
      }
    },
  },
  plugins: [],
}
/* vim: set et sw=2: */
