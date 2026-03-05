import React, { useState, useRef, useEffect } from "react";
import { MobileMenuHamburgerProps } from "../../common/interfaces";

const MobileMenuHamburger: React.FC<MobileMenuHamburgerProps> = ({
  activeSection,
  onNavClick,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md text-nav-default hover:text-nav-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg transition-colors duration-150"
      >
        {/* simple hamburger icon */}
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-footer-bg border border-nav-dropdown-border rounded-md shadow-lg py-2 z-50">
          <button
            className={`w-full text-left px-4 py-2 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-inset transition-colors duration-150 ${
              activeSection === "home" ? "text-nav-active" : "text-nav-default"
            } hover:text-nav-hover`}
            onClick={() => {
              onNavClick("home");
              setOpen(false);
            }}
          >
            Home
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-inset transition-colors duration-150 ${
              activeSection === "portfolio"
                ? "text-nav-active"
                : "text-nav-default"
            } hover:text-nav-hover`}
            onClick={() => {
              onNavClick("portfolio");
              setOpen(false);
            }}
          >
            Portfolio
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-inset transition-colors duration-150 ${
              activeSection === "resume"
                ? "text-nav-active"
                : "text-nav-default"
            } hover:text-nav-hover`}
            onClick={() => {
              onNavClick("resume");
              setOpen(false);
            }}
          >
            Resume
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-inset transition-colors duration-150 ${
              activeSection === "contact"
                ? "text-nav-active"
                : "text-nav-default"
            } hover:text-nav-hover`}
            onClick={() => {
              onNavClick("contact");
              setOpen(false);
            }}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenuHamburger;
