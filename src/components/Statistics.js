import React from "react";

const Statistcs = () => {
  return (
    <div className="brands-grid separator-border separator-border-light mt-5">
      <div className="row">
        <div className="col-6 col-md-3">
          <div className="featured-box text-center">
            <h4 className="text-12 text-white-50 mb-0">
              <span className="counter" data-from="0" data-to="5">
                5
              </span>
              +
            </h4>
            <p className="text-light mb-0">Years Experiance</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="featured-box text-center">
            <h4 className="text-12 text-white-50 mb-0">
              <span className="counter" data-from="0" data-to="20">
                20
              </span>
              +
            </h4>
            <p className="text-light mb-0">Happy Clients</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="featured-box text-center">
            <h4 className="text-12 text-white-50 mb-0">
              <span className="counter" data-from="0" data-to="25">
                25
              </span>
              +
            </h4>
            <p className="text-light mb-0">Projects Done</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="featured-box text-center">
            <h4 className="text-12 text-white-50 mb-0">
              <span className="counter" data-from="0" data-to="12">
                12
              </span>
            </h4>
            <p className="text-light mb-0">Get Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistcs;
