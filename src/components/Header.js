import React from "react";

const Header = () => {
  return (
    <header id="header" className="sticky-top-slide">
      <nav className="primary-menu navbar navbar-expand-lg navbar-text-light bg-transparent border-bottom-0">
        <div className="container-fluid position-relative">
          <div className="col-auto col-lg-2">
            <a className="logo" href="/" title="Vikas">
              {" "}
              <img src="/assests/images/logo-light.png" alt="Vikas" />{" "}
            </a>
          </div>
          <div className="col col-lg-8 navbar-accordion px-0">
            <div
              id="header-nav"
              className="collapse navbar-collapse justify-content-center"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link smooth-scroll active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end pl-0 mr-n2">
            <ul className="social-icons social-icons-light mb-n1">
              <li className="social-icons-linkedin">
                <a
                  data-toggle="tooltip"
                  href="https://www.linkedin.com/in/vikas-tiwari-1b051818b/"
                  target="_blank"
                  rel="noreferrer"
                  title=""
                  data-original-title="Linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons-youtube">
                <a
                  data-toggle="tooltip"
                  href="https://www.youtube.com/channel/UCI_xIqMJa1Oirfjx5-ykylA"
                  target="_blank"
                  rel="noreferrer"
                  title=""
                  data-original-title="Youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="social-icons-github">
                <a
                  data-toggle="tooltip"
                  href="https://github.com/vikkastiwari"
                  target="_blank"
                  rel="noreferrer"
                  title=""
                  data-original-title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
