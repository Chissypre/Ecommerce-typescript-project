/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amberLight: '#FBEBB5',
        perlColor: '#FAF4F4',
        textColorGrey: '#9F9F9F',
        amberLight2: '#FFF9E5',
      },
    },
  },
  plugins: [],
}