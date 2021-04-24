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
        "new-gray": "#5d5d5d",
        "new-dark-gray": "#353535",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
