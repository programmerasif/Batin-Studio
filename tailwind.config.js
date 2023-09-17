/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    screens:{
      sm:'480px', 
      md:'768px',
      lg:'972px',
      xl:'1440px',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}

