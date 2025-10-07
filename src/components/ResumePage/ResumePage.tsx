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
      <section className="min-h-screen flex items-center justify-center bg-contact-bg px-4">
        <div className="text-left w-full max-w-6xl">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading text-center">
            Professional Profile
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading text-center">
            Overview of my professional journey, education, skills, and
            credentials.
          </h2>

          {/* Resume Cards */}
          <div className="mt-12 grid grid-cols-12 gap-6 mx-auto">
            {/* Main Resume Card - 8 columns */}
            <div className="col-span-8 space-y-6">
              {/* First card in left column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-3" />
                  Work Experience
                </h3>
                {workExperience.map((job, index) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className={index < workExperience.length - 1 ? "mb-4" : ""}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="mb-1 text-lg font-semibold text-contact-heading">
                          {job.position}
                        </h4>
                        <p className="mb-0 text-contact-card-text">
                          {job.company}
                        </p>
                      </div>
                      <span className="px-3 py-2 bg-badge-bg text-badge-text text-sm font-medium border-0 rounded-lg">
                        {job.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside ml-4">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-sm text-contact-card-text mb-1"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Second card in left column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faBuildingColumns} className="mr-3" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div
                    key={`${edu.institution}-${edu.period}`}
                    className={index < education.length - 1 ? "mb-4" : ""}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="mb-1 text-lg font-semibold text-contact-heading">
                          {edu.title}
                        </h4>
                        <p className="mb-0 text-contact-card-text">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="px-3 py-2 bg-badge-bg text-badge-text text-sm font-medium border-0 rounded-lg">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mb-0 text-contact-card-text">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card - 4 columns */}
            <div className="col-span-4 space-y-6">
              {/* First card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faGear} className="mr-3" />
                  Technical Skills
                </h3>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-contact-card-text">
                    Frontend
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="border-2 border-contact-card-text text-contact-card-text bg-transparent mr-1 mt-1 px-2 py-1 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-contact-card-text">
                    Backend
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="border-2 border-contact-card-text text-contact-card-text bg-transparent mr-1 mt-1 px-2 py-1 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-contact-card-text">
                    Database
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.database.map((skill) => (
                      <span
                        key={skill}
                        className="border-2 border-contact-card-text text-contact-card-text bg-transparent mr-1 mt-1 px-2 py-1 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2 text-base font-medium text-contact-card-text">
                    Tools & Others
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="border-2 border-contact-card-text text-contact-card-text bg-transparent mr-1 mt-1 px-2 py-1 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faEarthEurope} className="mr-3" />
                  Languages
                </h3>
                {languages.map((language, index) => (
                  <div
                    key={language.name}
                    className={index < languages.length - 1 ? "mb-3" : ""}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-contact-card-text">
                        {language.name}
                      </span>
                      <span className="px-3 py-2 bg-badge-bg text-badge-text text-sm font-medium border-0 rounded-lg ml-2">
                        {language.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faAward} className="mr-3" />
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
                        className="text-contact-link hover:text-contact-link-hover"
                      >
                        {cert.title}
                      </a>
                    </h6>
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
