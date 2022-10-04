import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiCaretRightCircle, BiStar } from "react-icons/bi";

const Card = ({ movie }) => {
  return (
    <div className="">
      <div className="relative hover:scale-105">
        <img
          className="rounded-lg "
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="bg-black/10 backdrop-blur-sm absolute rounded-t-lg top-[30%] left-0 right-0 mx-auto bottom-0 opacity-0 hover:opacity-100 px-4">
          <div className="py-5 flex flex-col gap-3 items-center ">
            <h1 className=" font-bold">{movie.title}</h1>

            <div className="flex items-center gap-2">
              <p className="">{Math.round(movie.vote_average)}/10</p>
              <BiStar color="#ff0" size={20} />
            </div>
            <p className="">{movie.release_date}</p>
            <button className="px-4 py-3 bg-[#BE123C] md:w-[200px]  flex items-center gap-3 justify-center rounded-full text-sm">
              <BiCaretRightCircle size={20} className="hidden md:block" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
