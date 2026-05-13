/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ff6f4d",
          dark: "#f15c39",
          soft: "#fff4ee",
          softer: "#fffaf7"
        },
        ink: {
          DEFAULT: "#1a1d22",
          muted: "#4a5260"
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Hiragino Sans",
          "Yu Gothic",
          "Meiryo",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
