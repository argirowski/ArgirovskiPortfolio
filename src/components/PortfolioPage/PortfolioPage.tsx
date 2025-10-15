import React from "react";
import { projects } from "../../common/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-contact-bg px-4 max-md:pb-12">
        <div className="text-left w-full max-w-7xl">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading text-center max-[900px]:text-5xl">
            Selected Projects
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading text-center max-[900px]:text-xl">
            Take a look at some of my favorite projects that showcase my web
            development skills and style.
          </h2>

          {/* Portfolio content will go here */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-[900px]:text-xl">
              <FontAwesomeIcon icon={faShield} className="mr-3" />
              Top Picks
            </h3>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-12 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="col-span-4 max-[900px]:col-span-6 max-md:col-span-12"
                >
                  <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8 h-full flex flex-col">
                    <div className="mb-2">
                      <span className="px-4 py-2 bg-badge-bg text-badge-text text-sm font-medium rounded-lg me-2">
                        {project.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-contact-heading mb-3 max-[900px]:text-lg">
                      {project.title}
                    </h4>
                    <p className="text-contact-card-text mb-3 flex-grow max-[900px]:text-sm">
                      {project.description}
                    </p>
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border-2 border-contact-card-text text-contact-card-text bg-transparent px-2 py-1 text-xs rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-contact-link hover:bg-contact-link-hover text-white text-center py-3 px-6 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
