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
        /* Layout */
        "footer-bg": "#0F172A",
        "footer-text": "#F8FAFC",
        "section-bg-a": "#F8FAFC",
        "section-bg-b": "#F1F5F9",

        /* Nav */
        "nav-default": "#CBD5E1",
        "nav-hover": "#0F766E",
        "nav-active": "#0F766E",
        "nav-dropdown-border": "#334155",

        /* Text */
        "contact-heading": "#0F172A",
        "contact-card-text": "#475569",
        "muted": "#64748B",

        /* Surfaces - cards */
        "contact-card-bg": "#ffffff",
        "contact-card-border": "#E2E8F0",
        "card-hover-border": "#99F6E4",

        /* Surfaces - pills */
        "pill-bg": "#F8FAFC",
        "pill-border": "#CBD5E1",

        /* Surfaces - badges */
        "badge-bg": "#F1F5F9",
        "badge-text": "#0F172A",

        /* Interactive - links & accent */
        "contact-link": "#0F766E",
        "contact-link-hover": "#115E59",
        "pill-text": "#0F766E",

        /* Interactive - buttons */
        "btn-contact-bg": "#0F766E",
        "btn-contact-hover": "#115E59",
        "btn-secondary-bg": "#1E293B",
        "btn-secondary-text": "#F1F5F9",
        "btn-secondary-hover": "#334155",
      },
      boxShadow: {
        "card-subtle": "0 4px 12px rgba(15,118,110,0.08)",
        "card-hover": "0 4px 12px rgba(15,118,110,0.12)",
        "btn-contact": "0 6px 14px rgba(15,118,110,0.25)",
      },
    },
  },
  plugins: [],
};
