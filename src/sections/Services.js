import React from "react";

const Services = () => {
  return (
    <section id="services" className="section bg-dark-2">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            Services
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h3 className="text-white">Web Development</h3>
                  <p className="text-white-50 mb-0">
                    Tech Stack Used: HTML/CSS, Javascript, React, <br />
                    MongoDB
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <h3 className="text-white">UI/UX Design</h3>
                  <p className="text-white-50 mb-0">
                    Prototyping by designing screens, buttons, scrollbars and
                    other navigational elements and Testing it to ensure correct
                    implementation.
                  </p>
                  <p className="text-white-50 mb-0">Tool: Figma</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h3 className="text-white">Graphic Design</h3>
                  <p className="text-white-50 mb-0">
                    Template designing, Thumbnail designing, Banner designing,
                    Designing SVG components using figma, and more.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-pen"></i>
                  </div>
                  <h3 className="text-white">Writer</h3>
                  <p className="text-white-50 mb-0">
                    Technical writing is a continuous process of learning,
                    carefully gathering, organizing, and assessing, all while
                    trying to craft something that adds mores value.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5 mb-md-0">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <h3 className="text-white">Instructor</h3>
                  <p className="text-white-50 mb-0">
                    Instructor{" "}
                    <a
                      href="https://www.youtube.com/channel/UCI_xIqMJa1Oirfjx5-ykylA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @programmersmode{" "}
                    </a>
                    who likes to simplify things.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-0">
                  <div className="featured-box-icon text-primary bg-dark-1 shadow-sm rounded">
                    <i className="fas fa-user"></i>
                  </div>
                  <h3 className="text-white">Mentor</h3>
                  <p className="text-white-50 mb-0">
                    I will help you to see the hope inside yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
