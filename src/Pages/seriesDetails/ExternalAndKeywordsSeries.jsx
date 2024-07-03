import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  getDataSeriesExternalId,
  getDataSeriesKeyWords
} from "../../redux/SeriesDetails.jsx/getDataSeriesExternalAndKeywords";
import Loading from "../../Component/Loading";

const ExternalAndKeywordsSeries = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { LoadingDetails, userDetails, erorDetails } = useSelector(
    (state) => state.backDataSeriesDetails
  );

  const {
    LoadingExternal,
    userExternal,
    erorExternal,
    LoadingKeywords,
    userKeywords,
    erorKeywords
  } = useSelector((state) => state.backDataExternalSeries);

  useEffect(() => {
    dispatch(getDataSeriesExternalId(userId));
    dispatch(getDataSeriesKeyWords(userId));
  }, [userId]);

  if (LoadingDetails) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-12 ms-16 flex flex-col lg:items-start items-center">
      <div className="flex text-2xl text-[#2dcaf0]  gap-12 mb-4">
        <a
          href={`https://www.facebook.com/${userExternal?.facebook_id}`}
          target="_blank"
        >
          <FaFacebook className="hover:text-[#0000ff]" />
        </a>
        <a href={`https://x.com/${userExternal?.twitter_id}`} target="_blank">
          <FaTwitter className="hover:text-[#0000ff]" />
        </a>
        <a
          href={`https://www.instagram.com/${userExternal?.instagram_id}`}
          target="_blank"
        >
          <FaInstagram className="hover:text-[#0000ff]" />
        </a>
        <a href={`${userDetails?.homepage}`}>
          <IoHome className="hover:text-[#0000ff]" />
        </a>
      </div>
      <h1 className="text-white text-lg">Original Name</h1>
      <span className="text-[#2dc9f0] tetx-xs mb-4">{userDetails?.name}</span>
      <h1 className="text-white text-lg">Status</h1>
      <span className="text-[#2dc9f0] tetx-xs mb-4">{userDetails?.status}</span>
      <h1 className="text-white text-lg">Type</h1>
      <span className="text-[#2dc9f0] tetx-xs mb-4">{userDetails?.type}</span>
      <h1 className="text-white text-lg">Network</h1>
      <span className="text-[#2dc9f0] tetx-xs mb-4">
        <img
          className="w-[50px] h-[50px] max-w-none "
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
            userDetails.networks !== undefined &&
            userDetails?.networks[0].logo_path
          }`}
        />
      </span>

      <h1 className="text-white text-lg">Original Language</h1>
      <span className="text-[#2dc9f0] tetx-xs mb-4">
        {userDetails?.original_language.toUpperCase()}
      </span>
      {/* Keywords */}
      {
        <div className="mt-10 lg:text-start text-center">
          <h1 className="text-[#2dcaf0] text-3xl font-bold">Keywords</h1>
          {userKeywords.map((user, index) => (
            <button
              type="button"
              className="mt-2 mb-1 px-[7px] py-[4px] inline-block outline-2 rounded-md border-[1px] bg-gray-200 mx-1 border-[#000000] text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#b8b6b6] hover:bg-opacity-30 hover:px-3 hover:text-lg hover:font-bold hover:text-[#0dcaf0] dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              {user.name !== "string"
                ? user.name
                : "No keywords have been added"}
            </button>
          ))}
        </div>
      }
    </div>
  );
};

export default ExternalAndKeywordsSeries;
