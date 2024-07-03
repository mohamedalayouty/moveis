import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Component/Loading";
import { FaFileMedical } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import {
  getDataMoveiDetails,
  getDataMoveiPeople,
  getDataTrailerVideo
} from "../../redux/MoveiDetails/getDataMoveiDetails";

const BackgroundMovei = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showFrame, setshowFrame] = useState(true);

  const {
    LoadingDetails,
    userDetails,
    erorDetails,
    LoadingPeople,
    userPeople,
    erorPeople,
    LoadingTrailer,
    userTrailer,
    erorTrailer
  } = useSelector((state) => state.backDataMoveiDetails);

  useEffect(() => {
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataMoveiPeople(userId));
    dispatch(getDataTrailerVideo(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }
  if (LoadingPeople) {
    return <Loading></Loading>;
  }

  if (LoadingTrailer) {
    return <Loading></Loading>;
  }

  return (
    <div
      className={
        showFrame === false
          ? "lg:h-full flex relative justify-center m opacity-80"
          : "lg:h-full flex relative justify-center m"
      }
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${userDetails?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%"
      }}
    >
      <div
        onClick={() => {
          setshowFrame(true);
        }}
        className={
          showFrame === false &&
          " z-30 overflow-hidden fixed w-full h-full flex justify-center items-center"
        }
      >
        <div className=" border-[18px] border-blue-gray-900 z-40">
          <iframe
            style={
              showFrame === true ? { display: "none" } : { display: "block" }
            }
            width="465"
            height="400"
            src={`https://www.youtube.com/embed/${userTrailer[0]?.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      <h1 className="absolute z-10 mt-20 text-center font-bold text-3xl text-[#2dcaf0]">
        Movei - Details
      </h1>
      <div className="z-10 mt-24 flex lg:flex-row flex-col items-center gap-5 w-full justify-center">
        <div className="lg:w-1/4 w-1/2">
          {userDetails.poster_path ? (
            <img
              src={`https://media.themoviedb.org/t/p/w500/${userDetails?.poster_path}`}
              alt=""
              className="mt-8"
            />
          ) : (
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              alt=""
              className="mt-8"
            />
          )}
        </div>
        <div className="md:w-[690px] lg:text-start text-center">
          <h1 className=" font-semibold text-white text-3xl mt-10">
            {userDetails?.title}
          </h1>
          <div className="font-bold text-white text-sm my-4">
            <span className="me-2"> {userDetails?.release_date}</span>
            <span className="me-2">
              ({userDetails?.original_language.toUpperCase()})
            </span>
            <span>👉 </span>
            <span className="me-1">
              {userDetails?.genres.map((user) => user?.name).join(", ")}
            </span>
            <span>👈</span>
            <span className="ms-2">
              {Math.floor(userDetails?.runtime / 60)}h
              <span className="ms-1">
                {Math.floor(userDetails?.runtime % 60)}min
              </span>
            </span>
          </div>
          <div>
            <h1 className="font-semibold font-sans text-[#2dcaf0] text-3xl my-4">
              OverView :
              <span className="font-bold text-white text-sm ms-2">
                {userDetails?.overview}
              </span>
            </h1>
          </div>
          <div className="text-white text-xl font-semibold">
            <h1 className="font-sans text-[#2dcaf0] text-3xl my-6">
              Casting :
            </h1>
            <div className="text-[18px]">
              <div className="flex md:flex-row flex-col justify-evenly md:ms-20 gap-8">
                <span>
                  {userPeople?.cast[0]?.name}
                  <h1 className="text-center text-sm mt-2 text-[#fbbf24]">
                    {userPeople?.cast[0]?.known_for_department}
                  </h1>
                </span>
                <span>||</span>
                <span>
                  {userPeople?.cast[1]?.name}
                  <h1 className="text-center text-sm mt-2 text-[#fbbf24]">
                    {userPeople?.cast[1]?.known_for_department}
                  </h1>
                </span>
              </div>
            </div>

            <div className="my-8 text-[18px]">
              <div className="flex md:flex-row flex-col justify-evenly md:ms-14 gap-8">
                <span>
                  {userPeople?.crew[2]?.name}
                  <h1 className="text-center text-sm mt-2 text-[#fbbf24]">
                    {userPeople?.crew[2]?.department}
                  </h1>
                </span>
                <span>||</span>
                <span>
                  {userPeople?.crew[0]?.name}
                  <h1 className="text-center text-sm mt-2 text-[#fbbf24]">
                    {userPeople?.crew[0]?.department}
                  </h1>
                </span>
                <span>||</span>
                <span>
                  {userPeople?.cast[1]?.name}
                  <h1 className="text-center text-sm mt-2 text-[#fbbf24]">
                    {userPeople?.cast[1]?.known_for_department}
                  </h1>
                </span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col text-center justify-evenly md:ms-20 gap-8 text-white cursor-pointer">
              <span className="">
                <FaFileMedical className="text-[#16a34a] inline" />
                <h1 className=" text-sm">Add To Wath List</h1>
              </span>
              <span>
                <FaRegStar className="text-[#fbbf24] inline" />
                <h1 className=" text-sm">Rate Movei</h1>
              </span>
              <span>
                <IoMdPlayCircle
                  className="text-[#dc2626] text-2xl inline"
                  onClick={() => {
                    setshowFrame(false);
                  }}
                />
                <h1 className="text-sm">Play Trailer</h1>
              </span>
            </div>
            <div className="text-center my-2">
              <Link to={-1}>
                <button
                  type="button"
                  className="mt-2 mb-1 px-[7px] py-[8px] inline-block outline-2 rounded-md border-[1px] border-[#0dcaf0] text-xs font-medium uppercase leading-normal text-[#0dcaf0] transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#0dcaf0] hover:bg-opacity-30 hover:text-[#0dcaf0] focus:border-info-600 focus:text-[#0dcaf0] focus:ring-0 active:border-cyan-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                  Back A Steb
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMovei;
