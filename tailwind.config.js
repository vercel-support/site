const fancy = require("tailwindcss-plugin-fancy")
// const customForms = require('@tailwindcss/custom-forms')
const defaultTheme = require("tailwindcss/defaultTheme")
const whitelist = [/markdown/, /rich-text/]

module.exports = {
  purge: {
    options: {
      keyframes: true,
      whitelistPatterns: whitelist,
      whitelistPatternsChildren: whitelist,
    },
    content: ["./components/**/*.js", "./pages/**/*.js", "./pages/**/*.mdx"],
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        key: "rgb(0, 112, 243)",
      },
    },
    container: { center: true, padding: "1rem" },
  },

  variants: {},

  plugins: [
    function ({ addBase }) {
      addBase({
        ".markdown": {
          "img, pre": {
            marginLeft: "-1rem",
            marginRight: "-1rem",
            "@media (min-width: 640px)": {
              marginLeft: "0",
              marginRight: "0",
            },
          },
        },
      })
    },
    // customForms
    fancy,
  ],
}
