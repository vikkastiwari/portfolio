import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: "url('/assests/images/intro-bg.png')" }}
        ></div>
        <div className="hero-content section d-flex fullscreen">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <div className="typed-strings">
                  <p>I'm Vikas Tiwari</p>
                  <p>I'm a Freelancer.</p>
                  <p>I'm a Developer.</p>
                  <p>I'm a Instructor.</p>
                </div>
                <>
                  <p className="text-7 font-weight-500 text-white mb-2 mb-md-3">
                    HI There, Welcome!
                  </p>
                </>
                <a href="/" className="mb-lg-auto mt-lg-4">
                  <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-inline-flex d-block">
                    <img
                      className="img-fluid rounded-pill d-inline-flex d-block"
                      src="/assests/images/profile.png"
                      title="I'm Vikas"
                      alt=""
                    />
                  </span>
                </a>
                <h2 className="text-16 font-weight-600 text-white mb-2 mb-md-3">
                  <span className="typed"></span>
                </h2>
                <p className="text-5 text-light mb-4">
                  based in Mumbai, India.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
