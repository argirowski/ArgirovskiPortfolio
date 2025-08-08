import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const ResumePage: React.FC = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "50px",
        backgroundColor: "#F9FAFB",
        color: "#1F2937",
      }}
    >
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="text-center mb-4">
              <h1 className="display-3 fw-bold mb-3 font-poppins">
                My <span className="text-warning">Resume</span>
              </h1>
              <p className="lead fs-4 font-inter mb-4">
                Full Stack Developer with expertise in modern web technologies
              </p>
              <Button
                variant="warning"
                size="lg"
                className="font-inter fw-semibold px-4 py-2"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="me-2"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Download PDF
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              {/* Left Column */}
              <Col lg={8}>
                {/* Experience Section */}
                <Card className="mb-4 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h3 className="text-warning mb-4 font-poppins">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="me-2"
                      >
                        <path d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M10,4V6H14V4H10Z" />
                      </svg>
                      Work Experience
                    </h3>

                    {/* Job 1 */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Senior Full Stack Developer
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            Tech Company Inc.
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono">
                          2022 - Present
                        </Badge>
                      </div>
                      <ul className="text-light font-inter">
                        <li>
                          Developed and maintained web applications using React,
                          Node.js, and TypeScript
                        </li>
                        <li>
                          Led a team of 3 developers in building scalable
                          microservices architecture
                        </li>
                        <li>
                          Improved application performance by 40% through code
                          optimization
                        </li>
                        <li>
                          Collaborated with cross-functional teams to deliver
                          high-quality software solutions
                        </li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Frontend Developer
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            Digital Solutions Ltd.
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono">
                          2020 - 2022
                        </Badge>
                      </div>
                      <ul className="text-light font-inter">
                        <li>
                          Built responsive web applications using React and
                          modern CSS frameworks
                        </li>
                        <li>
                          Implemented RESTful APIs integration for dynamic
                          content management
                        </li>
                        <li>
                          Optimized user experience through performance
                          improvements and UX research
                        </li>
                        <li>
                          Mentored junior developers and conducted code reviews
                        </li>
                      </ul>
                    </div>

                    {/* Job 3 */}
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Junior Web Developer
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            StartUp Innovations
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono">
                          2018 - 2020
                        </Badge>
                      </div>
                      <ul className="text-light font-inter">
                        <li>
                          Developed websites using HTML, CSS, JavaScript, and
                          PHP
                        </li>
                        <li>
                          Worked with databases (MySQL) to create dynamic web
                          applications
                        </li>
                        <li>
                          Participated in agile development processes and daily
                          standups
                        </li>
                        <li>
                          Learned and implemented best practices for clean,
                          maintainable code
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>

                {/* Education Section */}
                <Card className="mb-4 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h3 className="text-warning mb-4 font-poppins">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="me-2"
                      >
                        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                      </svg>
                      Education
                    </h3>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Bachelor of Computer Science
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            University of Macedonia
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono">
                          2014 - 2018
                        </Badge>
                      </div>
                      <p className="text-light font-inter mb-0">
                        Specialized in Software Engineering and Web Development.
                        Graduated with honors (GPA: 3.8/4.0)
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Right Column */}
              <Col lg={4}>
                {/* Skills Section */}
                <Card className="mb-4 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="me-2"
                      >
                        <path d="M9.4,16.6L4.8,12L3.4,13.4L9.4,19.4L20.6,8.2L19.2,6.8L9.4,16.6Z" />
                      </svg>
                      Technical Skills
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Frontend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "React",
                          "TypeScript",
                          "JavaScript",
                          "HTML5",
                          "CSS3",
                          "Bootstrap",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            bg="warning"
                            text="dark"
                            className="font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Backend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "Express",
                          "Python",
                          "PHP",
                          "REST APIs",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            bg="warning"
                            text="dark"
                            className="font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Database</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {["MySQL", "PostgreSQL", "MongoDB", "Redis"].map(
                          (skill) => (
                            <Badge
                              key={skill}
                              bg="warning"
                              text="dark"
                              className="font-mono"
                            >
                              {skill}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">
                        Tools & Others
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {["Git", "Docker", "AWS", "Linux", "Agile"].map(
                          (skill) => (
                            <Badge
                              key={skill}
                              bg="warning"
                              text="dark"
                              className="font-mono"
                            >
                              {skill}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Languages Section */}
                <Card className="mb-4 bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="me-2"
                      >
                        <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                      Languages
                    </h4>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="text-light font-inter">
                          Macedonian
                        </span>
                        <Badge bg="success">Native</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="text-light font-inter">English</span>
                        <Badge bg="primary">Fluent</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="text-light font-inter">Serbian</span>
                        <Badge bg="info">Intermediate</Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Certifications */}
                <Card className="bg-dark border-secondary">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="me-2"
                      >
                        <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                      </svg>
                      Certifications
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-1">
                        AWS Cloud Practitioner
                      </h6>
                      <p className="text-muted font-mono small mb-0">
                        Amazon Web Services (2023)
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-1">
                        React Developer
                      </h6>
                      <p className="text-muted font-mono small mb-0">
                        Meta (Facebook) (2022)
                      </p>
                    </div>

                    <div>
                      <h6 className="text-light font-inter mb-1">
                        JavaScript Algorithms
                      </h6>
                      <p className="text-muted font-mono small mb-0">
                        freeCodeCamp (2021)
                      </p>
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

export default ResumePage;
