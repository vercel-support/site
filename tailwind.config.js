const ui = require("@tailwindcss/ui");
const fancy = require("tailwindcss-plugin-fancy");
const whitelist = [/markdown/, /rich-text/, /primary/, /secondary/];
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  dark: "media",
  experimental: "all",
  purge: {
    options: {
      keyframes: true,
      whitelistPatterns: whitelist,
      whitelistPatternsChildren: whitelist,
    },
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{mdx,js,jsx,ts,tsx}",
      "./content/**/*.{md,mdx}",
    ],
  },

  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme("colors.blue.600]"),
            "&:hover": {
              color: theme("colors.blue.500"),
            },
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    container: { center: true, padding: "1rem" },
  },

  variants: {},

  plugins: [
    function ({ addComponents, theme }) {
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
            fontWeight: 700,
          },
          "& input:not(:placeholder-shown) ~ span": {
            transform: "scale(.9) translateX(.75rem) translateY(-2.25rem)",
          },
          "&:focus-within span": {
            transform: "scale(.9) translateX(.75rem) translateY(-2.25rem)",
            color: theme("colors.key"),
          },
        },
      });
    },
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
      });
    },
    ui,
    // fancy,
  ],
};
