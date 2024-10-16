/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        timmy: ['Timmy', 'sans-serif'],
      },
      screens: {
        sm: "400px", // Custom small screen starting from 450px
      },

    },
  },
  plugins: [],
}
