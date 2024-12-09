/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourGummy: ['"Sour Gummy"', 'sans-serif'], // Add "Sour Gummy" font
      },
      fontWeight: {
        // Optionally extend font weights if you need specific values like 100, 300, etc.
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      fontVariationSettings: {
       
        sourGummy: {
          'wdth': 100, // Set the default width variation
        },
        screens: {
          'xxs': '310px',
          'xs': '420px',    // Extra small screens
          '3xl': '1920px',  // Larger screens for very wide displays
        },
    },
  },
  },
  plugins: [],
}