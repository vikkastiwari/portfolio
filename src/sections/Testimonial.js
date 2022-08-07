import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial" className="section bg-dark-1">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
            Testimonial
          </h2>
          <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>
          </p>
        </div>

        <div
          className="owl-carousel owl-light owl-theme"
          data-loop="true"
          data-nav="false"
          data-autoplay="true"
          data-margin="20"
          data-stagepadding="0"
          data-slideby="1"
          data-items-xs="1"
          data-items-sm="1"
          data-items-md="1"
          data-items-lg="2"
        >
          <div className="item">
            <div className="bg-dark rounded p-5">
              <div className="d-flex align-items-center mt-auto mb-4">
                <img
                  className="img-fluid rounded-circle d-inline-block w-auto"
                  src="/assests/images/testimonial/client-sm-3.jpg"
                  alt=""
                />
                <p className="ml-3 mb-0">
                  <strong className="d-block text-white font-weight-600">
                    Dennis Jacques
                  </strong>
                  <span className="text-white-50 font-weight-500">
                    User from USA
                  </span>
                </p>
              </div>
              <p className="text-light mb-4">
                “Only trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the
                printing and typesetting industry.”
              </p>
              <span className="text-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </span>
            </div>
          </div>
          <div className="item">
            <div className="bg-dark rounded p-5">
              <div className="d-flex align-items-center mt-auto mb-4">
                <img
                  className="img-fluid rounded-circle d-inline-block w-auto"
                  src="/assests/images/testimonial/client-sm-1.jpg"
                  alt=""
                />
                <p className="ml-3 mb-0">
                  <strong className="d-block text-white font-weight-600">
                    Jay Shah
                  </strong>
                  <span className="text-white-50 font-weight-500">
                    Founder at Icomatic Pvt Ltd
                  </span>
                </p>
              </div>
              <p className="text-light mb-4">
                "Easy to use, reasonably priced simply dummy text of the
                printing and typesetting industry. Quidam lisque persius
                interesset his et, in quot quidam possim iriure.”
              </p>
              <span className="text-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </span>
            </div>
          </div>
          <div className="item">
            <div className="bg-dark rounded p-5">
              <div className="d-flex align-items-center mt-auto mb-4">
                <img
                  className="img-fluid rounded-circle d-inline-block w-auto"
                  src="/assests/images/testimonial/client-sm-2.jpg"
                  alt=""
                />
                <p className="ml-3 mb-0">
                  <strong className="d-block text-white font-weight-600">
                    Patrick Cary
                  </strong>
                  <span className="text-white-50 font-weight-500">
                    Freelancer from USA
                  </span>
                </p>
              </div>
              <p className="text-light mb-4">
                “I am happy Working with printing and typesetting industry.
                Quidam lisque persius interesset his et, in quot quidam
                persequeris essent possim iriure.”
              </p>
              <span className="text-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </span>
            </div>
          </div>
          <div className="item">
            <div className="bg-dark rounded p-5">
              <div className="d-flex align-items-center mt-auto mb-4">
                <img
                  className="img-fluid rounded-circle d-inline-block w-auto"
                  src="/assests/images/testimonial/client-sm-4.jpg"
                  alt=""
                />
                <p className="ml-3 mb-0">
                  <strong className="d-block text-white font-weight-600">
                    Chris Tom
                  </strong>
                  <span className="text-white-50 font-weight-500">
                    User from UK
                  </span>
                </p>
              </div>
              <p className="text-light mb-4">
                “I have used them twice now. Good rates, very efficient service
                and priced simply dummy text of the printing and typesetting
                industry quidam interesset his et. Excellent.”
              </p>
              <span className="text-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
