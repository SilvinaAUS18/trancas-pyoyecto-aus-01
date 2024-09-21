import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/componentsFronend/**/*.{js,ts,jsx,tsx,mdx}',

    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/panel/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  theme: {
    screens:{
      sm:"480px",
      md: "768px",
      lg:"1224px"
    },
    extend: {
      colors: {
        primaryColor:"#005683",
        primaryColorLight:"#00A3E4" ,
        secondaryColor:"#121d1e",
        paragraphColor: "#888",
        whiteColor:"#d3d3d3"
      },
    },
    container: {
      center:true,
      padding:{
        DEFAULT:"0rem",
      }
    }
  },  plugins: [],
}
export default config