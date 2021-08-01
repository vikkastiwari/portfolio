import React from "react";

const Skills = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/webapp.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              WEB APP DEVELOPMENT
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {/* <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/devops.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              DEVOPS
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
      </div>
      <div className="col-md-4">
        {/* <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/a-app.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              MOBILE APP DEVELOPMENT
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "45%" }}
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
        <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/design.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              GRAPHIC DESIGN
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-md-4">
        <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/cloud.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              CLOUD COMPUTING
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        {/* <p className="text-light d-flex align-items-center font-weight-500 ">
          <img
            className="img-fluid d-inline-block skill-logo"
            src="/assests/images/skills/ml.svg"
            alt="cpp"
          />
          <p className="mb-0">
            <strong className="d-block text-white font-weight-600">
              MACHINE LEARNING
            </strong>
          </p>
        </p>
        <div className="progress progress-sm bg-dark-2 mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "39%" }}
            aria-valuenow="39"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
