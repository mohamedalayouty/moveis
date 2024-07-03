import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Footer from "../../../Component/Footer";
import {
  getDataMoveiDetails,
  getDataMoveiPeople
} from "../../../redux/MoveiDetails/getDataMoveiDetails";
import Loading from "../../../Component/Loading";

const FullCastandCrew = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { LoadingDetails, userDetails, erorDetails, userPeople } = useSelector(
    (state) => state.backDataMoveiDetails
  );

  useEffect(() => {
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataMoveiPeople(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col mt-4">
      <div className="w-full h-60 bg-[#212529] mt-4 flex items-center">
        <img
          className="rounded-t-lg h-44 ms-32 mt-8"
          src={`https://media.themoviedb.org/t/p/w500${userDetails?.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="text-white text-2xl ms-4 font-bold">
            {userDetails?.original_title}
            <span className="ms-3 text-[#4f5c66]">
              ({userDetails?.release_date.slice(0, 4)})
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

      <div className="flex mt-16 ms-32">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-3xl">
            Cast
            <span className="text-[#2dc9f0f3] ms-2">
              {userPeople?.cast.length}
            </span>
          </h1>
          {userPeople?.cast.length > 0 ? (
            userPeople?.cast.map((user, index) => (
              <div key={index} className="card glass flex flex-row mt-6">
                {user.profile_path ? (
                  <img
                    className="rounded-t-lg h-60 max-w-none w-44"
                    src={`https://media.themoviedb.org/t/p/w500${user.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded-t-lg h-60 max-w-none w-44"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    alt=""
                  />
                )}
                <div className="card-body bg-[#212529] rounded-b-sm w-52 text-white justify-center">
                  <h1 className="card-title font-sans text-2xl font-medium mt-1">
                    {user?.name}
                  </h1>
                  <div className=" text-sm flex justify-between mt-2">
                    <h1>
                      <span className="text-[#4f5c66] ms-1 text-lg">
                        {user?.character}
                      </span>
                    </h1>
                  </div>
                  <div className="text-center"></div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-8">There are no crew records added to .</h1>
          )}
        </div>

        <div className=" ms-52">
          <h1 className="text-white font-bold text-3xl">
            Crew
            <span className="text-[#2dc9f0f3] ms-2">
              {userPeople?.crew.length}
            </span>
          </h1>
          {userPeople?.crew.length > 0 ? (
            userPeople?.crew.map((user, index) => (
              <div key={index} className="card glass flex flex-row mt-6">
                {user.profile_path ? (
                  <img
                    className="rounded-t-lg h-60 max-w-none w-44"
                    src={`https://media.themoviedb.org/t/p/w500${user.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded-t-lg h-60 max-w-none w-44"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    alt=""
                  />
                )}
                <div className="card-body bg-[#212529] rounded-b-sm w-52 text-white justify-center">
                  <h1 className="card-title font-sans text-2xl font-medium mt-1">
                    {user?.name}
                  </h1>
                  <div className=" text-sm flex justify-between mt-2">
                    <h1>
                      <span className="text-[#4f5c66] ms-1 text-lg">
                        {user?.character}
                      </span>
                    </h1>
                  </div>
                  <div className="text-center"></div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-8">There are no crew records added to .</h1>
          )}
        </div>
      </div>
      <div className="text-center my-4">
        <Link to={-1}>
          <button
            type="button"
            className="mt-2 mb-1 px-[7px] py-[8px] inline-block outline-2 rounded-md border-[1px] border-[#0dcaf0] text-xs font-medium uppercase leading-normal text-[#0dcaf0] transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#0dcaf0] hover:bg-opacity-30 hover:text-[#0dcaf0] focus:border-info-600 focus:text-[#0dcaf0] focus:ring-0 active:border-cyan-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Back A Steb
          </button>
        </Link>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default FullCastandCrew;
