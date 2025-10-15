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
      <section className="min-h-screen flex items-center justify-center bg-contact-bg px-4">
        <div className="text-left w-full max-w-6xl">
          {/* Home Content */}
          <div className="grid grid-cols-12 gap-6 mx-auto">
            {/* Left Half - 6 columns */}
            <div className="col-span-6">
              <img
                src={profileImage}
                alt="Gjorgji Argirovski"
                className="max-w-sm w-full h-auto rounded-3xl shadow-md mb-4 p-2"
              />
            </div>

            {/* Right Half - 6 columns */}
            <div className="col-span-6">
              <h1 className="text-7xl font-bold leading-tight text-contact-heading text-left max-[900px]:text-5xl">
                Welcome !
              </h1>
              <h2 className="text-2xl font-light mt-6 text-contact-heading text-left max-[900px]:text-xl">
                I am a Full Stack Developer who loves building web experiences
                that look great and work even better. Whether it is a slick UI
                or smooth backend logic, I am all about making the web feel
                effortless. Feel free to reach out or explore my work, just
                click a button below!
              </h2>

              {/* Buttons Section - Split into two halves */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-4 col-span-12 max-md:col-span-12">
                  {/* Left buttons half */}
                  <div className="space-y-4">
                    <button
                      onClick={() => handleDownloadCV(RESUME_PDF_URL)}
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-contact-link hover:bg-contact-link-hover text-white rounded-lg text-lg max-[900px]:text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} />
                      Download CV
                    </button>
                    <a
                      href="mailto:gjorgji.argirovski@gmail.com"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-contact-link hover:bg-contact-link-hover text-white rounded-lg text-lg max-[900px]:text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Contact
                    </a>
                  </div>

                  {/* Right buttons half */}
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/gjorgji-argirovski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-contact-link hover:bg-contact-link-hover text-white rounded-lg text-lg max-[900px]:text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/argirowski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[13rem] max-[900px]:w-[12rem] max-[830px]:w-[11rem] h-12 bg-contact-link hover:bg-contact-link-hover text-white rounded-lg text-lg max-[900px]:text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
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
