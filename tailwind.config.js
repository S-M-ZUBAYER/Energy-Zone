/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4cffb7",

          "secondary": "#2fc632",

          "accent": "#827be5",

          "neutral": "#2E263B",

          "base-100": "#294656",

          "info": "#9EC8EB",

          "success": "#17A17A",

          "warning": "#E6BA0A",

          "error": "#F9628D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
