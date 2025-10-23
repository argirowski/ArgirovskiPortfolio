import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer: React.FC = () => (
  <>
    <footer className="bg-footer-bg text-footer-text h-20">
      <div className="flex justify-center items-center gap-1 h-full">
        <FontAwesomeIcon icon={faCopyright} className="text-sm" />
        <span className="text-base font-semibold tracking-wider">
          {new Date().getFullYear()} Gjorgji Argirovski.
        </span>
      </div>
    </footer>
  </>
);

export default Footer;
