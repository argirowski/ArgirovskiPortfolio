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
        // Navbar accent colors
        "nav-hover": "#4DA3FF",
        "nav-active": "#1E90FF",
        // Contact page background
        "contact-bg": "#f8f8f8",
        // Contact page heading color
        "contact-heading": "#1a1a1a",
        // Contact card colors
        "contact-card-bg": "#ffffff",
        "contact-card-text": "#1a1a1a",
        "contact-card-border": "#e3e6ea",
        // Contact link color
        "contact-link": "#0f2742",
        // Contact link hover color
        "contact-link-hover": "#1d4b7a",
        // Badge colors
        "badge-bg": "#2d2d2d",
        "badge-text": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
