/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7B1E2D",
          dark: "#5C1622",
          light: "#9A2B3C",
        },
        gold: {
          DEFAULT: "#C4A35A",
          dark: "#A6853D",
          light: "#E6D3A3",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F3EBE0",
        },
        ink: {
          DEFAULT: "#2C1810",
          muted: "#5C4A3A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(44, 24, 16, 0.18)",
      },
    },
  },
  plugins: [],
};
