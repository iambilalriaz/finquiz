/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCC822',
        secondary: '#333333',
        danger: '#D61A3C',
      },
    },
  },
  plugins: [],
};
