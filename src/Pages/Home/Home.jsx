import React from "react";
import MoveiPlayNow from "./MoveiPlayNow";
import SeriesPlayNow from "./SeriesPlayNow";
import TopRatedMovei from "./TopRatedMovei";
import TopRatedSeries from "./TopRatedSeries";
import Footer from "../../Component/Footer";

const Home = () => {
  return (
    <div>
      <h1 className="text-center mb-2 mt-20 font-bold text-cyan-400 text-4xl">
        Home
      </h1>
      <div className="text-white lg:flex flex-column justify-between items-center text-center lg:mx-20">
        <div className="my-1">
          <h1 className="text-2xl font-semibold mb-2">SORT BY</h1>
          <div className="flex justify-evenly lg:gap-12">
            <button className="btn btn-sm btn-outline rounded-md">Title</button>
            <button className="btn btn-sm btn-outline rounded-md">
              Poplarity
            </button>
            <button className="btn btn-sm btn-outline rounded-md">Date</button>
            <button className="btn btn-sm btn-outline rounded-md">Ratin</button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">SORT ORDER</h1>
          <div className="flex justify-evenly lg:gap-16">
            <button className="btn btn-sm btn-outline rounded-md">
              Descingin
            </button>
            <button className="btn btn-sm btn-outline rounded-md">
              Ascending
            </button>
          </div>
        </div>
      </div>
      <MoveiPlayNow />
      <SeriesPlayNow />
      <TopRatedMovei />
      <TopRatedSeries />
      <Footer />
    </div>
  );
};

export default Home;
