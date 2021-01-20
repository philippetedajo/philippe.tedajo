module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#e5e5e5",
      secondary: "#000",
      third: "#00b894",
      fourth: "#a1a1aa",
    },
    fontFamily: {
      ddin: ["ddin", "serif"],
      ddinbold: ["ddinbold", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
