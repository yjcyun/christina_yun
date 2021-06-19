module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      navy: '#232946',
      beige1: '#fffffe',
      beige2: '#f8f5f2',
      babypurple: '#b8c1ec',
      pink: '#eebbc3',
      indigo: '#121629',
    },
    extend: {
      fontFamily: {
        cursive: ['ChristmasClassically'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
