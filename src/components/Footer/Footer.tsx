import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer-section text-center py-4">
    <div className="container">
      <span className="footer-text">
        © {new Date().getFullYear()} Gjorgji Argirovski. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
