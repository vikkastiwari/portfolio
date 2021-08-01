import React from "react";

const Experience = () => {
  return (
    <div className="col-md-6">
      <h2 className="text-6 text-white font-weight-600 mb-4">My Experience</h2>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          Dec 2019 – Oct 2020
        </p>
        <h3 className="text-5 text-white">
          WEBSITE MANAGER & DATABASE HANDLER
        </h3>
        <p className="text-primary">UNIFORM 2 CORPORATE HR SERVICES</p>
        <p className="text-white-50 mb-0">
          Increased the efficiency of the backend by shifting the setup to MySQL
          & engaged with designing and security concerns.
        </p>
      </div>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          Dec 2019 – Jan 2020
        </p>
        <h3 className="text-5 text-white">WEB DEVELOPMENT INTERN</h3>
        <p className="text-primary">SAHU TECHNOLOGIES</p>
        <p className="text-white-50 mb-0">
          Built a responsive user-friendly website using HTML5/CSS3, JS for
          Frontend and PHP, Mysql for Backend.
        </p>
      </div>
      <div className="border border-dark rounded p-4 mb-4">
        <p className="badge badge-primary text-2 font-weight-400">
          <span className="text-3 mr-2">
            <i className="fas fa-calendar-alt"></i>
          </span>
          Jun 2019 – Jul 2019
        </p>
        <h3 className="text-5 text-white">ANDROID DEVELOPER</h3>
        <p className="text-primary">AZURE SKYNET SOLUTIONS PVT. LTD.</p>
        <p className="text-white-50 mb-0">
          Built 3 android applications using JAVA & Android Studio as a
          development tool.
        </p>
      </div>
    </div>
  );
};

export default Experience;
