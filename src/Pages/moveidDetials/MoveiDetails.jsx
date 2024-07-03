import React from "react";
import Footer from "../../Component/Footer";
import BackgroundMovei from "./BackgroundMovei";
import CastandSocialMovei from "./CastandSocialMovei/CastandSocialMovei";

const MoveiDetails = () => {
  return (
    <div className="w-full relative">
      <BackgroundMovei />
      <CastandSocialMovei />
      <Footer />
    </div>
  );
};

export default MoveiDetails;
