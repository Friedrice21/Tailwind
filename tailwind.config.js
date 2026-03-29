/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
      "Tions":"Tinos",
      
      },
      fontSize:{
       besar:'200px', 
       bintang:'10px',
      },
      backgroundImage: {
        kucing: 'url("Practice/kucing.jpeg")',
        freaky: 'url("practice/freaky.jfif:)',
        OIP: 'url("Practice2/OIP.jfif")',
        man: 'url("Practice 6 filter/Challenge/man.jfif")'
      }
    },
  },
  plugins: [],
}

