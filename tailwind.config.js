/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': '200px',
        'xs': '340px',
        'sm': '380px',
        'md': '568px',
'lg': '770px',
'xl': '1025px',
'2xl': '1442px',
'3xl': '1650px',
'4xl': '2050px',
'large': '2560px',
},
    },
  },
  plugins: [],
}
