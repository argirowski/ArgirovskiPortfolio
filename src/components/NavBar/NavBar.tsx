import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavClick }) => {
  const location = useLocation();

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow navbar-custom"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 d-flex align-items-center navbar-brand text-navbar-brand"
          onClick={() => onNavClick("home")}
        >
          <FontAwesomeIcon icon={faUser} className="me-2 navbar-user-icon" />
          Gjorgji Argirovski
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => onNavClick("home")}
              className={
                location.pathname === "/"
                  ? "text-primary fw-bold me-3 fs-5"
                  : "me-3 fs-5"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              onClick={() => onNavClick("portfolio")}
              className={
                location.pathname === "/portfolio"
                  ? "text-primary fw-bold me-3 fs-5"
                  : "me-3 fs-5"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => onNavClick("resume")}
              className={
                location.pathname === "/resume"
                  ? "text-primary fw-bold me-3 fs-5"
                  : "me-3 fs-5"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => onNavClick("contact")}
              className={
                location.pathname === "/contact"
                  ? "text-primary fw-bold fs-5"
                  : "fs-5"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
