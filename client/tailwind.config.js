module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "5xl": "1681px",
      },
      spacing: {
        104: "28rem",
        112: "33rem",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      source: ["Source Code Pro", "mono space"],
    },
    colors: {
      linen: "#FAF0E6",
      seashell: "#FFF5EE",
      middle: "#E0CCA9",
      sun: "#EEE0B1",
      bisque: "#FFE4C4",
      uppermid: "#E8C49A",
      peach: "#FFDAB9",
      peru: "peru",
      top: "#ED9552",
      burlywood: "#DEB887",
      brown: "#8B4513",
      transparent: "transparent",
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
