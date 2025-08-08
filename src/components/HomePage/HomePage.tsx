import React from "react";
import "./HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { profileImage, RESUME_PDF_URL } from "../../assets";

interface HomePageProps {
  onNavClick: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavClick }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    onNavClick("contact");
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF_URL;
    link.download = "Gjorgji-Argirovski-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center h-100">
          {/* Left Column - Image */}
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Gjorgji Argirovski"
                className="img-fluid rounded-circle shadow-lg profile-image"
              />
            </div>
          </Col>

          {/* Right Column - Text Content */}
          <Col lg={6}>
            <div className="text-content">
              <h1 className="display-2 fw-bold mb-4">Hi, I'm Gjorgji</h1>
              <p className="lead fs-4 mb-5">
                Full Stack Developer passionate about creating beautiful,
                functional web experiences.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mb-5">
                <Button
                  size="lg"
                  onClick={handleDownloadCV}
                  className="px-4 py-2 fw-semibold home-btn-download"
                >
                  Download CV
                </Button>
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="px-4 py-2 fw-semibold home-btn-contact"
                >
                  Contact
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-5">
                <a
                  href="https://www.linkedin.com/in/gjorgji-argirovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none home-social-linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/argirowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none home-social-github"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
