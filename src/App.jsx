import React from "react";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Series from "./Pages/Series";
import ContactUs from "./Pages/ContactUs";
import Movies from "./Pages/Movies";
import MoveiDetails from "./Pages/moveidDetials/MoveiDetails";
import SeriesDetails from "./Pages/seriesDetails/SeriesDetails";
import Home from "./Pages/Home/Home";
import CollectionMovei from "./Pages/moveidDetials/Media&Recomendations/CollectionMovei";
import FullCastandCrew from "./Pages/moveidDetials/CastandSocialMovei/FullCastandCrew";
import VideoTrailer from "./Pages/moveidDetials/Media&Recomendations/VideoTrailer";
import FullCastandCrewSeries from "./Pages/seriesDetails/CastandSocialSeries/FullCastandCrewSeries";
import ViewAllSeasons from "./Pages/seriesDetails/CastandSocialSeries/ViewAllSeasons";
import VideoSeries from "./Pages/seriesDetails/Media&RecommendationSeries/VideoSeries";
import BackDropsPhoto from "./Pages/moveidDetials/Media&Recomendations/BackDropsPhoto";
import BackDropsSeries from "./Pages/seriesDetails/Media&RecommendationSeries/BackDropsSeries";
import PostersMovei from "./Pages/moveidDetials/Media&Recomendations/PostersMovei";
import PostersSeries from "./Pages/seriesDetails/Media&RecommendationSeries/PostersSeries";
import PageNotFound from "./Component/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moveis" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contact us" element={<ContactUs />} />
        <Route
          path="/moveiDetails/:userId/title/:usertitle"
          element={<MoveiDetails />}
        />
        <Route path="/fullCast&Crew/:userId" element={<FullCastandCrew />} />
        <Route path="/Video/:userId" element={<VideoTrailer />} />
        <Route
          path="/CollectionMovei/:userId/title/:usertitle"
          element={<CollectionMovei />}
        />
        <Route
          path="/fullCast&CrewSeries/:userId"
          element={<FullCastandCrewSeries />}
        />
        <Route path="/ViewAllSeasons/:userId" element={<ViewAllSeasons />} />
        <Route
          path="/seriesDetails/:userId/name/:username"
          element={<SeriesDetails />}
        />
        <Route path="/VideoSeries/:userId" element={<VideoSeries />} />
        <Route path="/BackDrops/:userId" element={<BackDropsPhoto />} />
        <Route path="/BackDropsSeries/:userId" element={<BackDropsSeries />} />
        <Route path="/PostersMovei/:userId" element={<PostersMovei />} />
        <Route path="/PostersSeries/:userId" element={<PostersSeries />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
