import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./ResumePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faMarker,
  faCircleCheck,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

const ResumePage: React.FC = () => {
  return (
    <section className="resume-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="text-center mb-4">
              <h1 className="display-3 fw-bold mb-3 font-poppins">My Resume</h1>
              <p className="lead fs-4 font-inter mb-4">
                Full Stack Developer with expertise in modern web technologies
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
                    <h3 className="text-warning mb-4 font-poppins">
                      <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                      Work Experience
                    </h3>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Software Developer
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            Damilah
                          </p>
                        </div>
                        <Badge className="font-mono year-badge">
                          2022 - 2025
                        </Badge>
                      </div>
                      <ul className="text-light font-inter">
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
                          <h5 className="text-light font-poppins mb-1">
                            Software Developer
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            CodeIT Solution
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono year-badge">
                          2021 - 2022
                        </Badge>
                      </div>
                      <ul className="text-light font-inter">
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
                    <h3 className="text-warning mb-4 font-poppins">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="me-2"
                      />
                      Education
                    </h3>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-light font-poppins mb-1">
                            Web Developer, Semos Javascript Academy
                          </h5>
                          <p className="text-warning mb-0 font-inter">
                            Semos Computer Education Center
                          </p>
                        </div>
                        <Badge bg="secondary" className="font-mono year-badge">
                          2018 - 2019
                        </Badge>
                      </div>
                      <p className="text-light font-inter mb-0">
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
                    <h4 className="text-warning mb-4 font-poppins">
                      <FontAwesomeIcon icon={faMarker} className="me-2" />
                      Technical Skills
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Frontend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "TypeScript",
                          "React",
                          "Redux",
                          "HTML5",
                          "CSS3",
                          "Tailwind CSS",
                        ].map((skill) => (
                          <Badge key={skill} className="font-mono skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Backend</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "C#",
                          ".NET Core",
                          "Entity Framework Core",
                          "Unit Testing",
                          "REST APIs",
                        ].map((skill) => (
                          <Badge key={skill} className="font-mono skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">Database</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {["MySQL"].map((skill) => (
                          <Badge key={skill} className="font-mono skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-2">
                        Tools & Others
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {["Git", "Docker", "AWS", "Agile"].map((skill) => (
                          <Badge key={skill} className="font-mono skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      <FontAwesomeIcon icon={faEarthEurope} className="me-2" />
                      Languages
                    </h4>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="font-inter">Macedonian</span>
                        <Badge className="language-badge">Native</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="font-inter">English</span>
                        <Badge className="language-badge">Fluent</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="font-inter">German</span>
                        <Badge className="language-badge">Beginner</Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="border-secondary resume-card">
                  <Card.Body className="p-4">
                    <h4 className="text-warning mb-4 font-poppins">
                      <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                      Certifications
                    </h4>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-1">
                        Querying Data with Transact-SQL - Exam 761
                      </h6>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-light font-inter mb-1">
                        Programming in Microsoft C# - Exam 70-483
                      </h6>
                    </div>

                    <div>
                      <h6 className="text-light font-inter mb-1">
                        Oracle Certified Associate, Java SE 7 Programmer
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
