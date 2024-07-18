/** @type {import('tailwindcss').Config} */ // Specify the type of Tailwind CSS configuration

// Tailwind CSS configuration object
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify the files where Tailwind should look for classes
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"], // Add Antonio font
        spartan: ["Spartan", "sans-serif"], // Add Spartan font
      },
      colors: {
        mygray: "#454545", // Define custom colors, 'mygray' with hex value '#454545'
        accent: "#bf3eff", // Define an accent color with hex value '#bf3eff'
      },
    },
  },
  plugins: [], // Optionally specify Tailwind plugins to include
};