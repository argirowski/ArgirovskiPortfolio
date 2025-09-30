import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer: React.FC = () => (
  <footer className="footer-section text-center py-4">
    <div className="container">
      <span className="footer-text">
        <FontAwesomeIcon icon={faCopyright} className="me-1" />
        {new Date().getFullYear()} Gjorgji Argirovski.
      </span>
    </div>
  </footer>
);

export default Footer;
