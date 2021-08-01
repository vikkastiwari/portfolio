import React from "react";

import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Resume from "../sections/Resume/Resume";
import Portfolio from "../sections/Portfolio";
import Posts from "../sections/Blogs/Blogs";
import Contact from "../sections/Contact/Contact";

const Main = () => {
  return (
    <div id="content" role="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Posts />
      <Contact />
    </div>
  );
};

export default Main;
