import React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Tv from "../assets/tv.svg";

const Navbar = ({ searchMovie, query, setQuery }) => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
    console.log(search);
  };

  return (
    <header className="fixed w-full  z-50 text-white bg-black/10 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4  ">
          <img src={Tv} alt="" />
          <h1 className="text-2xl font-bold">Paig Movie</h1>
        </div>
        <form action="" className="md:relative">
          <div className="hidden md:block">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyPress={searchMovie}
              placeholder="What do you want to watch?"
              type="text"
              className="border-white border bg-transparent  focus:outline-none w-[525px] px-4 py-1 rounded-lg duration-500"
            />
            <BiSearchAlt size={20} className="md:absolute right-2 top-2" />
          </div>
          <div className="md:hidden block">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyPress={searchMovie}
              placeholder="What do you want to watch?"
              type="text"
              className={
                search
                  ? "border-white border bg-transparent  absolute top-[90px] left-0 right-0 focus:outline-none w-[90%] mx-auto md:w-[525px] px-4 py-1 rounded-lg duration-500"
                  : "hidden"
              }
            />
            <BiSearchAlt
              size={20}
              onClick={handleSearch}
              className="md:absolute right-2 top-2"
            />
          </div>
        </form>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
