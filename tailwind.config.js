module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Mulish", "Avenir", "Helvetica", "Arial", "sans-serif"],
      title: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "new-blue": "#334dc6",
        "new-blue-hover": "#233589",
        salmon: "#f93b55",
        "green-new": "#288362",
        "light-yellow": "#fffbed",
        "light-pink": "#feebee",
        "light-blue": "#ebedf9",
        "chatbox":"#FF585B"
      },
      lineHeight: {
        12: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
