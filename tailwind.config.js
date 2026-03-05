/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        // Header & footer
        "footer-bg": "#0F172A",
        "footer-text": "#F8FAFC",
        // Nav colors
        "nav-default": "#CBD5E1",
        "nav-hover": "#0F766E",
        "nav-active": "#0F766E",
        "nav-dropdown-border": "#334155",
        // Section backgrounds (alternating)
        "section-bg-a": "#F8FAFC",
        "section-bg-b": "#F1F5F9",
        // Main heading text
        "contact-heading": "#0F172A",
        // Contact card colors
        "contact-card-bg": "#ffffff",
        "contact-card-text": "#475569",
        "contact-card-border": "#E2E8F0",
        // Inline link color
        "contact-link": "#0F766E",
        "contact-link-hover": "#115E59",
        // Badge colors (dates, Full Stack labels)
        "badge-bg": "#F1F5F9",
        "badge-text": "#0F172A",
        // Muted text
        "muted": "#64748B",
        // Accent (icons, links)
        "pill-text": "#0F766E",
        // Pills (skill/tech tags - non-interactive)
        "pill-bg": "#F8FAFC",
        "pill-border": "#CBD5E1",
        // Card hover
        "card-hover-border": "#99F6E4",
        // Home page button variants
        "btn-contact-bg": "#0F766E",
        "btn-contact-hover": "#115E59",
        "btn-secondary-bg": "#1E293B",
        "btn-secondary-text": "#F1F5F9",
        "btn-secondary-hover": "#334155",
      },
      boxShadow: {
        "btn-contact": "0 6px 14px rgba(15,118,110,0.25)",
        "card-hover": "0 4px 12px rgba(15,118,110,0.12)",
        "card-subtle": "0 4px 12px rgba(15,118,110,0.08)",
      },
    },
  },
  plugins: [],
};
