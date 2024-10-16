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
      width: {
        '400': '400px',
        '500': '500px',
      },
      height: {
        '400': '400px',
        '500': '500px',
      },
    },
  },
  plugins: [],
}
