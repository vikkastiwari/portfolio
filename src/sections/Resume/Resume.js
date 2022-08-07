import React from "react";

import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Tech from "./Tech/Tech";
import OpenSource from "./OpenSource/OpenSource";

const Resume = () => {
  return (
    <section id="resume" className="section bg-dark-1">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            Summary
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>

        <div className="row">
          <Experience />
          <Education />
        </div>

        <h2 className="text-6 text-white font-weight-600 mt-4 mb-4">
          MY SKILLS
        </h2>
        <Skills />
        <h2 className="text-6 text-white font-weight-600 mt-4 mb-4">
          TECH I'M FAMILIAR WITH
        </h2>
        <Tech />
        <h2 className="text-6 text-white font-weight-600 mt-4 mb-4">
          OPEN SOURCE CONTRIBUTIONS
        </h2>
        <OpenSource />
        {/* <div className="text-center mt-5">
          <a
            href={VTResume}
            rel="noreferrer"
            download="Resume"
            target="_blank"
            className="btn btn-outline-secondary rounded-pill shadow-none"
          >
            Resume
            <span className="ml-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
