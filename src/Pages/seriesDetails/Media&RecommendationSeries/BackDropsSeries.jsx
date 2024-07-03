import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Footer from "../../../Component/Footer";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane
} from "tw-elements-react";
import Loading from "../../../Component/Loading";
import { getDataSeriesDetails } from "../../../redux/SeriesDetails.jsx/getDataSeriesDetails";
import { getDataSeriesBackDrops } from "../../../redux/SeriesDetails.jsx/getDataSeriesSocial";

const BackDropsSeries = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const { LoadingDetails, userDetails, erorDetails } = useSelector(
    (state) => state.backDataSeriesDetails
  );

  const { userlang1, userlang2, userlang3, userlang4, userlang5 } = useSelector(
    (state) => state.backDataSocialSeries
  );
  useEffect(() => {
    dispatch(getDataSeriesDetails(userId));
    dispatch(getDataSeriesBackDrops(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex-col">
      <div className="w-full h-60 bg-[#212529] mt-4 flex items-center">
        <img
          className="rounded-t-lg h-44 ms-32 mt-8"
          src={`https://media.themoviedb.org/t/p/w500${userDetails?.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="text-white text-2xl ms-4 font-bold">
            {userDetails?.original_title}
            <span className="ms-3 text-[#4f5c66]">
              ({userDetails?.first_air_date.slice(0, 4)})
            </span>
          </h1>
          <Link
            to={-1}
            className="ms-3 text-[#4f5c66] flex mt-2 hover:text-white"
          >
            <span className="mt-1 ms-1">
              <GoArrowLeft />
            </span>
            <span className="ms-1">Back to main</span>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-[#2dc9f0f3] my-12 ms-16">
          Social
        </h1>

        <div className="mb-3 flex-col justify-center items-center">
          <TETabs className="flex justify-center border-white">
            <TETabsItem
              className={
                userlang1.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 active:text-purple-500 border-purple-500"
                  : " hidden"
              }
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              No Language ({userlang1.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlang2.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              English ({userlang2.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlang3.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              French <span>({userlang3.length})</span>
            </TETabsItem>
            <TETabsItem
              className={
                userlang4.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
            >
              {userlang4[0]?.iso_639_1 && (
                <span>Italian ({userlang4.length})</span>
              )}
            </TETabsItem>
            <TETabsItem
              className={
                userlang5.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
            >
              Portuguese ({userlang5.length})
            </TETabsItem>
          </TETabs>

          <TETabsContent className="flex justify-center">
            <TETabsPane
              show={basicActive === "tab1"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlang1.map((user, index) => (
                <div className="flex">
                  <div key={index} className="">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab2"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlang2.map((user, index) => (
                <div className="flex">
                  <div key={index} className="mx-1">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none"
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab3"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlang3.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab4"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlang4.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab5"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlang5.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
          </TETabsContent>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default BackDropsSeries;
