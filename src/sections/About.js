import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-dark-1">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            About Me
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-8 text-center text-lg-left">
            <h2 className="text-7 text-white font-weight-600 mb-3">
              I'm <span className="text-primary">Vikas Tiwari</span>,
            </h2>
            <p className="text-white-50">
              I have worked with several startups as an intern to deliver
              engaging ideas with unforgettable experiences. My interests range
              from Frontend to Backend Development inclusive of designing,
              writing & enjoy exploring new things.
            </p>
            <p className="text-white-50">
              Delivering work within time and budget which meets client’s
              requirements is my moto.
            </p>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="pl-4">
              <ul className="list-style-2 list-style-light text-light">
                <li>
                  <span className="font-weight-600 mr-2">Name:</span>Vikas
                  Tiwari
                </li>
                <li>
                  <span className="font-weight-600 mr-2">Email:</span>
                  <a href="mailto:vikkastiwari56@gmail.com">
                    vikkastiwari56@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-weight-600 mr-2">Age:</span>21
                </li>
                <li className="border-0">
                  <span className="font-weight-600 mr-2">From:</span>Mumbai,
                  India
                </li>
              </ul>
              {/* <div className="text-center mt-5"></div>
              <a
                href={VTResume}
                rel="noreferrer"
                download="Resume-Vikas-Tiwari"
                target="_blank"
                className="btn btn-primary rounded-pill smooth-scroll"
              >
                Download CV
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
