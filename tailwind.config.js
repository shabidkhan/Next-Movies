/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:false, //or "media" or "class"
  theme: {
    extend: {
      screens:{
        "3xl":"2000px",
        "4xl":"2500px",
        
      }
    },
  },
  variants:{
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
