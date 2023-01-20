module.exports = {
  content: ["./src/**/*.{js, jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        circle: "50%",
      },
      boxShadow: {
        main: "0px 0px 6px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
