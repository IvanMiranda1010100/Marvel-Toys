// tailwind.config.js

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Archivos de tu proyecto que Tailwind debería procesar
    
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" ,

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
