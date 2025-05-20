/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E",
        secondary: "#A89F91",
        alternate: "#3A4A59",
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}