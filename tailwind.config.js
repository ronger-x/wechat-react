/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wx: {
          bg: '#EDEDED',
          green: '#07C160',
          text: '#111111',
          grey: '#B2B2B2',
          border: '#E5E5E5',
          light: '#F7F7F7'
        }
      },
      fontFamily: {
        ios: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'panel': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'phone': '0 10px 30px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
