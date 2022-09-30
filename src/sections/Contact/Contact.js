import React, { useState, useEffect } from "react";

import { db } from "../../Config";
import "./Contact.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const titles = {
    Active: "Sending...",
    Inactive: "Send Message",
  };

  const before = (
    <span
      role="status"
      aria-hidden="true"
      class="spinner-border spinner-border-sm align-self-center mr-2"
    >
      Sending.....
    </span>
  );
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section id="contact" className="section bg-dark-2">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            Contact
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Get In Touch
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
            <h2 className="mb-3 text-5 text-white text-uppercase">Address</h2>
            <p className="text-3 text-white-50 mb-4">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Mumbai, India
              <br />
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-envelope"></i>
              </span>
              vikkastiwari56@gmail.com
            </p>
            {/* <p className="text-3 text-white-50 mb-1">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-phone"></i>
              </span>
              +91 8108775582
            </p> */}
          </div>
          <div className="col-md-8 col-xl-9 text-center order-0 order-md-1">
            <h2 className="mb-3 text-5 text-white text-uppercase text-md-left">
              Connect
            </h2>
            <h2 className="mb-3 text-3 text-white text-md-left">
              Hello, there everyone on the internet. If you have any suggestion,
              project or even you want to say Hi! reach out me on any below
              listed platforms.
            </h2>
            <ul className="social-icons social-icons-muted ml-md-n2 justify-content-center justify-content-md-start">
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
            {/* <form
              id="contact-form"
              className="form-dark"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="form-message"
                  className="form-control"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me more about your requirements...."
                ></textarea>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                  style={{
                    background: loader ? { before } : "",
                  }}
                >
                  Submit
                </button>
              </p>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
