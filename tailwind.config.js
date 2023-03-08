/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors : {
        buttonColor : '#e2224e',
        color1 : '#e2224e',
        discovery : '#EAEDEB',
        color3 : '#28303c',
        color4 : '#1b2433',
        roi : "#FAECEF",
        color5 : '#'
      },
      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
