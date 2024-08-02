/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blessing: "hsl(0, 0%, 20%)",
        greencolor: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        Grey800: "hsl(0, 0%, 12%)",
        Grey900: "hsl(0, 0%, 8%)",
      },
      heights:{
        128: '30rem',
      },
      screens: {
        sm: "375px",
        lg: "1440px"
      }
     },
  },
  plugins: [],
}
