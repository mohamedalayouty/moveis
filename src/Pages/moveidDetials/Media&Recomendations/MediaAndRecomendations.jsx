import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDataTrailerVideo } from "../../../redux/MoveiDetails/getDataMoveiDetails";
import { getDataMoveiBackDrops } from "../../../redux/MoveiDetails/getDataMoveiSocial";
import { getDataMoveiRecommendations } from "../../../redux/MoveiDetails/getDataCollectionsAndRecomendation";

const MediaAndRecomendations = () => {
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
  } = useSelector((state) => state.backDataMoveiDetails);

  const { LoadindBackDrops, userBackDrops, erorBackDrops } = useSelector(
    (state) => state.backDataSocialMovei
  );

  const {
    LoadingCollections,
    userCollections,
    erorCollections,
    LoadingRecommendations,
    userRecommendations,
    erorRecommendations
  } = useSelector((state) => state.backDataCollectionMovei);

  useEffect(() => {
    dispatch(getDataTrailerVideo(userId));
    dispatch(getDataMoveiBackDrops(userId));
    dispatch(getDataMoveiRecommendations(userId));
  }, [userId]);

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
          {userTrailer.slice(0, 6).map((user, index) => (
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
          ))}
          <div className="rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52">
            <Link
              to={`/Video/${userDetails?.id}}}`}
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
          <div className="rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52">
            <Link
              to={`/BackDrops/${userDetails?.id}}}`}
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
          <div className="rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52">
            <Link
              to={`/PostersMovei/${userDetails?.id}}}`}
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
      <div>
        {/* Collections erorrrrrr*/}
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${userDetails?.belongs_to_collection?.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "25% 18%"
          }}
          className={
            userDetails?.belongs_to_collection &&
            userDetails?.belongs_to_collection !== "string"
              ? "my-12 w-[450px] lg:w-[900px] md:w-[700px] h-[280px] relative m"
              : "hidden"
          }
        >
          <div className="z-30 overflow-hidden absolute w-full text-center h-full flex-col justify-center items-center">
            <h1 className="text-white font-bold text-3xl my-4">
              {userCollections?.name}
            </h1>
            <h1 className="font-bold text-[#2dc9f0f3] mb-2">includes :</h1>
            <div className="z-30 text-white font-bold">
              {userCollections?.parts.map((user) => (
                <div className="flex-col">
                  {user.length}
                  {user.original_title}
                </div>
              ))}

              <Link
                to={`/CollectionMovei/${
                  userDetails?.belongs_to_collection?.id
                }/title/${userDetails?.belongs_to_collection?.name
                  ?.replace(/\s+/g, "-")
                  .trim()
                  .toLowerCase()}`}
              >
                <button className="my-4 text-[#2dc9f0f3] border-gray-50 rounded-3xl outline-2 px-4 py-2 hover:bg-white border-[1px]">
                  VIEW THE COLLECTION
                </button>
              </Link>
            </div>
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
                    `/moveiDetails/${user.id}/title/${user.title
                      ?.replace(/\s+/g, "-")
                      .trim()
                      .toLowerCase()}`
                  )
                }
                className="w-[280px] h-[440px] max-w-none cursor-pointer"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
              />
              <div className="bg-blue-gray-900 py-4 flex justify-between">
                <h1 className="text-white">{user?.title?.slice(0, 30)}</h1>
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

export default MediaAndRecomendations;
