import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-dark-2">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            Portfolio
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            My Work
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>

        <ul className="portfolio-menu nav nav-tabs nav-light justify-content-center border-bottom-0 mb-4">
          <li className="nav-item">
            {" "}
            <a data-filter="*" className="nav-link active" href="#">
              All
            </a>
          </li>

          <li className="nav-item">
            {" "}
            <a data-filter=".web-app" href="#" className="nav-link">
              Web
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a data-filter=".design" href="#" className="nav-link">
              Design
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a data-filter=".mobile" href="#" className="nav-link">
              Mobile
            </a>
          </li>
        </ul>
        <div className="portfolio popup-ajax-gallery">
          <div className="row portfolio-filter">
            {/* <div className="col-sm-6 col-lg-4 web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/project-1.jpg"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-1.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">STALLGRAM</h5>
                      <span className="text-light">Web Application</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-sm-6 col-lg-4 design">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/netflix-logo-2.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-2.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        NETFLIX LOGO
                      </h5>
                      <span className="text-light">Design</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 artwork web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/burger-builder.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-3.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        BURGER BUILDER
                      </h5>
                      <span className="text-light">Web Application</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 artwork mobile">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/coming-soon.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {/* <a className="popup-ajax stretched-link" href=""></a> */}
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        COMING SOON
                      </h5>
                      <span className="text-light"></span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/drum-player-1.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-5.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        DRUM PLAYER
                      </h5>
                      <span className="text-light">Web Application</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-4 web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/disney.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-6.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        DISNEP+ CLONE
                      </h5>
                      <span className="text-light">Web Application</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-sm-6 col-lg-4 design">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/pm-logo-1.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-7.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        DEMO LOGO - PM
                      </h5>
                      <span className="text-light">Design</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/amazon.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-8.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        AMAZON CLONE
                      </h5>
                      <span className="text-light">Web Application</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 web-app">
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/elist.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-9.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        ELIST GENERATOR
                      </h5>
                      <span className="text-light">Web Application</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-4 design"> 
              <div className="portfolio-box rounded my-3">
                <div className="portfolio-img rounded">
                  {" "}
                  <img
                    className="img-fluid d-block"
                    src="/assests/images/projects/share-ui-2.png"
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      href="/assests/ajax/project-10.html"
                    ></a>
                    <div className="portfolio-overlay-details">
                      <h5 className="text-white font-weight-400">
                        SHARE BUTTON
                      </h5>
                      <span className="text-light">Design</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
