import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-section-bg-b px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading text-center max-[900px]:text-5xl">
            Let's get in touch
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading text-center max-[900px]:text-xl">
            I’m open to new opportunities and collaborations. Feel free to reach
            out.
          </h2>

          {/* Contact Card */}
          <div className="mt-12 mx-auto bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8">
            <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
              Let’s Connect
            </h3>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-pill-text shrink-0"
              />
              <a
                href="https://www.linkedin.com/in/gjorgji-argirovski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-link hover:text-contact-link-hover hover:underline cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="text-pill-text shrink-0"
              />
              <a
                href="https://github.com/argirowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-link hover:text-contact-link-hover hover:underline cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2 rounded"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className="text-pill-text shrink-0"
              />
              <a
                href="mailto:gjorgji.argirovski@gmail.com"
                className="text-contact-link hover:text-contact-link-hover hover:underline cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2 rounded"
              >
                gjorgji.argirovski@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                className="text-pill-text shrink-0"
              />
              <p className="text-contact-card-text m-0">+389 78 418 844</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
