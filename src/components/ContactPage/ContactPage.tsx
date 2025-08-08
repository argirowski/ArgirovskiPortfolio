import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ContactPage: React.FC = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        backgroundColor: "#F9FAFB",
        color: "#1F2937",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h1 className="display-3 fw-bold mb-4 font-poppins">
                Let's get in touch
              </h1>
              <p className="lead fs-4 font-inter">
                I'd love to hear from you. Send me a message and I'll respond as
                soon as possible.
              </p>
            </div>

            <Row className="g-4">
              {/* Contact Information */}
              <Col md={12}>
                <Card
                  className="h-100 border-secondary"
                  style={{ backgroundColor: "#1E1E2F" }}
                >
                  <Card.Body className="p-4">
                    <h4 className="text-light mb-4 font-poppins">
                      Contact Information
                    </h4>

                    <div className="mb-3 d-flex align-items-center">
                      <div className="me-3">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light mb-0 font-inter">
                          gjorgji.argirovski@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                      <div className="me-3">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light mb-0 font-inter">
                          +389 78 418 844
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-4">
                      <h6 className="text-light mb-3 font-poppins">
                        Follow me on:
                      </h6>
                      <div className="d-flex gap-3">
                        <Button
                          variant="outline-warning"
                          size="sm"
                          href="https://linkedin.com/in/your-profile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2"
                        >
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          href="https://github.com/your-username"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2"
                        >
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
