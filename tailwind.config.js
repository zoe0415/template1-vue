module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: "1300px",
      },
      backgroundImage: {
        alyssa: "url('~@/assets/images/alyssa-strohmann-CGXxpcUrhdo-unsplash.jpeg')",
        footer1: "url('~@/assets/images/footer1.jpeg')",
        footer2: "url('~@/assets/images/footer2.jpeg')",
        footer3: "url('~@/assets/images/footer3.jpeg')",
        blogBG: "url('~@/assets/images/blogBG.jpeg')",
        blog1: "url('~@/assets/images/blog1.jpeg')",
        blog2: "url('~@/assets/images/blog2.jpeg')",
        blog3: "url('~@/assets/images/blog3.jpeg')",
        contactBG: "url('~@/assets/images/contactBG.jpg')",
        blogCategories1: "url('~@/assets/images/blogCategories1.jpg')",
      },
      width: {
        "9.5/10": "95%",
      },
      fontSize: {
        "6vw": "6vw",
      },
      maxHeight: {
        500: "500px",
      },
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      gray: {
        light: "#dddddd",
        DEFAULT: "#888",
      },
      antiqueBrass: {
        DEFAULT: "#C3835E",
      },
      springWood: {
        DEFAULT: "#F6F1ED",
      },
      red: {
        DEFAULT: "#dc3232",
      },
    },
    minHeight: {
      500: "500px",
      850: "850px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
