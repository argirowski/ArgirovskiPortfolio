/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        // Inter as global default for body text
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        // Outfit for headings
        heading: [
          "Outfit",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Keep JetBrains for code if needed
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Footer colors extracted from existing design
        "footer-bg": "#1a1a1a",
        "footer-text": "#e5e5e5",
      },
    },
  },
  plugins: [],
};
