module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // maxWidth: {
    //   // 'xl': '1300px',
    // },
    extend: {
      backgroundImage: {
        'alyssa': "url('~@/assets/alyssa-strohmann-CGXxpcUrhdo-unsplash.jpeg')",
      }
    },
    colors: {
      antiqueBrass: {
        DEFAULT: '#C3835E',
      },
      springWood: {
        DEFAULT: '#F6F1ED',
      }
    },
    minHeight: {
      '850': '850px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
