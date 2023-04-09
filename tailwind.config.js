/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cdark: '#2a2b2a',
        clight: '#FBFBF2',
        cblue: '#52B2CF',
        cred: '#ff5964',
        cyellow: '#fdca40',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html': { fontSize: "20px" },
      })
    }),
  ],
}

