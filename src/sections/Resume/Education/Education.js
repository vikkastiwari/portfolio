import React from "react";

const Education = () => {
  return (
    <div className="col-md-6">
      <h2 className="text-6 text-white font-weight-600 mb-4">My Education</h2>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          2018 – 2022
        </p>
        <h3 className="text-5 text-white">
          BACHELOR'S OF ENGINEERING IN INFORMATION TECHNOLOGY
        </h3>
        <p className="text-primary">
          THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY
        </p>
        <p className="text-white-50 mb-0">CGPI: 9.36 / 10</p>
      </div>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          2016 – 2018
        </p>
        <h3 className="text-5 text-white">
          NIRMALA MEMORIAL FOUNDATION COLLEGE OF COMMERCE & SCIENCE
        </h3>
        <p className="text-primary">
          MAHARASHTRA STATE BOARD OF HIGHER EDUCATION
        </p>
        <p className="text-white-50 mb-0">Percentage: 74%</p>
      </div>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          2016
        </p>
        <h3 className="text-5 text-white">SVEM HIGH SCHOOL</h3>
        <p className="text-primary">
          MAHARASHTRA STATE BOARD OF SECONDARY EDUCATION
        </p>
        <p className="text-white-50 mb-0">Percentage: 78%</p>
      </div>
    </div>
  );
};

export default Education;
