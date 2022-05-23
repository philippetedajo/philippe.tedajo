module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e5e5e5",
        secondary: "#0e121a",
        third: "#5eead4",
        fourth: "#a1a1aa",
      },
    },
    fontFamily: {
      cairo: ["Cairo", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
