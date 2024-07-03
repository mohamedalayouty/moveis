import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDataMoveiCollections } from "../../../redux/MoveiDetails/getDataCollectionsAndRecomendation";
import {
  getDataMoveiDetails,
  getDataMoveiPeople
} from "../../../redux/MoveiDetails/getDataMoveiDetails";
import Footer from "../../../Component/Footer";

const CollectionMovei = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { LoadingDetails, userDetails, erorDetails, userPeople } = useSelector(
    (state) => state.backDataMoveiDetails
  );

  const { LoadingCollections, userCollections, erorCollections } = useSelector(
    (state) => state.backDataCollectionMovei
  );

  useEffect(() => {
    dispatch(getDataMoveiCollections(userId));
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataMoveiPeople(userId));
  }, [userId]);

  return (
    <div>
      <div
        className="lg:h-[95vh] flex relative m justify-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${userCollections?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "25% 18%"
        }}
      >
        <div className="z-10 mt-20 flex lg:flex-row flex-col gap-2 w-full justify-center lg:items-start items-center">
          <div className="lg:w-1/4 w-1/2">
            <img
              src={`https://media.themoviedb.org/t/p/w500/${userCollections?.poster_path}`}
              alt=""
              className="mt-4 lg:h-[450px]"
            />
          </div>
          <div className="md:w-[690px] lg:text-start text-center">
            <h1 className="font-semibold text-white text-3xl mt-10">
              {userCollections?.name}
            </h1>
            <div className="mt-4 text-white font-bold">
              {userDetails && userDetails !== "string" ? (
                userDetails?.genres.map((user) => user.name).join(" , ")
              ) : (
                <span className="font-bold">
                  There is no Genres for this{userCollections?.name}
                </span>
              )}
            </div>
            <div>
              <h1 className="font-semibold font-sans text-[#0dcaf0] text-2xl my-4">
                OverView :
                <span className="font-bold text-white text-sm ms-2">
                  {userCollections?.overview}
                </span>
              </h1>
              <h1 className="font-semibold font-sans text-[#0dcaf0] text-2xl my-4">
                Number Of Moveis :
                <span className="font-bold text-white text-xl ms-2">
                  {userCollections?.parts.length}
                </span>
              </h1>
              <h1 className="font-semibold font-sans text-[#0dcaf0] text-2xl my-4">
                Revenue :
                <span className="font-bold text-white text-xl ms-2">
                  ${userDetails?.revenue}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex-col">
        <h1 className="font-bold text-3xl text-[#2dc9f0f3] ms-16 mb-4 my-8 lg:text-start text-center">
          Featured Cast
        </h1>

        <div>
          <div className="flex flex-col lg:items-start items-center ms-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {userPeople?.cast.slice(0, 14).map((user, index) => (
                <div key={index} className="flex flex-row">
                  {user.profile_path ? (
                    <img
                      className="rounded-l-lg h-20 max-w-none w-16"
                      src={`https://media.themoviedb.org/t/p/w500${user.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="rounded-l-lg h-20 max-w-none w-16"
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                      alt=""
                    />
                  )}
                  <div className="bg-[#212529] text-white justify-center rounded-e-lg w-60 p-2">
                    <h1 className="font-sans text-lg font-bold mt-1">
                      {user?.name}
                    </h1>
                    <div className="text-sm flex justify-between mt-2">
                      <h1>
                        <span className="text-[#4f5c66] ms-1 text-base">
                          {user?.character}
                        </span>
                      </h1>
                    </div>
                    <div className="text-center"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className="font-bold text-3xl text-[#2dc9f0f3] mb-4 ms-16 mt-28 lg:text-start text-center">
            Featured Crew
          </h1>

          <div className="flex flex-col lg:items-start items-center ms-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {userPeople?.crew.slice(0, 10).map((user, index) => (
                <div key={index} className="flex flex-row">
                  {user.profile_path ? (
                    <img
                      className="rounded-l-lg h-20 max-w-none w-16"
                      src={`https://media.themoviedb.org/t/p/w500${user.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="rounded-l-lg h-20 max-w-none w-16"
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                      alt=""
                    />
                  )}
                  <div className="bg-[#212529] text-white justify-center rounded-e-lg w-60 p-2">
                    <h1 className="font-sans text-lg font-bold mt-1">
                      {user?.name}
                    </h1>
                    <div className="text-sm flex justify-between mt-2">
                      <h1>
                        <span className="text-[#4f5c66] ms-1 text-base">
                          {user?.character}
                        </span>
                      </h1>
                    </div>
                    <div className="text-center"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className="font-bold text-3xl text-[#2dc9f0f3] ms-4 mb-4 mt-28 lg:text-start text-center">
            {userCollections?.parts.length} Moveis
          </h1>

          <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:gap-2 md:gap-10 lg:me-4 me-16 ms-16 mb-16 lg:ms-4">
            {userCollections?.parts.map((user, index) => (
              <div key={index} className="flex lg:flex-row flex-col mt-6">
                {user.poster_path ? (
                  <img
                    className="lg:rounded-l-md rounded-t-md lg:h-40 h-full max-w-none lg:w-32 w-full border-[1px] lg:border-e-0 border-b-0 border-blue-gray-800"
                    src={`https://media.themoviedb.org/t/p/w500${user.poster_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="lg:rounded-l-md rounded-t-md lg:h-40 h-full max-w-none lg:w-32 w-full border-[1px] lg:border-e-0 border-b-0 border-blue-gray-800"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    alt=""
                  />
                )}
                <div className="card-body block bg-[#212529] lg:text-start text-center w-full rounded-b-md lg:rounded-b-none lg:rounded-r-md rounded lg:h-40 me-4 text-white justify-center">
                  <h1 className="font-sans text-base font-bold mt-1">
                    {user?.title}
                  </h1>
                  <div className="text-sm flex-col justify-between mt-1">
                    <h1>
                      <span className="text-[#4f5c66] ms-1 text-base">
                        {user?.release_date}
                      </span>
                    </h1>
                    <h1>
                      <span className="text-white font-medium ms-1 text-base">
                        {user?.overview.slice(0, 169)}...
                      </span>
                    </h1>
                  </div>
                  <div className="text-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionMovei;
