/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#DB4444"
       },
       screens:{
        "mobiles":"320px",
        "mobilem":"375px",
        "mobilel":"425px",
        "tablet":"768px",
        "laptop":"1024px",
        "laptop":"1440px",
        
  
       }
    },
  },
  plugins: [],
}

