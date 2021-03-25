module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1544px",
        "5xl": "1681px",
        "6xl": "1718px",
      },
      spacing: {
        104: "28rem",
        112: "33rem",
      },
      colors: {
        linen: "#FAF0E6",
        seashell: "#FFF5EE",
        bottom: "#D1CCAE",
        middle: "#E0CCA9",
        sun: "#EEE0B1",
        bisque: "#FFE4C4",
        birdarea: "#E8C79E",
        uppermid: "#E8C49A",
        peach: "#FFDAB9",
        peru: "peru",
        top: "#ED9552",
        burlywood: "#DEB887",
        brown: "#8B4513",
        black: "black",
        transparent: "transparent",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      source: ["Source Code Pro", "mono space"],
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
