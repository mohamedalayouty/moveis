import React, { useEffect, useState } from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataSearchMovei,
  getDataSearchSeries
} from "../redux/getDataSearch";

const Header = () => {
  const dispatch = useDispatch();
  const [ChangeSearch, setChangeSearch] = useState(true);
  const [username, setusername] = useState("");

  const { LoadingSearchMovei, userSearchMovei, erorSearchMovei } = useSelector(
    (state) => state.backDataSearch
  );

  const { LoadingSearchSeries, userSearchseries, erorSearchSeries } =
    useSelector((state) => state.backDataSearch);

  useEffect(() => {
    if (ChangeSearch === true) {
      dispatch(getDataSearchMovei(username));
    } else {
      dispatch(getDataSearchSeries(username));
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setusername("");
  };

  return (
    <div className="navbar flex justify-between bg-[#212529] h-[3.4rem] min-h-0 fixed top-0 left-0 right-0 z-50">
      <div className="flex">
        <a className=" text-white btn btn-ghost text-lg font-medium ms-16">
          Redux Moveis
        </a>
        <div className="hidden lg:flex">
          <Link to="/">
            <Typography className="mr-3 ml-2 text-sm cursor-pointer py-1.5 text-gray-500 hover:text-gray-100">
              Home
            </Typography>
          </Link>
          <Link to="/moveis">
            <Typography className="mr-3 ml-2 text-sm cursor-pointer py-1.5 text-gray-500 hover:text-gray-100">
              Moveis
            </Typography>
          </Link>
          <Link to="/series">
            <Typography className="mr-3 ml-2 text-sm cursor-pointer py-1.5 text-gray-500 hover:text-gray-100">
              Series
            </Typography>
          </Link>
          <Link to="contact us">
            <Typography className="mr-3 ml-2 text-sm cursor-pointer py-1.5 text-gray-500 hover:text-gray-100">
              Contact Us
            </Typography>
          </Link>
        </div>
      </div>

      <div className="flex gap-2 me-8">
        <div className="form-control lg:flex lg:flex-row hidden w-full gap-2 text-gray-500">
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <Input
                placeholder={
                  ChangeSearch === true ? "Search Movei" : "Search Series"
                }
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="search"
                color="white"
                label="Type here..."
                className="pr-25"
                containerProps={{
                  className: "min-w-[288px]"
                }}
              />
            </form>
            <ul
              style={{ maxHeight: "348px" }}
              className={
                username.length > 0
                  ? "bg-[#212529] absolute mt-4 overflow-y-scroll w-[400px] h-72 text-white"
                  : "hidden"
              }
            >
              {ChangeSearch === true
                ? userSearchMovei
                    .filter((user) =>
                      user.original_title.toLowerCase().includes(username)
                    )
                    .map((user, index) => (
                      <Link
                        to={`/moveiDetails/${user.id}/title/${user.title
                          .replace(/\s+/g, "-")
                          .trim()
                          .toLowerCase()}`}
                      >
                        <li
                          key={index}
                          className="flex justify-between cursor-pointer mb-2 hover:bg-[#777fd4] p-2 hover:scale-95 transition-all ease-in duration-200 border-cyan-300 border border-e-0 border-s-0 rounded-lg"
                        >
                          <div className="avatar">
                            <div className="w-12 rounded-full">
                              <img
                                className="max-w-none"
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
                              />
                            </div>
                          </div>
                          <h1>{user.original_title}</h1>
                        </li>
                      </Link>
                    ))
                : userSearchseries
                    .filter((user) =>
                      user.original_name.toLowerCase().includes(username)
                    )
                    .map((user, index) => (
                      <Link
                        to={`/seriesDetails/${user.id}/name/${user.name
                          .replace(/\s+/g, "-")
                          .trim()
                          .toLowerCase()}`}
                      >
                        <li
                          key={index}
                          className="flex justify-between cursor-pointer mb-2 hover:bg-[#777fd4] p-2 hover:scale-95 transition-all ease-in duration-200 border-cyan-300 border border-e-0 border-s-0 rounded-lg"
                        >
                          <div className="avatar">
                            <div className="w-12 rounded-full">
                              <img
                                className="max-w-none"
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
                              />
                            </div>
                          </div>
                          <h1>{user.original_name}</h1>
                        </li>
                      </Link>
                    ))}
            </ul>
            <Button
              onClick={() => setChangeSearch(!ChangeSearch)}
              size="sm"
              color="white"
              className={
                ChangeSearch === true
                  ? "!absolute right-1 top-1 rounded bg-red-700 hover:text-white hover:font-bold"
                  : "!absolute right-1 top-1 rounded bg-blue-700 hover:text-white hover:font-bold"
              }
            >
              {ChangeSearch === true ? "Search Moveis" : "Search Series"}
            </Button>
          </div>
          <div>
            <button
              type="button"
              className={
                username.length > 0
                  ? "px-[10px] py-[7px] inline-block outline-2 rounded-md border-[1px] border-[#50af71] text-sm font-medium leading-normal text-[#50af71] transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#16a34a] hover:bg-opacity-30 hover:text-[#fff] focus:border-info-600 focus:text-[#16a34a] focus:ring-0 active:border-[#16a34a] active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  : "cursor-auto px-[10px] py-[7px] inline-block outline-2 rounded-md border-[1px] border-[#166534] text-sm font-medium leading-normal text-[#166534] transition duration-150 ease-in-out hover:border-info-600"
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar lg:hidden"
          >
            <div className=" rounded-full text-center ">
              <TfiMenu className="text-2xl text-center" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box"
          >
            <li>
              <Link to="/" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="/moveis">Moveis</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="contact us">Contact Us</Link>
            </li>
            <li className=" w-full text-gray-500">
              <div className="flex flex-col sm:flex-row">
                <div className="relative">
                  <form onSubmit={handleSubmit}>
                    <Input
                      placeholder={
                        ChangeSearch === true ? "Search Movei" : "Search Series"
                      }
                      onChange={(e) => setusername(e.target.value)}
                      value={username}
                      type="search"
                      color="white"
                      label="Type here..."
                      className="pr-25"
                      containerProps={{
                        className: "min-w-[288px]"
                      }}
                    />
                  </form>
                  <ul
                    style={{ maxHeight: "348px" }}
                    className={
                      username.length > 0
                        ? "bg-[#212529] absolute mt-4 overflow-y-scroll w-[400px] h-72 text-white"
                        : "hidden"
                    }
                  >
                    {ChangeSearch === true
                      ? userSearchMovei
                          .filter((user) =>
                            user.original_title.toLowerCase().includes(username)
                          )
                          .map((user, index) => (
                            <Link
                              to={`/moveiDetails/${user.id}/title/${user.title
                                .replace(/\s+/g, "-")
                                .trim()
                                .toLowerCase()}`}
                            >
                              <li
                                key={index}
                                className="flex justify-between cursor-pointer mb-2 hover:bg-[#777fd4] p-2 hover:scale-95 transition-all ease-in duration-200 border-cyan-300 border border-e-0 border-s-0 rounded-lg"
                              >
                                <div className="avatar">
                                  <div className="w-12 rounded-full">
                                    <img
                                      className="max-w-none"
                                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
                                    />
                                  </div>
                                </div>
                                <h1>{user.original_title}</h1>
                              </li>
                            </Link>
                          ))
                      : userSearchseries
                          .filter((user) =>
                            user.original_name.toLowerCase().includes(username)
                          )
                          .map((user, index) => (
                            <Link
                              to={`/seriesDetails/${user.id}/name/${user.name
                                .replace(/\s+/g, "-")
                                .trim()
                                .toLowerCase()}`}
                            >
                              <li
                                key={index}
                                className="flex justify-between cursor-pointer mb-2 hover:bg-[#777fd4] p-2 hover:scale-95 transition-all ease-in duration-200 border-cyan-300 border border-e-0 border-s-0 rounded-lg"
                              >
                                <div className="avatar">
                                  <div className="w-12 rounded-full">
                                    <img
                                      className="max-w-none"
                                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${user?.poster_path}`}
                                    />
                                  </div>
                                </div>
                                <h1>{user.original_name}</h1>
                              </li>
                            </Link>
                          ))}
                  </ul>
                  <Button
                    onClick={() => setChangeSearch(!ChangeSearch)}
                    size="sm"
                    color="white"
                    className={
                      ChangeSearch === true
                        ? "!absolute right-1 top-1 rounded bg-red-700 hover:text-white hover:font-bold"
                        : "!absolute right-1 top-1 rounded bg-blue-700 hover:text-white hover:font-bold"
                    }
                  >
                    {ChangeSearch === true ? "Search Moveis" : "Search Series"}
                  </Button>
                </div>
                <div>
                  <button
                    type="button"
                    className={
                      username.length > 0
                        ? "px-[10px] py-[7px] inline-block outline-2 rounded-md border-[1px] border-[#50af71] text-sm font-medium leading-normal text-[#50af71] transition duration-150 ease-in-out hover:border-info-600 hover:bg-[#16a34a] hover:bg-opacity-30 hover:text-[#fff] focus:border-info-600 focus:text-[#16a34a] focus:ring-0 active:border-[#16a34a] active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        : "cursor-auto px-[10px] py-[7px] inline-block outline-2 rounded-md border-[1px] border-[#166534] text-sm font-medium leading-normal text-[#166534] transition duration-150 ease-in-out hover:border-info-600"
                    }
                  >
                    Search
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
