module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      'black-lighter': '#16161a',
      'black-dark': '#010101',
      'white-dark': '#fffffe',
      green: '#2cb67d',
      purple: '#7f5af0',
      gray: '#72757e',
      'gray-light': '#94a1b2',
    },
    fontFamily: {
      sans: ['Maven Pro', 'sans-serif'],
    },
    extend: {
      borderWidth: {
        6: '6px',
      },
      height: {
        '80vh': '80vh',
        'fit-content': 'fit-content',
      },
      inset: {
        26: '6.5rem',
      },
      maxWidth: {
        400: '400px',
      },
      translate: {
        '100vw': '100vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
