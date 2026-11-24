import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F6F2EB",
          light: "#FAF7F2",
          dark: "#EFE9DF",
        },
        espresso: {
          DEFAULT: "#241E1A",
          dark: "#1A1512",
          light: "#332B25",
        },
        copper: {
          DEFAULT: "#A87556",
          light: "#BA8B6D",
          dark: "#8C5E42",
        },
        sand: {
          DEFAULT: "#DED3C5",
          light: "#EAE2D8",
          dark: "#CFC1AF",
        },
        charcoal: {
          DEFAULT: "#34302D",
          muted: "#68615C",
          light: "#8A827C",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Manrope'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
