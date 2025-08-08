import React from "react";
import "./HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { profileImage, RESUME_PDF_URL } from "../../assets";
import { HomePageProps } from "../../common/interfaces";
import { handleDownloadCV } from "../../common/utils";

const HomePage: React.FC<HomePageProps> = ({ onNavClick }) => {
  const handleContactClick = () => {
    onNavClick("contact");
  };

  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center h-100">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Gjorgji Argirovski"
                className="img-fluid rounded-circle shadow-lg profile-image"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="text-content">
              <h1 className="display-2 fw-bold mb-4">Hi, I'm Gjorgji</h1>
              <p className="lead fs-4 mb-4">
                I'm a Full Stack Developer who loves building web experiences
                that look great and work even better. Whether it's a slick UI or
                smooth backend logic, I’m all about making the web feel
                effortless.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mb-2">
                <Button
                  size="lg"
                  onClick={() => handleDownloadCV(RESUME_PDF_URL)}
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
