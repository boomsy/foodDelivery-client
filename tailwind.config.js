/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.js",   
     "./App.{js,jsx,ts,tsx}", 
     "./src/**/*.{js,js}", 
     "./screens/**/*.{js,jsx,ts,tsx}", 
     "./components/**/*.{js,jsx,ts,tsx}" 
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

