import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNowDataSeries } from "../../redux/getDataSeries";
import Loading from "../../Component/Loading";
import { Link } from "react-router-dom";

const SeriesPlayNow = () => {
  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const { loading, users, eror } = useSelector(
    (state) => state.backDataSeriesNow
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowDataSeries());
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-8 px-5">
      <div className="mb-12 mx-8">
        <h1 className="font-bold text-cyan-400 text-3xl mx-6 mb-16 text-center md:text-start">
          SERIES
        </h1>
        <Slider {...settings} className="mx-8">
          {users.map((user, index) => (
            <div key={index} className="mx-4">
              <Link
                to={`/seriesDetails/${user.id}/name/${user.name
                  ?.replace(/\s+/g, "-")
                  .trim()
                  .toLowerCase()}`}
              >
                <img
                  className=" w-11/12 h-96"
                  src={`https://media.themoviedb.org/t/p/w500${user.poster_path}`}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeriesPlayNow;
