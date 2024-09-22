/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        athensGray: 'hsl(220, 14%, 96%)',
        santasGray: 'hsl(258, 7%, 63%)',
        turquoise: 'hsl(180, 66%, 49%)',
        martinique: 'hsl(258, 27%, 26%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

