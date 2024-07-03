import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataAllSeries } from "../../redux/getDataSeries";
import ReactStars from "react-stars";
import Loading from "../../Component/Loading";
import { Link } from "react-router-dom";

const TopRatedSeries = () => {
  const dispatch = useDispatch();

  const { topLoading, topUsers, topEror } = useSelector(
    (state) => state.backDataSeriesNow
  );
  useEffect(() => {
    dispatch(getDataAllSeries());
  }, []);

  if (topLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-8">
      <div className="mb-12 mx-8">
        <h1 className="font-bold text-cyan-400 text-3xl mx-8 mb-16 text-center lg:text-start">
          TOP SERIES
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {topUsers.map((user, index) => (
              <div
                key={index}
                className="card glass w-72 border border-solid rounded-lg border-gray-800 h-[35rem]"
              >
                <img
                  className="rounded-t-lg h-96"
                  src={`https://media.themoviedb.org/t/p/w500${user.poster_path}`}
                  alt="Shoes"
                />
                <div className="card-body bg-[#212529] rounded-b-sm p-2 text-white">
                  <h1 className="card-title font-sans text-lg font-medium mt-1">
                    TITLE : {user.name}
                  </h1>
                  <div className=" text-sm flex justify-between mt-2">
                    <h1>
                      RATE :
                      <span className="text-[#0dcaf0] ms-1">
                        {user.vote_average}
                      </span>
                    </h1>
                    <ReactStars
                      count={5}
                      size={24}
                      value={user.vote_average / 2}
                      color2={"#ffd700"}
                      edit={false}
                      fourth={true}
                    />
                  </div>
                  <div className="text-center">
                    <Link
                      to={`/seriesDetails/${user.id}/name/${user.name
                        ?.replace(/\s+/g, "-")
                        .trim()
                        .toLowerCase()}`}
                    >
                      <button
                        type="button"
                        className="mt-2 mb-1 px-[12px] py-[10px] inline-block outline-2 rounded-md border-[1px] border-[#0dcaf0] text-sm font-medium uppercase leading-normal text-[#0dcaf0] transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#0dcaf0] hover:bg-opacity-30 hover:text-[#0dcaf0] focus:border-info-600 focus:text-[#0dcaf0] focus:ring-0 active:border-cyan-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      >
                        DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedSeries;
