import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Upcoming = () => {
  const settings = {
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const [upcoming, setUpcoming] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=c9d1087c8f93848a133db55d7cdf903c";
  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(url);
      console.log(response);
      setUpcoming(response.data.results);
    };
    getMovie();
  }, []);
  return (
    <div className="bg-black text-white">
      <div className="text-left py-10 container mx-auto px-4 ">
        <h1 className="text-3xl font-semibold mb-5">Upcoming Movie</h1>

        <Slider {...settings}>
          {upcoming.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Upcoming;
