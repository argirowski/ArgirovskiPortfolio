import React from "react";
import "./ResumePage.css";
import {
  technicalSkills,
  languages,
  certifications,
  workExperience,
} from "../../common/utils";
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
    <div>Resume Section</div>
    // <section className="resume-section">
    //   <Container>
    //     <Row className="justify-content-center mb-5">
    //       <Col lg={10}>
    //         <div className="text-center mb-4">
    //           <h1 className="resume-page-title mb-3">Professional Profile</h1>
    //           <p className="resume-page-text">
    //             Overview of my professional journey, education, skills, and
    //             credentials.
    //           </p>
    //         </div>
    //       </Col>
    //     </Row>

    //     <Row className="justify-content-center">
    //       <Col lg={10}>
    //         <Row className="g-4">
    //           <Col lg={8}>
    //             <Card className="mb-4 resume-card">
    //               <Card.Body className="p-4">
    //                 <h3 className="mb-4">
    //                   <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
    //                   Work Experience
    //                 </h3>

    //                 {workExperience.map((job, index) => (
    //                   <div
    //                     key={`${job.company}-${job.period}`}
    //                     className={
    //                       index < workExperience.length - 1 ? "mb-4" : ""
    //                     }
    //                   >
    //                     <div className="d-flex justify-content-between align-items-start mb-2">
    //                       <div>
    //                         <h5 className="mb-1">{job.position}</h5>
    //                         <p className="mb-0">{job.company}</p>
    //                       </div>
    //                       <Badge
    //                         className={
    //                           index === 0 ? "year-badge" : "year-badge"
    //                         }
    //                         bg={index === 0 ? undefined : "secondary"}
    //                       >
    //                         {job.period}
    //                       </Badge>
    //                     </div>
    //                     <ul className="">
    //                       {job.responsibilities.map(
    //                         (responsibility, respIndex) => (
    //                           <li key={respIndex}>{responsibility}</li>
    //                         )
    //                       )}
    //                     </ul>
    //                   </div>
    //                 ))}
    //               </Card.Body>
    //             </Card>

    //             <Card className="mb-4 resume-card">
    //               <Card.Body className="p-4">
    //                 <h3 className="mb-4">
    //                   <FontAwesomeIcon
    //                     icon={faBuildingColumns}
    //                     className="me-2"
    //                   />
    //                   Education
    //                 </h3>

    //                 <div className="mb-3">
    //                   <div className="d-flex justify-content-between align-items-start mb-2">
    //                     <div>
    //                       <h5 className="mb-1">
    //                         Web Developer, Semos Javascript Academy
    //                       </h5>
    //                       <p className="mb-0">
    //                         Semos Computer Education Center
    //                       </p>
    //                     </div>
    //                     <Badge bg="secondary" className="year-badge">
    //                       May 2018 - Jan 2019
    //                     </Badge>
    //                   </div>
    //                   <p className="mb-0">
    //                     Completed a Web Development program covering modern
    //                     technologies and tools including HTML5, CSS3,
    //                     JavaScript, Node.js, MongoDB, React, Redux, TypeScript,
    //                     Git, HTTP, and REST. Gained hands-on experience building
    //                     full-stack applications and mastering both frontend and
    //                     backend development workflows.
    //                   </p>
    //                 </div>
    //               </Card.Body>
    //             </Card>
    //           </Col>

    //           <Col lg={4}>
    //             <Card className="mb-4 resume-card">
    //               <Card.Body className="p-4">
    //                 <h4 className="mb-4">
    //                   <FontAwesomeIcon icon={faGear} className="me-2" />
    //                   Technical Skills
    //                 </h4>

    //                 <div className="mb-3">
    //                   <h6 className="mb-2">Frontend</h6>
    //                   <div className="d-flex flex-wrap gap-2">
    //                     {technicalSkills.frontend.map((skill) => (
    //                       <Badge key={skill} className="skill-badge">
    //                         {skill}
    //                       </Badge>
    //                     ))}
    //                   </div>
    //                 </div>

    //                 <div className="mb-3">
    //                   <h6 className="mb-2">Backend</h6>
    //                   <div className="d-flex flex-wrap gap-2">
    //                     {technicalSkills.backend.map((skill) => (
    //                       <Badge key={skill} className="skill-badge">
    //                         {skill}
    //                       </Badge>
    //                     ))}
    //                   </div>
    //                 </div>

    //                 <div className="mb-3">
    //                   <h6 className="mb-2">Database</h6>
    //                   <div className="d-flex flex-wrap gap-2">
    //                     {technicalSkills.database.map((skill) => (
    //                       <Badge key={skill} className="skill-badge">
    //                         {skill}
    //                       </Badge>
    //                     ))}
    //                   </div>
    //                 </div>

    //                 <div className="mb-3">
    //                   <h6 className="mb-2">Tools & Others</h6>
    //                   <div className="d-flex flex-wrap gap-2">
    //                     {technicalSkills.tools.map((skill) => (
    //                       <Badge key={skill} className="skill-badge">
    //                         {skill}
    //                       </Badge>
    //                     ))}
    //                   </div>
    //                 </div>
    //               </Card.Body>
    //             </Card>

    //             <Card className="mb-4 resume-card">
    //               <Card.Body className="p-4">
    //                 <h4 className="mb-4">
    //                   <FontAwesomeIcon icon={faEarthEurope} className="me-2" />
    //                   Languages
    //                 </h4>

    //                 {languages.map((language, index) => (
    //                   <div
    //                     key={language.name}
    //                     className={index < languages.length - 1 ? "mb-3" : ""}
    //                   >
    //                     <div className="d-flex justify-content-between align-items-center mb-1">
    //                       <span>{language.name}</span>
    //                       <Badge className="language-badge">
    //                         {language.level}
    //                       </Badge>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </Card.Body>
    //             </Card>
    //             <Card className="resume-card">
    //               <Card.Body className="p-4">
    //                 <h4 className="mb-4">
    //                   <FontAwesomeIcon icon={faAward} className="me-2" />
    //                   Certifications
    //                 </h4>

    //                 {certifications.map((cert, index) => (
    //                   <div
    //                     key={cert.title}
    //                     className={
    //                       index < certifications.length - 1 ? "mb-3" : ""
    //                     }
    //                   >
    //                     <h6 className="mb-1">
    //                       <a
    //                         href={cert.url}
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                         className="resume-cert-link"
    //                         style={{ color: "inherit", textDecoration: "none" }}
    //                       >
    //                         {cert.title}
    //                       </a>
    //                     </h6>
    //                   </div>
    //                 ))}
    //               </Card.Body>
    //             </Card>
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
  );
};

export default ResumePage;
