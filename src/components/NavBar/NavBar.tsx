import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavBarProps } from "../../common/interfaces";
import MobileMenuHamburger from "../MobileMenuHamburger/MobileMenuHamburger";

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavClick }) => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-footer-bg text-footer-text py-6 h-20">
        <div className="flex items-center justify-between px-4 max-w-6xl mx-auto relative">
          {/* Left side - Brand */}
          <button
            type="button"
            className="font-bold text-2xl md:text-3xl flex items-center bg-transparent border-0 cursor-pointer text-footer-text hover:text-nav-hover hover:opacity-80 transition-colors duration-150"
            onClick={() => onNavClick("home")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Gjorgji Argirovski
          </button>

          {/* Right side - Navigation items (hidden on small screens) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-home"
              type="button"
              onClick={() => onNavClick("home")}
              className={`text-base md:text-lg font-semibold px-3 md:px-4 py-1 md:py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/50 hover:text-nav-hover ${
                activeSection === "home"
                  ? "text-nav-active"
                  : "text-footer-text"
              }`}
            >
              Home
            </button>
            <button
              id="nav-portfolio"
              type="button"
              onClick={() => onNavClick("portfolio")}
              className={`text-base md:text-lg font-semibold px-3 md:px-4 py-1 md:py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/50 hover:text-nav-hover ${
                activeSection === "portfolio"
                  ? "text-nav-active"
                  : "text-footer-text"
              }`}
            >
              Portfolio
            </button>
            <button
              id="nav-resume"
              type="button"
              onClick={() => onNavClick("resume")}
              className={`text-base md:text-lg font-semibold px-3 md:px-4 py-1 md:py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/50 hover:text-nav-hover ${
                activeSection === "resume"
                  ? "text-nav-active"
                  : "text-footer-text"
              }`}
            >
              Resume
            </button>
            <button
              id="nav-contact"
              type="button"
              onClick={() => onNavClick("contact")}
              className={`text-base md:text-lg font-semibold px-3 md:px-4 py-1 md:py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/50 hover:text-nav-hover ${
                activeSection === "contact"
                  ? "text-nav-active"
                  : "text-footer-text"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile: hamburger button (shown on screens < sm) */}
          <div className="sm:hidden">
            <MobileMenuHamburger
              activeSection={activeSection}
              onNavClick={onNavClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
