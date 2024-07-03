import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowDataMoveis } from "../../redux/getDataMoveis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../Component/Loading";
import { Link } from "react-router-dom";
import Eror from "../../Component/Eror";

const MoveiPlayNow = () => {
  var settings = {
    infinite: true,
    speed: 500,
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
    (state) => state.backDataMoveisNow
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowDataMoveis());
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (eror) {
    return <Eror></Eror>;
  }

  return (
    <div className="mt-8 px-5">
      <div className="mb-12 mx-8">
        <h1 className="font-bold text-cyan-400 text-3xl mx-6 mb-16 text-center md:text-start">
          MOVIES
        </h1>
        <Slider {...settings} className="mx-8">
          {users.map((user, index) => (
            <div key={index} className="mx-4">
              <Link
                to={`/moveiDetails/${user.id}/title/${user.title
                  .replace(/\s+/g, "-")
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

export default MoveiPlayNow;
