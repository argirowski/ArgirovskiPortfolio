import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./PortfolioPage.css";

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Store",
      description:
        "A full-stack web application built with .NET and React, using C# for backend logic and TypeScript for the frontend. Features Redux for state management, Material UI for styling, Entity Framework for data access, and ASP.NET Core Identity for secure authentication.",
      technologies: ["React", "TypeScript", "Entity Framework", ".NET"],
      category: "Full Stack",
      githubUrl: "https://github.com/argirowski/ECommerceStore",
      featured: true,
    },
    {
      id: 2,
      title: "Reactivities Social App",
      description:
        "A full-stack web app built with .NET 9.0 and React (TypeScript), featuring Clean Architecture with CQRS + Mediator, Entity Framework Core, and ASP.NET Core Identity. Includes real-time updates via SignalR and a custom photo upload widget with Dropzone and Cropper. The frontend uses MobX for state management. Designed as a multi-project solution with scalable, production-ready architecture.",
      technologies: [
        "React Typescript",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "CQRS + MediatR",
      ],
      category: "Full Stack",
      githubUrl: "https://github.com/argirowski/Reactivities",
      featured: true,
    },
    {
      id: 3,
      title: "Dating App",
      description:
        "A full-stack web app built with .NET 8 and Angular 18, featuring JWT-based authentication, Entity Framework Core for data persistence, and real-time communication via SignalR. Includes drag-and-drop photo uploads to the cloud, private messaging, dynamic filtering/sorting/paging, and Angular notifications. Designed with best practices for scalable architecture and clean error handling.",
      technologies: [
        ".NET 8",
        "Angular 18",
        "Entity Framework Core",
        "JWT Authentication",
        "Filtering, sorting, and paging",
      ],
      category: "Full Stack",
      githubUrl: "https://github.com/argirowski/DatingApp",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="portfolio-section">
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="display-3 fw-bold mb-4 font-poppins">
              My Portfolio
            </h1>
            <p className="lead fs-4 font-inter mb-4">
              A showcase of my recent projects and technical expertise. Each
              project demonstrates different aspects of modern web development.
            </p>
          </Col>
        </Row>

        {/* Featured Projects Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="h3 text-warning mb-4 font-poppins">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
              </svg>
              Featured Projects
            </h2>
            <Row className="g-4">
              {featuredProjects.map((project) => (
                <Col key={project.id} lg={6} xl={4}>
                  <Card className="h-100 bg-dark border-secondary project-card">
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="mb-2">
                        <Badge bg="secondary" className="font-mono me-2">
                          {project.category}
                        </Badge>
                      </div>
                      <Card.Title className="text-light font-poppins h5 mb-3">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-light font-inter mb-3 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      <div className="mb-3">
                        <div className="d-flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              bg="outline-warning"
                              className="font-mono small"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-auto">
                        <Button
                          variant="outline-light"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-inter fw-semibold flex-fill"
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="me-1"
                          >
                            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
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
