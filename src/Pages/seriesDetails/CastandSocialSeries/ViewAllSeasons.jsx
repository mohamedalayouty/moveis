import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDataSeriesDetails } from "../../../redux/SeriesDetails.jsx/getDataSeriesDetails";
import { GoArrowLeft } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const ViewAllSeasons = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { LoadingDetails, userDetails, erorDetails } = useSelector(
    (state) => state.backDataSeriesDetails
  );

  useEffect(() => {
    dispatch(getDataSeriesDetails(userId));
  }, [userId]);

  return (
    <div>
      <div className="w-full h-60 bg-[#212529] mt-4 flex items-center">
        <img
          className="rounded-t-lg h-44 ms-32 mt-8"
          src={`https://media.themoviedb.org/t/p/w500${userDetails?.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="text-white text-2xl ms-4 font-bold">
            {userDetails?.name}
            <span className="ms-3 text-[#4f5c66]">
              ({userDetails?.last_air_date.slice(0, 4)})
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

      <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:gap-2 md:gap-10 lg:me-8 me-16 ms-16 mb-16 lg:ms-8">
        {userDetails?.seasons.map((user, index) => (
          <div key={index} className="flex lg:flex-row flex-col mt-12">
            {user.poster_path ? (
              <img
                className="lg:rounded-l-md rounded-t-md lg:h-72 h-full max-w-none lg:w-60 w-full border-[1px] lg:border-e-0 border-b-0 border-blue-gray-800"
                src={`https://media.themoviedb.org/t/p/w500${user.poster_path}`}
                alt=""
              />
            ) : (
              <img
                className="lg:rounded-l-md rounded-t-md lg:h-72 h-full max-w-none lg:w-60 w-full border-[1px] lg:border-e-0 border-b-0 border-blue-gray-800"
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              ></img>
            )}
            <div className="card-body justify-center p-2 block bg-[#212529] lg:text-start text-center w-full rounded-b-md lg:rounded-b-none lg:rounded-r-md rounded me-4 text-white">
              <div className="text-xl font-semibold flex-col lg:flex items-center mt-6">
                <span className="font-sans text-3xl font-bold">
                  {user?.name}
                </span>
                <div
                  className={
                    user?.vote_average > 0
                      ? "ms-4 flex bg-white px-2 rounded-lg justify-center items-center text-black"
                      : "hidden"
                  }
                >
                  <span className="text-base">
                    <FaStar />
                  </span>
                  <span className="text-base ms-1">
                    {user?.vote_average > 0 && user?.vote_average}
                  </span>
                </div>
                <span className="ms-2 text-sm">
                  {user?.air_date.slice(0, 4)} |
                </span>
                <span className="text-base ms-1">
                  {user?.episode_count} Episodes
                </span>
              </div>
              <div className="text-sm flex-col justify-between mt-1">
                <h1>
                  <span className="text-[#4f5c66] ms-1 text-base">
                    {user?.release_date}
                  </span>
                </h1>
                <h1 className="text-base mb-6">
                  Season
                  <span className="text-[#2dc9f0f3] font-bold mx-1">
                    {user?.season_number}
                  </span>
                  {/* Erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
                  <span>
                    of {userDetails?.name} premiered on
                    <span className="text-[#2dc9f0f3] font-bold ms-2">
                      {user?.air_date}.
                    </span>
                  </span>
                  {/* Erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
                </h1>
                <h1 className="mb-2">
                  {user?.overview
                    ? user?.overview
                    : "There is no Overview for this Season"}
                </h1>
              </div>
              <div className="text-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllSeasons;
