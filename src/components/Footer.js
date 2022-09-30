import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section footer-text-light bg-dark-1">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 text-center text-lg-left"> */}
          <div className="col-lg-12">
            <p className="mb-3 mb-lg-0 text-center">
              Copyright © 2022 <a href="#">Vikas Tiwari</a>. All Rights
              Reserved.
            </p>
          </div>
          {/* <div className="col-lg-6">
            <ul className="nav nav-separator nav-separator-light justify-content-center justify-content-lg-end">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#terms"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#privacy-policy"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
