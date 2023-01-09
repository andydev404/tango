const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      maxWidth: {
        '2xl': '40rem'
      },
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
  plugins: [require('@tailwindcss/forms')]
};
