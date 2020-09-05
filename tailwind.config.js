const ui = require("@tailwindcss/ui");
const defaultTheme = require("tailwindcss/defaultTheme");
const whitelist = [/markdown/, /rich-text/, /primary/, /secondary/];
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/custom-forms");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  dark: "media",
  experimental: "all",
  purge: {
    options: {
      keyframes: true,
      whitelistPatterns: whitelist,
      whitelistPatternsChildren: whitelist
    },
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{mdx,js,jsx,ts,tsx}",
      "./content/**/*.{md,mdx}"
    ]
  },

  theme: {
    typography: {
      default: {
        css: {
          a: {
            color: defaultTheme.colors.pink["600"],
            "&:hover": {
              color: defaultTheme.colors.pink["500"]
            }
          }
        }
      }
    },
    extend: {
      boxShadow: ui().config.theme.boxShadow,
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...ui().config.theme.colors["cool-gray"],
        key: "rgb(0, 112, 243)"
      }
    },
    container: { center: true, padding: "1rem" }
  },

  variants: {
    borderColor: ["responsive", "hover", "group-hover", "focus"],
    borderWidth: ["responsive", "hover", "group-hover", "focus"],
    borderStyle: ["responsive", "hover", "group-hover", "focus"]
  },

  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        ".float-label": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "2rem",
          "& span": {
            position: "absolute",
            transform: "translateX(.75rem)",
            transition: "transform 150ms ease-in-out, color 150ms ease-in-out",
            transformOrigin: "0%",
            fontWeight: 700
          },
          "& input:not(:placeholder-shown) ~ span": {
            transform: "scale(.9) translateX(.75rem) translateY(-2.25rem)"
          },
          "&:focus-within span": {
            transform: "scale(.9) translateX(.75rem) translateY(-2.25rem)",
            color: theme("colors.key")
          }
        }
      });
    },
    function({ addBase }) {
      addBase({
        ".markdown": {
          "img, pre": {
            marginLeft: "-1rem",
            marginRight: "-1rem",
            "@media (min-width: 640px)": {
              marginLeft: "0",
              marginRight: "0"
            }
          }
        }
      });
    },
    typography,
    forms
  ]
};
