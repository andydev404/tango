const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        brand: {
          50: '#fffbdb',
          100: '#fff2ad',
          200: '#fee97d',
          300: '#fee04b',
          400: '#fed71b',
          500: '#e4bd01',
          600: '#b29300',
          700: '#7f6900',
          800: '#4c3f00',
          900: '#1b1500'
        }
      }
    }
  },
  plugins: []
};
