const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors:{
        primarycolor:"#010a5e",
        primaryColorLight:"#010d78",
        secondaryColor:"#FFCC00",
        paragraphColor:"#c0c0c0",
        whiteColor:"#fff",
        blackColor:"#000",
        greenColor:"#007936",
        redColor:"#cc3433",
        darkColor:"#000",
        darklighColor:"#171717",
      },
      keyframes: {
          move:{
            "50%" : {transform : "translateY(1rem)" }
          }
      },
      animation:{
        "movingY": "move 2s linear infinite"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container:{
      center:true,
      padding:{
        Default:"1rem",
        sm:"1.5rem"
      }
    }
  },
  fontFamily:{
    Oswald:["oswand", "sans-serif"],
    dmsans:["DM Sans", "sans-serif" ]

  },
  plugins: [],
};
