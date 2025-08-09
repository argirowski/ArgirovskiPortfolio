import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./ResumePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faBuildingColumns,
  faGear,
  faAward,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

const ResumePage: React.FC = () => {
  return (
    <section className="resume-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="text-center mb-4">
              <h1 className="display-3 fw-bold mb-3">Professional Profile</h1>
              <p className="lead fs-4 mb-4">
                Overview of my professional journey, education, skills, and
                credentials.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              <Col lg={8}>
                <Card className="mb-4 border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h3 className="mb-4">
                      <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
                      Work Experience
                    </h3>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light mb-1">
                            Software Developer
                          </h5>
                          <p className="text-warning mb-0">Damilah</p>
                        </div>
                        <Badge className="year-badge">
                          Sep 2022 - Feb 2025
                        </Badge>
                      </div>
                      <ul className="text-light">
                        <li>
                          Built modern, responsive user interfaces using React
                          with TypeScript, ensuring type safety and maintainable
                          code structure.
                        </li>
                        <li>
                          Developed scalable backend APIs and business logic
                          using .NET Core, enabling seamless data flow across
                          the stack.
                        </li>
                        <li>
                          Employed Entity Framework Core for efficient data
                          access and object-relational mapping, following best
                          practices for database interaction.
                        </li>
                        <li>
                          Designed and implemented sleek, utility-first UI
                          components with Tailwind CSS, focusing on clean,
                          accessible, mobile-first design.
                        </li>
                        <li>
                          Collaborated in a full-stack environment, contributing
                          to both frontend features and backend architecture,
                          delivering cohesive end-to-end solutions.
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light mb-1">
                            Software Developer
                          </h5>
                          <p className="text-warning mb-0">CodeIT Solution</p>
                        </div>
                        <Badge bg="secondary" className="year-badge">
                          Jun 2021 - Jun 2022
                        </Badge>
                      </div>
                      <ul className="text-light">
                        <li>
                          Developed and maintained full-stack applications using
                          .NET Core and C#, ensuring scalable and efficient
                          backend architecture.
                        </li>
                        <li>
                          Built responsive, user-centric front-end interfaces
                          with React and styled components using Bootstrap for
                          modern, accessible UI design.
                        </li>
                        <li>
                          Designed and queried SQL-based relational databases,
                          optimizing performance for key operations.
                        </li>
                        <li>
                          Utilized Entity Framework Core for object-relational
                          mapping, enhancing productivity and consistency in
                          data management.
                        </li>
                        <li>
                          Collaborated on both frontend and backend solutions,
                          contributing to end-to-end application features and
                          delivery.
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h3 className="mb-4">
                      <FontAwesomeIcon
                        icon={faBuildingColumns}
                        className="me-2"
                      />
                      Education
                    </h3>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light mb-1">
                            Web Developer, Semos Javascript Academy
                          </h5>
                          <p className="text-warning mb-0">
                            Semos Computer Education Center
                          </p>
                        </div>
                        <Badge bg="secondary" className="year-badge">
                          May 2018 - Jan 2019
                        </Badge>
                      </div>
                      <p className="text-light mb-0">
                        Completed a Web Development program covering modern
                        technologies and tools including HTML5, CSS3,
                        JavaScript, Node.js, MongoDB, React, Redux, TypeScript,
                        Git, HTTP, and REST. Gained hands-on experience building
                        full-stack applications and mastering both frontend and
                        backend development workflows.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mb-4 border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h4 className="mb-4">
                      <FontAwesomeIcon icon={faGear} className="me-2" />
                      Technical Skills
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light mb-2">Frontend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "TypeScript",
                          "React",
                          "Redux",
                          "Responsive Design",
                          "Tailwind CSS",
                        ].map((skill) => (
                          <Badge key={skill} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light mb-2">Backend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "C#",
                          ".NET Core",
                          "Entity Framework Core",
                          "REST APIs",
                          "Unit Testing",
                        ].map((skill) => (
                          <Badge key={skill} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light mb-2">Database</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {["SQL", "Microsoft SQL Server"].map((skill) => (
                          <Badge key={skill} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light mb-2">Tools & Others</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "Git / GitHub",
                          "Docker",
                          "Microsoft Azure",
                          "Agile Methodology",
                        ].map((skill) => (
                          <Badge key={skill} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h4 className="mb-4">
                      <FontAwesomeIcon icon={faEarthEurope} className="me-2" />
                      Languages
                    </h4>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span>Macedonian</span>
                        <Badge className="language-badge">Native</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span>English</span>
                        <Badge className="language-badge">Fluent</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span>German</span>
                        <Badge className="language-badge">Beginner</Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h4 className="mb-4">
                      <FontAwesomeIcon icon={faAward} className="me-2" />
                      Certifications
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light mb-1">
                        <a
                          href="https://www.credly.com/badges/ab2660b7-4db1-4515-9e0d-56238e6c1e45"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-cert-link"
                        >
                          Querying Data with Transact-SQL - Exam 761
                        </a>
                      </h6>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light mb-1">
                        <a
                          href="https://www.credly.com/badges/49fceafe-9455-40c1-988c-dd6500def154"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-cert-link"
                        >
                          Programming in Microsoft C# - Exam 70-483
                        </a>
                      </h6>
                    </div>

                    <div>
                      <h6 className="text-light mb-1">
                        <a
                          href="https://www.credly.com/badges/b9f7aeda-e73b-483c-820e-90fccfa1278f"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-cert-link"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          Oracle Certified Associate, Java SE 7 Programmer
                        </a>
                      </h6>
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
