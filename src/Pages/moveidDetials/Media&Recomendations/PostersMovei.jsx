import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Footer from "../../../Component/Footer";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane
} from "tw-elements-react";
import Loading from "../../../Component/Loading";
import { getDataMoveiDetails } from "../../../redux/MoveiDetails/getDataMoveiDetails";
import { getDataMoveiBackDrops } from "../../../redux/MoveiDetails/getDataMoveiSocial";

const PostersMovei = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const { LoadingDetails, userDetails, erorDetails } = useSelector(
    (state) => state.backDataMoveiDetails
  );

  const {
    userlangPosters1,
    userlangPosters2,
    userlangPosters3,
    userlangPosters4,
    userlangPosters5,
    userlangPosters6,
    userlangPosters7,
    userlangPosters8,
    userlangPosters9,
    userlangPosters10
  } = useSelector((state) => state.backDataSocialMovei);

  useEffect(() => {
    dispatch(getDataMoveiDetails(userId));
    dispatch(getDataMoveiBackDrops(userId));
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

        <div className="mb-3 flex-col justify-center items-center">
          <TETabs className="flex justify-center border-white">
            <TETabsItem
              className={
                userlangPosters1.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 active:text-purple-500 border-purple-500"
                  : " hidden"
              }
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              No Language ({userlangPosters1.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters2.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              English ({userlangPosters2.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters3.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              French <span>({userlangPosters3.length})</span>
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters4.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
            >
              {userlangPosters4[0]?.iso_639_1 && (
                <span>Italian ({userlangPosters4.length})</span>
              )}
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters5.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
            >
              Portuguese ({userlangPosters5.length})
            </TETabsItem>

            <TETabsItem
              className={
                userlangPosters6.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab6")}
              active={basicActive === "tab6"}
            >
              Korean ({userlangPosters6.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters7.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab7")}
              active={basicActive === "tab7"}
            >
              Czech ({userlangPosters7.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters8.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab8")}
              active={basicActive === "tab8"}
            >
              Vitenamese ({userlangPosters8.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters9.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab9")}
              active={basicActive === "tab9"}
            >
              Slovak ({userlangPosters9.length})
            </TETabsItem>
            <TETabsItem
              className={
                userlangPosters10.length > 0
                  ? "text-white !text-base hover:bg-opacity-10 border-purple-500 active:text-purple-500"
                  : "hidden"
              }
              onClick={() => handleBasicClick("tab10")}
              active={basicActive === "tab10"}
            >
              Russian ({userlangPosters10.length})
            </TETabsItem>
          </TETabs>

          <TETabsContent className="flex justify-center">
            <TETabsPane
              show={basicActive === "tab1"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters1.map((user, index) => (
                <div className="flex">
                  <div key={index} className="">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab2"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters2.map((user, index) => (
                <div className="flex">
                  <div key={index} className="mx-1">
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none"
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab3"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters3.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab4"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters4.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab5"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters5.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>

            <TETabsPane
              show={basicActive === "tab6"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters6.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab7"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters7.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab8"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters8.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab9"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters9.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TETabsPane>
            <TETabsPane
              show={basicActive === "tab10"}
              className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 mx-16"
            >
              {userlangPosters10.map((user, index) => (
                <div className="flex">
                  <div key={index}>
                    <div className="z-40 border-[8px] border-blue-gray-900">
                      <img
                        className="w-[220px] h-[320px] max-w-none "
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.file_path}`}
                      />
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

export default PostersMovei;
