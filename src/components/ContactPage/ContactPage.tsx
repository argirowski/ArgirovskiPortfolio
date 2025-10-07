import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-contact-bg">
        <div className="text-center">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading">
            Let's get in touch
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading">
            I'm always open to new opportunities and collaborations. Reach out
            anytime!
          </h2>

          {/* Contact Card */}
          <div className="mt-12 mx-auto bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
              How to Connect
            </h3>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <a
                href="https://www.linkedin.com/in/gjorgji-argirovski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-link hover:text-contact-link-hover"
              >
                Follow me on LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <a
                href="https://github.com/argirowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-link hover:text-contact-link-hover"
              >
                Follow me on GitHub
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <a
                href="mailto:gjorgji.argirovski@gmail.com"
                className="text-contact-link hover:text-contact-link-hover"
              >
                gjorgji.argirovski@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <p className="text-contact-card-text m-0">+389 78 418 844</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
