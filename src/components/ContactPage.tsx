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
                Get In <span className="text-warning">Touch</span>
              </h1>
              <p className="lead fs-4 font-inter">
                I'd love to hear from you. Send me a message and I'll respond as
                soon as possible.
              </p>
            </div>

            <Row className="g-4">
              {/* Contact Information */}
              <Col md={6}>
                <Card className="h-100 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
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
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light mb-0 font-inter">
                          Skopje, Macedonia
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
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light mb-0 font-inter">
                          gjorgji.argirovski@email.com
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
                          +389 XX XXX XXX
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-4">
                      <h6 className="text-warning mb-3 font-poppins">
                        Follow Me
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

              {/* Contact Form */}
              <Col md={6}>
                <Card className="h-100 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      Send Message
                    </h4>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="text-light font-inter">
                              First Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Your first name"
                              className="bg-secondary border-0 text-light"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="text-light font-inter">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Your last name"
                              className="bg-secondary border-0 text-light"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-light font-inter">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-secondary border-0 text-light"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-light font-inter">
                          Subject
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="What's this about?"
                          className="bg-secondary border-0 text-light"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="text-light font-inter">
                          Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Your message here..."
                          className="bg-secondary border-0 text-light"
                        />
                      </Form.Group>

                      <Button
                        variant="warning"
                        size="lg"
                        className="w-100 font-inter fw-semibold"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Form>
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
