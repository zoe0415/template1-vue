module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': '1300px',
      },
      backgroundImage: {
        'alyssa': "url('~@/assets/images/alyssa-strohmann-CGXxpcUrhdo-unsplash.jpeg')",
        'footer1': "url('~@/assets/images/footer1.jpeg')",
        'footer2': "url('~@/assets/images/footer2.jpeg')",
        'footer3': "url('~@/assets/images/footer3.jpeg')",
      },
      fontSize: {
        '6vw': '6vw',
      }
    },
    colors: {
      black: {
        DEFAULT: '#000000'
      },
      white: {
        DEFAULT: '#ffffff'
      },
      gray: {
        DEFAULT: '#888'
      },
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
