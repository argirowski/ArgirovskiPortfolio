import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./PortfolioPage.css";
import { featuredProjects } from "../../common/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioPage: React.FC = () => {
  return (
    <section className="portfolio-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="display-3 fw-bold mb-4">My Portfolio</h1>
            <p className="lead fs-4 mb-4">
              A showcase of my recent projects and technical expertise. Each
              project demonstrates different aspects of modern web development.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="h3 mb-4">
              <FontAwesomeIcon icon={faShield} />
              Featured Projects
            </h2>
            <Row className="g-4">
              {featuredProjects.map((project) => (
                <Col key={project.id} lg={6} xl={4}>
                  <Card className="h-100 border-secondary project-card">
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="mb-2">
                        <Badge className="me-2 category-badge">
                          {project.category}
                        </Badge>
                      </div>
                      <Card.Title className="h5 mb-3">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="mb-3 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      <div className="mb-3">
                        <div className="d-flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} className="small tech-badge">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-auto">
                        <Button
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fw-semibold flex-fill btn-custom"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          Code
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioPage;
