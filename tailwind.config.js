/** @type {import('tailwindcss').Config} */ // Specify the type of Tailwind CSS configuration

// Tailwind CSS configuration object
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify the files where Tailwind should look for classes
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["Spartan", "sans-serif"], 
      },
      colors: {
        mercury: "#419EBB", 
        venus: "#EDA249",
        earth: "#6C2DD4",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1DC1A1",
        neptune: "#2D68F0",
      },
    },
  },
  plugins: [], // Optionally specify Tailwind plugins to include
};