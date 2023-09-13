import "./moviesearch.css";
import React, { useState } from "react";
import { FetchMovieDetails } from "../../movieAPI";
import SEARCHTAG from "../../Assets/Icon.png";

function MovieSearch() {
 const [searchTerm, setSearchTerm] = useState("");
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 const handleSearch = async () => {
  if (searchTerm.trim() === "") {
   return; // Don't perform empty searches
  }

  setLoading(true);
  setError(null);

  try {
   const results = await FetchMovieDetails(
    searchTerm
   );
   setLoading(false);
   console.log(results);
  } catch (error) {
   setError(error.message);
   setLoading(false);
  }
 };

 return (
  <div className="moviesearch">
   <input
    type="text"
    className="movieinput"
    placeholder="What do you want to watch?"
    value={searchTerm}
    onChange={(e) =>
     setSearchTerm(e.target.value)
    }
   />
   <img className="seachimg"
    src={SEARCHTAG}
    onClick={handleSearch}
    alt="search"
   />

   {loading && <div>Loading...</div>}

   {error && <div>Error: {error}</div>}
  </div>
 );
}

export default MovieSearch;
