/** @type {import('tailwindcss').Config} */

module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      screens: {
        "xs" : "475px",
      },
      colors: {
        "backcolor":"#f5f7f9",
        "color1" : "#ffc522",
        "color2" : "#ff8000",
        "color3" : "#ffffff",
        "color4" : "#486072",
        "color5" : "#a7afb4",
        "color6" : "#231f20",
        "color7" : "#fafafa",
        "color8" : "#173a47",
        "color9" : "#f29e1d",
        "color10": "#fbe801"
      },
    },
  },
  plugins: [],
}