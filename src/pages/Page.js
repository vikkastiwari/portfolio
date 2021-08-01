import React from "react";

import Header from "../components/Header";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Top from "../components/BackToTop";
import Terms from "../modals/TermsOfService";
import Disclaimer from "../modals/PrivacyPolicy";

const Page = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <Main />
      <Footer />
      <Top />
      <Terms />
      <Disclaimer />
    </div>
  );
};

export default Page;
