import React from "react";
import Footer from "../../Component/Footer";
import BackgroundSeries from "./BackgroundSeries";
import CastandSocialSeries from "./CastandSocialSeries/CastandSocialSeries";

const SeriesDetails = () => {
  return (
    <div className="w-full relative">
      <BackgroundSeries />
      <CastandSocialSeries />
      <Footer />
    </div>
  );
};

export default SeriesDetails;
