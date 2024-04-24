/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'app': '29% 70%',

      }
    },
    boxShadow: {
      'card': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    }
  },
  plugins: [],
}