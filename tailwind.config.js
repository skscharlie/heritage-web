/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4A3525",
        "background-light": "#F4EFE6",
        "background-dark": "#221810",
        "surface": "#EBE3D5",
        "surface-dark": "#2A1E17",
        "text-main": "#2A1E17",
        "text-main-dark": "#F4EFE6",
        "muted": "#8C7762",
        "accent": "#B86A3D"
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "body": ["Lora", "serif"],
        "ui": ["Inter", "sans-serif"]
      },
      spacing: {
        "base": "8px",
        "md": "16px",
        "lg": "32px",
        "xl": "48px"
      },
      borderRadius: {
        "none": "0px"
      }
    },
  },
  plugins: [],
}
