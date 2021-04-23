module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "new-blue": "#334dc6",
        "new-blue-hover": "#233589",
        salmon: "#f93b55",
        "green-new": "#288362",
        gray: "#5d5d5d",
        "dark-gray": "#353535",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
