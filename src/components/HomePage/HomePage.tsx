import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { profileImage, RESUME_PDF_URL } from "../../assets";
import { HomePageProps } from "../../common/interfaces";
import { handleDownloadCV } from "../../common/utils";

const HomePage: React.FC<HomePageProps> = ({ onNavClick }) => {
  return (
    <>
      <section className="md:min-h-screen flex items-center justify-center bg-section-bg-a px-4 max-md:pb-12">
        <div className="text-left w-full max-w-6xl">
          {/* Home Content */}
          <div className="grid grid-cols-12 gap-6 mx-auto">
            {/* Left Half - 6 columns */}
            <div className="col-span-6 max-md:col-span-12 max-md:flex max-md:justify-center">
              <img
                src={profileImage}
                alt="Gjorgji Argirovski"
                className="max-w-sm w-full h-auto rounded-3xl shadow-card-subtle mb-4 p-2"
              />
            </div>

            {/* Right Half - 6 columns */}
            <div className="col-span-6 max-md:col-span-12 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
              <h1 className="text-7xl font-bold leading-tight text-contact-heading text-left max-[900px]:text-5xl">
                Hi, I’m Gjorgji.
              </h1>
              <h2 className="text-2xl font-light mt-6 text-contact-heading text-left max-[900px]:text-xl">
                Full-stack developer focused on building scalable, maintainable
                applications that solve real-world challenges. Enjoy combining
                structured backend logic with clean, intuitive user experiences
                to create systems that feel reliable and effortless.
              </h2>

              {/* Buttons Section - Split into two halves */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-4 max-[400px]:grid-cols-1 max-md:gap-4 col-span-12 max-md:col-span-12">
                  {/* Left buttons half */}
                  <div className="space-y-4">
                    <a
                      href="mailto:gjorgji.argirovski@gmail.com"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-btn-contact-bg hover:bg-btn-contact-hover text-white rounded-lg text-lg font-medium transition-all duration-150 flex items-center justify-center gap-2 hover:shadow-btn-contact focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Contact
                    </a>
                    <button
                      onClick={() => handleDownloadCV(RESUME_PDF_URL)}
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover rounded-lg text-lg font-medium transition-all duration-150 flex items-center justify-center gap-2 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2"
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} />
                      Download CV
                    </button>
                  </div>

                  {/* Right buttons half */}
                  <div className="space-y-4">
                    <a
                      href="https://github.com/argirowski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover rounded-lg text-lg font-medium transition-all duration-150 flex items-center justify-center gap-2 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gjorgji-argirovski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover rounded-lg text-lg font-medium transition-all duration-150 flex items-center justify-center gap-2 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
