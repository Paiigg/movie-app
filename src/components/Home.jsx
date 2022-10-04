import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiCaretRightCircle, BiStar } from "react-icons/bi";
import axios from "axios";
import Featured from "./Featured";
import Upcoming from "./Upcoming";

const Home = () => {
  const [data, setData] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=c9d1087c8f93848a133db55d7cdf903c";
  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data.results);
    };
    getMovie();
  }, []);
  return (
    <>
      <div className=" h-screen bg-black">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          swipeable={false}
          verticalSwipe="standart"
          infiniteLoop={true}
          showStatus={false}
        >
          {data.map((movie) => (
            <div className="relative h-screen w-full">
              <img
                className=" h-screen object-cover opacity-50"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
              />
              <div className="absolute text-4xl text-white md:w-[40%] px-4 top-[50%] translate-y-[-50%] left-[5%] text-left">
                <div className="flex flex-col gap-3">
                  <h1 className="text-6xl font-bold">{movie.title}</h1>
                  <div className="flex items-center gap-3">
                    <p className="text-lg">{movie.vote_average}/10</p>
                    <BiStar color="#ff0" size={20} />
                  </div>

                  <p className="text-sm">{movie.overview}</p>
                  <button className="px-4 py-3 bg-[#BE123C] w-[200px] flex items-center gap-3 justify-center rounded-full text-sm">
                    <BiCaretRightCircle size={20} />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
