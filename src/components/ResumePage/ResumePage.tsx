import React from "react";
import {
  technicalSkills,
  languages,
  certifications,
  workExperience,
  education,
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
    <>
      <section className="md:min-h-screen flex items-center justify-center bg-section-bg-a px-4">
        <div className="text-left w-full max-w-6xl">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading text-center max-[900px]:text-5xl">
            Experience and Background
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading text-center max-[900px]:text-xl">
            A closer look at my experience, skills, and career path.
          </h2>

          {/* Resume Cards */}
          <div className="mt-12 grid grid-cols-12 gap-6 mx-auto">
            {/* Main Resume Card - 8 columns */}
            <div className="col-span-8 max-lg:col-span-12 space-y-6">
              {/* First card in left column */}
              <div className="bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8 transition-all duration-150 hover:border-card-hover-border hover:shadow-card-hover">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-3 text-pill-text" />
                  Professional Experience
                </h3>
                {workExperience.map((job, index) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className={index < workExperience.length - 1 ? "mb-4" : ""}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2 items-start">
                      {/* DOM order: period then position so on small screens period appears first */}
                      <div className="md:col-span-3 md:col-start-10 md:row-start-1 md:text-right">
                        <span className="inline-block px-3 py-2 bg-badge-bg text-badge-text text-sm max-sm:text-xs font-medium border-0 rounded-lg">
                          {job.period}
                        </span>
                      </div>

                      <div className="md:col-span-9 md:row-start-1">
                        <h4 className="text-xl font-semibold text-contact-heading mb-1 max-sm:text-lg">
                          {job.position}
                        </h4>
                      </div>

                      {/* Row 2: company */}
                      <div className="md:col-span-12">
                        <p className="mb-0 text-contact-card-text">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    {/* Row 3: responsibilities */}
                    <ul className="list-disc list-inside ml-4">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="max-sm:text-sm text-contact-card-text mb-1"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Second card in left column */}
              <div className="bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8 transition-all duration-150 hover:border-card-hover-border hover:shadow-card-hover">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
                  <FontAwesomeIcon icon={faBuildingColumns} className="mr-3 text-pill-text" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div
                    key={`${edu.institution}-${edu.period}`}
                    className={index < education.length - 1 ? "mb-4" : ""}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2 items-start">
                      {/* DOM order: period then title so on small screens period appears first */}
                      <div className="md:col-span-3 md:col-start-10 md:row-start-1 md:text-right">
                        <span className="inline-block px-3 py-2 bg-badge-bg text-badge-text text-sm max-sm:text-xs font-medium border-0 rounded-lg">
                          {edu.period}
                        </span>
                      </div>

                      <div className="md:col-span-9 md:row-start-1">
                        <h4 className="text-xl font-semibold text-contact-heading mb-1 max-sm:text-lg">
                          {edu.title}
                        </h4>
                      </div>

                      {/* Row 2: institution */}
                      <div className="md:col-span-12 md:row-start-2">
                        <p className="mb-0 text-contact-card-text">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Row 3: description */}
                      <div className="md:col-span-12 md:row-start-3">
                        <p className="max-sm:text-sm text-contact-card-text mt-2">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card - 4 columns */}
            <div className="col-span-4 max-lg:col-span-12 space-y-6">
              {/* First card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8 transition-all duration-150 hover:border-card-hover-border hover:shadow-card-hover">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
                  <FontAwesomeIcon icon={faGear} className="mr-3 text-pill-text" />
                  Technical Skills
                </h3>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-muted">
                    Frontend
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md border border-pill-border bg-pill-bg text-contact-card-text text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-muted">
                    Backend
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md border border-pill-border bg-pill-bg text-contact-card-text text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-muted">
                    Database
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.database.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md border border-pill-border bg-pill-bg text-contact-card-text text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-muted">
                    Tools & Others
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md border border-pill-border bg-pill-bg text-contact-card-text text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8 transition-all duration-150 hover:border-card-hover-border hover:shadow-card-hover">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
                  <FontAwesomeIcon icon={faAward} className="mr-3 text-pill-text" />
                  Certifications
                </h3>
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className={index < certifications.length - 1 ? "mb-3" : ""}
                  >
                    <h6 className="mb-1 text-base font-medium">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-contact-link hover:text-contact-link-hover hover:underline cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active/35 focus-visible:ring-offset-2 rounded"
                      >
                        {cert.title}
                      </a>
                    </h6>
                  </div>
                ))}
              </div>

              {/* Third card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border border-contact-card-border rounded-lg shadow-card-subtle p-8 transition-all duration-150 hover:border-card-hover-border hover:shadow-card-hover">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4 max-sm:text-xl">
                  <FontAwesomeIcon icon={faEarthEurope} className="mr-3 text-pill-text" />
                  Languages
                </h3>
                {languages.map((language, index) => (
                  <div
                    key={language.name}
                    className={index < languages.length - 1 ? "mb-3" : ""}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="max-sm:text-sm text-contact-card-text">
                        {language.name}
                      </span>
                      <span className="px-3 py-2 bg-badge-bg text-badge-text text-sm max-sm:text-xs font-medium border-0 rounded-lg ml-2">
                        {language.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
