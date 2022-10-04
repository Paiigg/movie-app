import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Upcoming from "./components/Upcoming";
import Search from "./components/Search";

function App() {
  const [value, setValue] = useState([]);
  const [query, setQuery] = useState(" ");
  const searchMovie = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=c9d1087c8f93848a133db55d7cdf903c&query=${query}`
        )
        .then((response) => {
          console.log(response);
          setValue(response.data.results);
        });
      setQuery("");
    }
  };
  return (
    <div className="App">
      <Navbar searchMovie={searchMovie} query={query} setQuery={setQuery} />
      <Home />
      <Search movie={value} />
      <Featured />
      <Upcoming />
    </div>
  );
}

export default App;
