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
        "footer-bg": "#16213e",
        "footer-text": "#E2E8F0",
        // Navbar accent colors
        "nav-hover": "#7DD3FC",
        "nav-active": "#38BDF8",
        // Main section background
        "contact-bg": "#F1F5F9",
        // Contact page heading color
        "contact-heading": "#333333",
        // Contact card colors
        "contact-card-bg": "#ffffff",
        "contact-card-text": "#333333",
        "contact-card-border": "#DADADA",
        // Contact link color / button color
        "contact-link": "#1f2937",
        // Contact link hover color / button hover
        "contact-link-hover": "#374151",
        // Badge colors (labels: dates, language badges)
        "badge-bg": "#CBD5E1",
        "badge-text": "#333333",
      },
    },
  },
  plugins: [],
};
