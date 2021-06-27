module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      navy: '#232946',
      darknavy: '#232323',
      beige1: '#fffffe',
      beige2: '#f8f5f2',
      babypurple: '#b8c1ec',
      babypink: '#feefe8',
      pink: '#eebbc3',
      orange: '#f25f4c',
      purple: '#7f5af0',
      indigo: '#121629',
    },
    extend: {
      fontFamily: {
        cursive: ['ChristmasClassically'],
      },
      borderWidth: {
        6: '6px',
      },
      height: {
        '80vh': '80vh',
      },
      inset: {
        26: '6.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
