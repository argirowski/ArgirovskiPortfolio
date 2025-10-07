import React from "react";
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
    <>
      <section className="min-h-screen flex items-center justify-center bg-contact-bg px-4">
        <div className="text-center w-full max-w-6xl">
          <h1 className="text-7xl font-bold leading-tight text-contact-heading">
            Professional Profile
          </h1>
          <h2 className="text-2xl font-light mt-6 text-contact-heading">
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
                <p>Professional experience content will go here</p>
              </div>

              {/* Second card in left column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faBuildingColumns} className="mr-3" />
                  Education
                </h3>
                <p>Education content will go here</p>
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
                <p>Technical skills content will go here</p>
              </div>

              {/* Second card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faEarthEurope} className="mr-3" />
                  Languages
                </h3>
                <p>Languages content will go here</p>
              </div>

              {/* Third card in right column */}
              <div className="bg-contact-card-bg text-contact-card-text border-2 border-contact-card-border rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-contact-heading text-left mb-4">
                  <FontAwesomeIcon icon={faAward} className="mr-3" />
                  Certifications
                </h3>
                <p>Certifications content will go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
