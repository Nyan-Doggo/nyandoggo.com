/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'forest-green': {
        '50': '#f2fbea',
        '100': '#e2f5d2',
        '200': '#c6ecaa',
        '300': '#a2de78',
        '400': '#80ce4d',
        '500': '#61b32f',
        '600': '#498e22',
        '700': '#3f7821',
        '800': '#31571d',
        '900': '#2b4a1d',
        '950': '#14280b',
      },
      'mine-shaft': {
        '50': '#f7f7f7',
        '100': '#e3e3e3',
        '200': '#c8c8c8',
        '300': '#a4a4a4',
        '400': '#818181',
        '500': '#666666',
        '600': '#515151',
        '700': '#434343',
        '800': '#383838',
        '900': '#2e2e2e',
        '950': '#1a1a1a',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
