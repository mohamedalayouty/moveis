import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import {
  getDataMoveiDetails,
  getDataMoveiPeople
} from "../../../redux/MoveiDetails/getDataMoveiDetails";
import { getDataMoveiReview } from "../../../redux/MoveiDetails/getDataMoveiSocial";
import MediaAndRecomendations from "../Media&Recomendations/MediaAndRecomendations";
import ShowMoreText from "react-show-more-text";
import Loading from "../../../Component/Loading";
import ExternalAndKeywordsMovei from "../ExternalAndKeywordsMovei";

const CastandSocialMovei = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const {
    LoadingPeople,
    userPeople,
    erorPeople,
    LoadingDetails,
    userDetails,
    erorDetails
  } = useSelector((state) => state.backDataMoveiDetails);

  const { LoadingReview, userReview, erorReview } = useSelector(
    (state) => state.backDataSocialMovei
  );

  useEffect(() => {
    dispatch(getDataMoveiPeople(userId));
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataMoveiReview(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }
  if (LoadingPeople) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:flex mx-8">
      <div className="flex flex-col mt-8">
        {/* Billed Cast */}
        <h1 className="z-10 font-bold text-xl text-[#2dc9f0f3] mb-4">
          Top Billed Cast
        </h1>

        <div
          className={
            userPeople?.cast.length >= 5
              ? "flex flex-nowrap gap-4 overflow-x-scroll w-[450px] lg:w-[900px] md:w-[700px]"
              : "flex flex-nowrap gap-4 w-[450px] lg:w-[900px] md:w-[700px]"
          }
        >
          {userPeople?.cast.slice(0, 10).map((user, index) => (
            <div key={index} className="card glass rounded-t-lg">
              {user.profile_path ? (
                <img
                  className="rounded-t-lg h-48 max-w-none w-36"
                  src={`https://media.themoviedb.org/t/p/w500${user.profile_path}`}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-t-lg h-48 max-w-none w-36"
                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                  alt=""
                />
              )}
              <div className="card-body bg-[#212529] rounded-b-sm p-2 text-white">
                <h1 className="card-title font-sans text-lg font-medium mt-1">
                  {user?.name}
                </h1>
                <div className=" text-sm flex justify-between mt-2">
                  <h1>
                    <span className="text-white ms-1">{user?.character}</span>
                  </h1>
                </div>
                <div className="text-center"></div>
              </div>
            </div>
          ))}
          <div
            className={
              userPeople?.cast.length >= 10
                ? "rounded-t-lg bg-[#212529] flex text-center justify-center items-center w-52"
                : "hidden"
            }
          >
            <Link
              to={`/fullCast&Crew/${userDetails?.id}}}`}
              className={
                userPeople?.cast.length >= 10
                  ? "w-36 text-white flex justify-center hover:text-[#768c9c] cursor-pointer"
                  : "hidden"
              }
            >
              Show more
              <span className="ms-2 mt-1">
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <Link
          to={`/fullCast&Crew/${userDetails?.id}}}`}
          className="text-[#2dc9f0f3] mt-4 text-sm"
        >
          Full Cast & Crew
        </Link>
        {/* Review */}
        <div>
          <h1 className="z-10 font-bold text-2xl text-[#2dc9f0f3] mb-4 mt-12">
            Social
          </h1>
          <h1 className="cursor-pointer ms-8 my-4 text-purple-500 text-base underline underline-offset-[18px] decoration-2 active:shadow-transition-all duration-200 ease-in-out active:shadow-[0px_8px_9px_-4px_rgba(59,113,202,0.3),0px_4px_18px_15px_rgba(59,113,202,0.2)] dark:shadow-[0px_20px_20px_-4px_rgba(59,113,202,0.5)] dark:active:shadow-[20px_20px_10px_20px_rgba(59,113,202,0.2),4px_4px_18px_12px_rgba(59,113,202,0.1)]">
            Reviews
            {userReview?.results.length}
          </h1>
          <div className="card-body w-[450px] lg:w-[900px] md:w-[700px] flex-row bg-[#212529] rounded-b-sm p-2 text-white border border-white border-s-0 border-e-0 border-b-0">
            <div
              className={
                userReview?.results.length > 0 ? "avatar placeholder" : "hidden"
              }
            >
              <div className="bg-blue-gray-100 text-white rounded-full w-16 h-16">
                <span className="text-3xl">R</span>
              </div>
            </div>
            {userReview?.results.length > 0 ? (
              <div className="font-sans mt-1 flex-col ms-12">
                <h1 className="text-2xl font-bold my-2">
                  A review by
                  <span className="text-[#2dc9f0f3] ms-1">
                    {userReview?.results[0]?.author}
                  </span>
                </h1>
                <h1 className="font-medium text-base my-2">
                  Written by
                  <span className="text-[#2dc9f0f3] mx-2 font-bold">
                    {userReview?.results[0]?.author}
                  </span>
                  on
                  <span className="text-[#2dc9f0f3] ms-2 font-bold">
                    {userReview?.results[0]?.created_at.slice(0, 10)}
                  </span>
                </h1>
                <h1 className="text-[#2556f8f3] text-start my-2 text-xl">
                  Content :-
                </h1>
                <h1 className="ms-1 text-white font-medium my-2">
                  <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="cursor-pointer"
                    anchorClass="show-more-less-clickable underline text-[#0dcaf0]"
                    expanded={false}
                    width={700}
                    truncatedEndingComponent={"... "}
                  >
                    <span className="">{userReview?.results[0]?.content}</span>
                  </ShowMoreText>
                </h1>
              </div>
            ) : (
              <div>
                <h1>We don't have any reviews</h1>
              </div>
            )}
          </div>
        </div>
        <MediaAndRecomendations />
      </div>
      {/* Social */}
      <ExternalAndKeywordsMovei />
    </div>
  );
};

export default CastandSocialMovei;
