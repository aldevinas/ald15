module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: "class",
  theme: {
    fontFamily: {
      'firaSans': ['Fira Sans Condensed'],
     },
     boxShadow:{
      'custom-light':"0 0 8px #313131",
      'custom-dark':"5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
     },
    extend: {
      colors: {
        indigo: {
          light: '#415D43',
          DEFAULT: '#111D13',
          dark: '#023047',
        },
        dark:{
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"]
    },
  },
  plugins: [],
};
