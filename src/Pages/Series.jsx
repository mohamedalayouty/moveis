import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import Loading from "../Component/Loading";
import { Link } from "react-router-dom";
import {
  decreament,
  lastNumber,
  increament,
  startNumber
} from "../redux/staticState";
import { getDataAllSeries } from "../redux/getDataSeries";
import ShowMoreText from "react-show-more-text";
import Footer from "../Component/Footer";

const Series = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.dataStatic);

  const { AllLoading, AllUsers, AllEror } = useSelector(
    (state) => state.backDataSeriesNow
  );

  useEffect(() => {
    dispatch(getDataAllSeries(count));
  }, [count]);

  if (AllLoading) {
    <Loading></Loading>;
  }
  return (
    <div className=" text-white mt-20">
      <div className="mb-12 mx-8">
        <h1 className=" font-semibold text-3xl mx-6 mb-16 text-center">
          <p className="mb-2">SERIES</p>
          <p>
            PAGE NUMBER <span className="text-[#0dcaf0]">{count}</span> FROM
            <span className="text-[#0dcaf0]"> 500</span>
          </p>
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AllUsers.map((user, index) => (
              <div
                key={index}
                className="card glass w-64 border border-solid rounded-lg border-gray-800"
              >
                <img
                  className="rounded-t-lg h-96"
                  src={`https://media.themoviedb.org/t/p/w500${user.poster_path}`}
                />
                <div className="card-body bg-[#212529] rounded-b-sm p-2 text-white">
                  <div className="card-title font-sans font-medium mt-1">
                    <h1 className="text-[#0dcaf0] text-xl">
                      TITLE :
                      <span className="text-white text-lg"> {user.name}</span>
                    </h1>
                  </div>
                  <div className="text-[15px]">
                    <ShowMoreText
                      lines={1}
                      more="Show more"
                      less="Show less"
                      className="cursor-pointer"
                      anchorClass="show-more-less-clickable underline text-[#0dcaf0]"
                      expanded={false}
                      width={280}
                      truncatedEndingComponent={"... "}
                    >
                      <span className="text-[#0dcaf0] text-lg font-semibold">
                        OVERVIEW :{" "}
                      </span>
                      <span className="text-white text-lg font-semibold">
                        {user.overview}
                      </span>
                    </ShowMoreText>
                  </div>
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

      <div className="text-center mt-8 mb-16 rounded-md flex justify-center">
        <ul className="text-[#0dcaf0] flex-row menu menu-vertical lg:menu-horizontal menu-md rounded-box">
          <li
            className={
              count == 1 ? "bg-gray-300 rounded-s-md" : "bg-white rounded-s-md"
            }
          >
            <a
              onClick={() => dispatch(startNumber())}
              className={count == 1 && "btn-disabled text-gray-500 h-10 w-8"}
            >
              «
            </a>
          </li>

          <li className={count == 1 ? "bg-gray-300" : "bg-white"}>
            <a
              onClick={() => dispatch(decreament())}
              className={count == 1 && "btn-disabled text-gray-500 h-10 w-8"}
            >
              «
            </a>
          </li>

          <li className="bg-white text-center">
            <a className="h-10">{count}</a>
          </li>

          <li className={count == 500 ? "bg-gray-300" : "bg-white"}>
            <a
              onClick={() => dispatch(increament())}
              className={count == 500 && "btn-disabled text-gray-500 h-10 w-8"}
            >
              »
            </a>
          </li>

          <li
            className={
              count == 500
                ? "bg-gray-300 rounded-e-md"
                : "bg-white rounded-e-md"
            }
          >
            <a
              onClick={() => dispatch(lastNumber())}
              className={count == 500 && "btn-disabled text-gray-500 h-10 w-8"}
            >
              »
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
