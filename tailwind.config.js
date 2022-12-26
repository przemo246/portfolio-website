/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.875rem",
      "4xl": "2.441rem",
      "5xl": "2.8125rem",
      "6xl": "3.4375rem",
    },
    extend: {
      fontFamily: {
        base: "Outfit, sans-serif",
      },
      colors: {
        black: "#111",
        darkGrey: "#555",
        lightGrey: "#b5b5b5",
        orangeHighlight: "#ff9700",
        lightGreen: "#55c57a",
        lightGreen1: "#55c57a",
        darkGreen: "#25A77C",
      },
      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "4xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "5xl":
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
      dropShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "4xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      animation: {
        text: "text 8s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
