/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
      './pages/**/*.{html,js,jsx}',
      "./src/**/*{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['InterVariable', ...defaultTheme.fontFamily.sans]
        },
    },
  },
  plugins: [],
}

