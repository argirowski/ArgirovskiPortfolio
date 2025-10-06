import React from "react";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactPage: React.FC = () => {
  return (
    <div>Contact Section</div>
    // <section className="d-flex align-items-center contact-section">
    //   <Container>
    //     <Row className="justify-content-center">
    //       <Col lg={8}>
    //         <div className="text-center mb-5">
    //           <h1 className="contact-page-title mb-4">Let's get in touch</h1>
    //           <p className="contact-page-text">
    //             I’m always open to new opportunities and collaborations. Reach
    //             out anytime!
    //           </p>
    //         </div>

    //         <Row className="g-4">
    //           <Col md={12}>
    //             <Card className="h-100 contact-card">
    //               <Card.Body className="p-4">
    //                 <h4 className="mb-4">How to Connect</h4>

    //                 <div className="mb-3 d-flex align-items-center">
    //                   <div className="me-3">
    //                     <FontAwesomeIcon icon={faLinkedin} size="lg" />
    //                   </div>
    //                   <div>
    //                     <a
    //                       href="https://www.linkedin.com/in/gjorgji-argirovski/"
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       className="mb-0 contact-social-link"
    //                     >
    //                       Follow me on LinkedIn
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="mb-3 d-flex align-items-center">
    //                   <div className="me-3">
    //                     <FontAwesomeIcon icon={faGithub} size="lg" />
    //                   </div>
    //                   <div>
    //                     <a
    //                       href="https://github.com/argirowski"
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       className="mb-0 contact-social-link"
    //                     >
    //                       Follow me on GitHub
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="mb-3 d-flex align-items-center">
    //                   <div className="me-3">
    //                     <FontAwesomeIcon icon={faEnvelope} size="lg" />
    //                   </div>
    //                   <div>
    //                     <a
    //                       href="mailto:gjorgji.argirovski@gmail.com"
    //                       className="mb-0 contact-social-link"
    //                     >
    //                       gjorgji.argirovski@gmail.com
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="mb-3 d-flex align-items-center">
    //                   <div className="me-3">
    //                     <FontAwesomeIcon icon={faPhone} size="lg" />
    //                   </div>
    //                   <div>
    //                     <p className="mb-0">+389 78 418 844</p>
    //                   </div>
    //                 </div>
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

export default ContactPage;
