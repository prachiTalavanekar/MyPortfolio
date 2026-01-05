/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'dark-navy': '#090040',      // Dark navy blue
        'purple-blue': '#471396',    // Purple-blue
        'pure-white': '#ffffff',     // Pure white
        'pure-black': '#000000',     // Pure black
        
        // Theme mappings
        primary: '#090040',          // Dark navy as primary
        secondary: '#471396',        // Purple-blue as secondary
        background: '#000000',       // Black background
        surface: '#090040',          // Dark navy for cards/surfaces
        accent: '#471396',           // Purple-blue for accents
        text: '#ffffff',             // White text
        'text-muted': '#B8B8B8',     // Muted white text
        border: '#471396'            // Purple-blue borders
      }
    },
  },
  plugins: [],
}