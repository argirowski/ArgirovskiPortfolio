import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavClick }) => {
  return (
    <Navbar variant="dark" fixed="top" className="shadow navbar-custom">
      <Container>
        <Navbar.Brand
          as="button"
          type="button"
          className="fw-bold fs-3 d-flex align-items-center navbar-brand text-navbar-brand"
          onClick={() => onNavClick("home")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faUser} className="me-2 navbar-user-icon" />
          Gjorgji Argirovski
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link
            id="nav-home"
            as="button"
            type="button"
            onClick={() => onNavClick("home")}
            className={`me-3 fs-5 text-primary${
              activeSection === "home" ? " active" : ""
            }`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            id="nav-portfolio"
            as="button"
            type="button"
            onClick={() => onNavClick("portfolio")}
            className={`me-3 fs-5${
              activeSection === "portfolio" ? " active" : ""
            }`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            id="nav-resume"
            as="button"
            type="button"
            onClick={() => onNavClick("resume")}
            className={`me-3 fs-5${
              activeSection === "resume" ? " active" : ""
            }`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            id="nav-contact"
            as="button"
            type="button"
            onClick={() => onNavClick("contact")}
            className={`fs-5${activeSection === "contact" ? " active" : ""}`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
