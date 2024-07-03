import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDataTrailerSeries } from "../../../redux/SeriesDetails.jsx/getDataSeriesDetails";
import { getDataSeriesBackDrops } from "../../../redux/SeriesDetails.jsx/getDataSeriesSocial";
import { getDataSeriesRecommendations } from "../../../redux/SeriesDetails.jsx/getDataRecommendSeries";
import Loading from "../../../Component/Loading";

const MediaandRecommendSeries = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showVideos, setshowVideo] = useState(true);
  const [showBackDrops, setshowBackDrops] = useState(false);
  const [showPosters, setshowPosters] = useState(false);
  const navigate = useNavigate();

  const {
    LoadingTrailer,
    userTrailer,
    erorTrailer,
    LoadingDetails,
    userDetails,
    erorDetails
  } = useSelector((state) => state.backDataSeriesDetails);

  const { LoadindBackDrops, userBackDrops, erorBackDrops } = useSelector(
    (state) => state.backDataSocialSeries
  );

  const { LoadingRecommendations, userRecommendations, erorRecommendations } =
    useSelector((state) => state.backDataRecommendationSeries);

  useEffect(() => {
    dispatch(getDataTrailerSeries(userId));
    dispatch(getDataSeriesBackDrops(userId));
    dispatch(getDataSeriesRecommendations(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex-nowrap grid grid-rows">
      <div className="">
        <h1 className="font-bold text-2xl text-[#2dc9f0f3] mb-4 mt-8">Media</h1>
        <div className="flex">
          {/* Videos */}
          <h1
            onClick={() => {
              setshowVideo(true);
              setshowBackDrops(false);
              setshowPosters(false);
            }}
            className={
              showVideos === false
                ? "cursor-pointer ms-16 my-4 text-sm"
                : "cursor-pointer ms-16 my-4 text-sm text-purple-500 underline underline-offset-[18px] decoration-2 active:shadow-transition-all duration-200 ease-in-out active:shadow-[0px_8px_9px_-4px_rgba(59,113,202,0.3),0px_4px_18px_15px_rgba(59,113,202,0.2)] dark:shadow-[0px_20px_20px_-4px_rgba(59,113,202,0.5)] dark:active:shadow-[20px_20px_10px_20px_rgba(59,113,202,0.2),4px_4px_18px_12px_rgba(59,113,202,0.1)] "
            }
          >
            VIDEOS ({userTrailer.length})
          </h1>
          {/* BackDrops */}
          <h1
            onClick={() => {
              setshowVideo(false);
              setshowBackDrops(true);
              setshowPosters(false);
            }}
            className={
              showBackDrops === true
                ? "cursor-pointer ms-8 my-4 text-purple-500 text-sm underline underline-offset-[18px] decoration-2 active:shadow-transition-all duration-200 ease-in-out active:shadow-[0px_8px_9px_-4px_rgba(59,113,202,0.3),0px_4px_18px_15px_rgba(59,113,202,0.2)] dark:shadow-[0px_20px_20px_-4px_rgba(59,113,202,0.5)] dark:active:shadow-[20px_20px_10px_20px_rgba(59,113,202,0.2),4px_4px_18px_12px_rgba(59,113,202,0.1)]"
                : "cursor-pointer ms-8 my-4 text-sm"
            }
          >
            BACKDROPS ({userBackDrops?.backdrops.length})
          </h1>
          {/* Posters */}
          <h1
            onClick={() => {
              setshowVideo(false);
              setshowBackDrops(false);
              setshowPosters(true);
            }}
            className={
              showPosters === true
                ? "cursor-pointer ms-8 my-4 text-purple-500 text-sm underline underline-offset-[18px] decoration-2 active:shadow-transition-all duration-200 ease-in-out active:shadow-[0px_8px_9px_-4px_rgba(59,113,202,0.3),0px_4px_18px_15px_rgba(59,113,202,0.2)] dark:shadow-[0px_20px_20px_-4px_rgba(59,113,202,0.5)] dark:active:shadow-[20px_20px_10px_20px_rgba(59,113,202,0.2),4px_4px_18px_12px_rgba(59,113,202,0.1)]"
                : "cursor-pointer ms-8 my-4 text-sm"
            }
          >
            POSTERS ({userBackDrops?.posters.length})
          </h1>
        </div>
        {/* Videos */}
        <div
          className={
            showVideos === false
              ? "hidden"
              : "flex w-[450px] lg:w-[900px] md:w-[700px] overflow-x-scroll rounded-lg"
          }
        >
          {userTrailer.length > 0 ? (
            userTrailer.slice(0, 6).map((user, index) => (
              <div key={index} className="">
                <div className="z-40 border-[6px] border-blue-gray-900">
                  <iframe
                    width="400"
                    height="300"
                    src={`https://www.youtube.com/embed/${user.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            ))
          ) : (
            <div className="z-40 bg-blue-gray-900 p-4">
              No Video have been added
            </div>
          )}
          <div
            className={
              userTrailer.length > 0
                ? "rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52"
                : "hidden"
            }
          >
            <Link
              to={`/VideoSeries/${userDetails?.id}}}`}
              className="w-36 text-white flex justify-center hover:text-[#768c9c] cursor-pointer"
            >
              Show more
              <span className="ms-2 mt-1">
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
        {/* BackDrops */}
        <div
          className={
            showBackDrops === false
              ? "hidden"
              : "flex w-[450px] lg:w-[900px] md:w-[700px] overflow-x-scroll rounded-lg"
          }
        >
          {userBackDrops?.backdrops.slice(0, 6).map((user, index) => (
            <div key={index} className="">
              <div className="z-40 border-[6px] border-blue-gray-900">
                {user.file_path ? (
                  <img
                    className="w-[320px] h-[420px] max-w-none "
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                  />
                ) : (
                  <img
                    className="w-[320px] h-[420px] max-w-none "
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                  />
                )}
              </div>
            </div>
          ))}
          <div
            className={
              userBackDrops?.backdrops.length > 6
                ? "rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52"
                : "hidden"
            }
          >
            <Link
              to={`/BackDropsSeries/${userDetails?.id}}}`}
              className="w-36 text-white flex justify-center hover:text-[#768c9c] cursor-pointer"
            >
              Show more
              <span className="ms-2 mt-1">
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
        {/* Posters */}
        <div
          className={
            showPosters === false
              ? "hidden"
              : "flex w-[450px] lg:w-[900px] md:w-[700px] overflow-x-scroll rounded-lg"
          }
        >
          {userBackDrops?.posters.slice(0, 6).map((user, index) => (
            <div key={index} className="">
              <div className="z-40 border-[6px] border-blue-gray-900">
                {user.file_path ? (
                  <img
                    className="w-[320px] h-[420px] max-w-none "
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                  />
                ) : (
                  <img
                    className="w-[320px] h-[420px] max-w-none "
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                  />
                )}
              </div>
            </div>
          ))}
          <div
            className={
              userBackDrops?.posters.length > 6
                ? "rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52"
                : "hidden"
            }
          >
            <Link
              to={`/PostersSeries/${userDetails?.id}}}`}
              className="w-36 text-white flex justify-center hover:text-[#768c9c] cursor-pointer"
            >
              Show more
              <span className="ms-2 mt-1">
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className="mb-8">
        <h1 className="font-bold text-2xl text-[#2dc9f0f3] mb-4 mt-8">
          Recommendations
        </h1>
        <div className="flex w-[450px] lg:w-[900px] md:w-[700px] overflow-x-scroll gap-4">
          {userRecommendations.map((user, index) => (
            <div
              key={index}
              className="border-[8px] border-blue-gray-900 rounded-lg"
            >
              <img
                onClick={() =>
                  navigate(
                    `/seriesDetails/${user.id}/name/${user.name
                      ?.replace(/\s+/g, "-")
                      .trim()
                      .toLowerCase()}`
                  )
                }
                className="w-[280px] h-[440px] max-w-none cursor-pointer"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
              />
              <div className="bg-blue-gray-900 py-4 flex justify-between">
                <h1 className="text-white">
                  {user.name && user?.name.slice(0, 30)}
                </h1>
                <h1 className="text-[#2dc9f0f3]">
                  {Math.round(user?.vote_average * 10)}%
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaandRecommendSeries;
