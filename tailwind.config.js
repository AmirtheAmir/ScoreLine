/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        custominline:['Empera-Inline', 'sans-serif'],
        customvintage:['Empera-Inlinevintage', 'sans-serif'],
        customregular:['Empera-Regular', 'sans-serif'],
        customsoft:['Empera-Soft', 'sans-serif'],
        customsoftvintage:['Empera-Softvintage', 'sans-serif'],
        customtext:["Tangerine", "cursive"]
      }
    },
  },
  plugins: [],
}

