import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getDataMoveiDetails,
  getDataTrailerVideo
} from "../../../redux/MoveiDetails/getDataMoveiDetails";
import { GoArrowLeft } from "react-icons/go";
import Footer from "../../../Component/Footer";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane
} from "tw-elements-react";
import Loading from "../../../Component/Loading";

const VideoTrailer = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const {
    LoadingDetails,
    userDetails,
    erorDetails,
    userType1,
    userType2,
    userType3,
    userType4,
    userType5
  } = useSelector((state) => state.backDataMoveiDetails);

  useEffect(() => {
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataTrailerVideo(userId));
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
      <div>
        <h1 className="font-bold text-3xl text-[#2dc9f0f3] my-12 ms-16">
          Social
        </h1>

        <div className="mb-3 flex-col ">
          <TETabs className="flex justify-center border-white">
            <TETabsItem
              className={
                userType1.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 active:text-purple-500 border-purple-500"
                  : " hidden"
              }
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              {userType1[0]?.type} ({userType1.length})
            </TETabsItem>
            <TETabsItem
              className={
                userType2.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              {userType2[0]?.type} ({userType2.length})
            </TETabsItem>
            <TETabsItem
              className={
                userType3.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              {userType3[0]?.type} <span>({userType3.length})</span>
            </TETabsItem>
            <TETabsItem
              className={
                userType4.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
            >
              {userType4[0]?.type && (
                <span>
                  {userType4[0]?.type} ({userType4.length})
                </span>
              )}
            </TETabsItem>
            <TETabsItem
              className={
                userType5.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
            >
              {userType5[0]?.type} ({userType5.length})
            </TETabsItem>
          </TETabs>

          <TETabsContent>
            <TETabsPane show={basicActive === "tab1"}>
              {userType1.map((user, index) => (
                <div className="flex-col">
                  <div key={index} className="mx-16">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <iframe
                        width={"100%"}
                        height="310"
                        src={`https://www.youtube.com/embed/${user.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane show={basicActive === "tab2"}>
              {userType2.map((user, index) => (
                <div className="flex-col">
                  <div key={index} className="mx-16">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <iframe
                        width={"100%"}
                        height="310"
                        src={`https://www.youtube.com/embed/${user.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane show={basicActive === "tab3"}>
              {userType3.map((user, index) => (
                <div className="flex-col">
                  <div key={index} className="mx-16">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <iframe
                        width={"100%"}
                        height="310"
                        src={`https://www.youtube.com/embed/${user.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane show={basicActive === "tab4"}>
              {userType4.map((user, index) => (
                <div className="flex-col">
                  <div key={index} className="mx-16">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <iframe
                        width={"100%"}
                        height="310"
                        src={`https://www.youtube.com/embed/${user.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane show={basicActive === "tab5"}>
              {userType5.map((user, index) => (
                <div className="flex-col">
                  <div key={index} className="mx-16">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <iframe
                        width={"100%"}
                        height="310"
                        src={`https://www.youtube.com/embed/${user.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                      ></iframe>
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
export default VideoTrailer;
