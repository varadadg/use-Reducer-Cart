export default {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./public/index.html"],
  theme: {
    screens: {
      xs: "100px",
      sm: "515px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      now: ["Now", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        flash: {
          "25%, 40%": { opacity: "0" },
          "50%": { opacity: "1" },
          "75%": { opacity: "1" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 2s forwards",
        flash: "flash 2s forwards",
        fadeIn: "fadeIn 2s forwards",
      },

      colors: {
        wine: "#362257",
        crown: "#D5C0FF",
      },
    },
  },
  plugins: [],
};
