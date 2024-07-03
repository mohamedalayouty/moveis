import { configureStore } from "@reduxjs/toolkit";
import { dataStatic } from "./staticState";
import { backDataMoveisNow } from "./getDataMoveis";
import { backDataSeriesNow } from "./getDataSeries";
import { backDataSeriesDetails } from "./SeriesDetails.jsx/getDataSeriesDetails";
import { backDataMoveiDetails } from "./MoveiDetails/getDataMoveiDetails";
import { backDataSocialMovei } from "./MoveiDetails/getDataMoveiSocial";
import { backDataCollectionMovei } from "./MoveiDetails/getDataCollectionsAndRecomendation";
import { backDataSocialSeries } from "./SeriesDetails.jsx/getDataSeriesSocial";
import { backDataExternalSeries } from "./SeriesDetails.jsx/getDataSeriesExternalAndKeywords";
import { backDataExternalMovei } from "./MoveiDetails/getDataExternalAndKeywordsmovei";
import { backDataRecommendationSeries } from "./SeriesDetails.jsx/getDataRecommendSeries";
import { backDataSearch } from "./getDataSearch";

const store = configureStore({
  reducer: {
    dataStatic,
    backDataMoveisNow,
    backDataSeriesNow,
    backDataMoveiDetails,
    backDataSeriesDetails,
    backDataExternalMovei,
    backDataSocialMovei,
    backDataCollectionMovei,
    backDataSocialSeries,
    backDataExternalSeries,
    backDataRecommendationSeries,
    backDataSearch
  }
});

export default store;
