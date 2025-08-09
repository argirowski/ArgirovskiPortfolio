import React from "react";
import "./HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { profileImage, RESUME_PDF_URL } from "../../assets";
import { HomePageProps } from "../../common/interfaces";
import { handleDownloadCV } from "../../common/utils";

const HomePage: React.FC<HomePageProps> = ({ onNavClick }) => {
  return (
    <section className="home-page-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center h-100">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Gjorgji Argirovski"
                className="img-fluid rounded-circle profile-image"
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
                  className="px-4 py-2 fw-semibold home-btn-contact"
                >
                  <FontAwesomeIcon icon={faFileArrowDown} className="me-2" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  as="a"
                  href="mailto:gjorgji.argirovski@gmail.com"
                  className="px-4 py-2 fw-semibold home-btn-contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Contact
                </Button>
              </div>

              <div className="d-flex flex-column flex-md-row gap-3 mb-5 justify-content-center justify-content-lg-start">
                <Button
                  size="lg"
                  as="a"
                  href="https://www.linkedin.com/in/gjorgji-argirovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 fw-semibold home home-btn-contact"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  as="a"
                  href="https://github.com/argirowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 fw-semibold home home-btn-contact"
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
