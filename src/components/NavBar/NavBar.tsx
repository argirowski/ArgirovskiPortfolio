import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavBarProps } from "../../common/interfaces";

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavClick }) => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-footer-bg text-footer-text py-6">
        <div className="flex items-center justify-between px-4 max-w-6xl mx-auto">
          {/* Left side - Brand */}
          <button
            type="button"
            className="font-bold text-3xl flex items-center bg-transparent border-0 cursor-pointer text-footer-text hover:opacity-80 transition-opacity duration-200"
            onClick={() => onNavClick("home")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Gjorgji Argirovski
          </button>

          {/* Right side - Navigation items */}
          <div className="flex items-center gap-4">
            <button
              id="nav-home"
              type="button"
              onClick={() => onNavClick("home")}
              className={`text-lg font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-footer-text/50 hover:bg-footer-text/10 ${
                activeSection === "home"
                  ? "bg-footer-text/20 text-footer-bg"
                  : "text-footer-text"
              }`}
            >
              Home
            </button>
            <button
              id="nav-portfolio"
              type="button"
              onClick={() => onNavClick("portfolio")}
              className={`text-lg font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-footer-text/50 hover:bg-footer-text/10 ${
                activeSection === "portfolio"
                  ? "bg-footer-text/20 text-footer-bg"
                  : "text-footer-text"
              }`}
            >
              Portfolio
            </button>
            <button
              id="nav-resume"
              type="button"
              onClick={() => onNavClick("resume")}
              className={`text-lg font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-footer-text/50 hover:bg-footer-text/10 ${
                activeSection === "resume"
                  ? "bg-footer-text/20 text-footer-bg"
                  : "text-footer-text"
              }`}
            >
              Resume
            </button>
            <button
              id="nav-contact"
              type="button"
              onClick={() => onNavClick("contact")}
              className={`text-lg font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-footer-text/50 hover:bg-footer-text/10 ${
                activeSection === "contact"
                  ? "bg-footer-text/20 text-footer-bg"
                  : "text-footer-text"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
