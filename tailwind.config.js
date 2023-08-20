/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Adjust the breakpoints to your desired values
      'sm': '640px',    // Small screens (default)
      'md': '770px',    // Medium screens
      'lg': '1024px',   // Large screens
      'xl': '1280px',   // Extra large screens
    },
  },
  plugins: [],
}