import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSearch from "./CardSearch";

const Search = ({ movie }) => {
  return (
    <div className="bg-black text-white">
      <div className="text-left py-10 container mx-auto px-4 ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {movie.map((movie, index) => (
            <CardSearch key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
