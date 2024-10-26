/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        fall: 'fall 3s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      // Custom meteor styles
      spacing: {
        meteor: '2px', // Adjust size as needed
      },
    },
  },
  plugins: [],
}
