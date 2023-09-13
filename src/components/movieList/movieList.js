import "./movielist.css";
import React, {
 useEffect,
 useState,
} from "react";
import Card from "../Card/Card";
import { FetchMovie } from "../../movieAPI";
import icons from "../../Assets/icons.svg";

function MovieList() {
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [currentPage, setCurrentPage] =
  useState(1);
 const moviesPerPage = 10;

 useEffect(() => {
  const fetchMovies = async () => {
   setLoading(true);
   setError(null);

   try {
    const data = await FetchMovie();
    console.log(data);
    const startIndex =
     (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const slicedMovies = data.slice(
     startIndex,
     endIndex
    );

    // Reset movies when loading more
    setMovies(slicedMovies);
    setLoading(false);
   } catch (error) {
    setError(error.message);
    setLoading(false);
   }
  };

  fetchMovies();
 }, [currentPage]);

 const handleSeeMoreClick = () => {
  setCurrentPage((prevPage) => prevPage + 1);
 };

 if (loading) {
  return (
   <div className="iconposition">
    <h2>Featured Movie</h2>{" "}
    {/* Display "Featured Movie" while loading */}
    <svg>
     <use href={`${icons}#icon-loader`}></use>
    </svg>
   </div>
  );
 }

 if (error) {
  return <div>Error: {error}</div>;
 }

 return (
  <div className="movielist">
   <div className="movielist_cont">
    <div className="featured_cont">
     <h2>Featured Movie</h2>
     <button
      className="seemore_div"
      onClick={handleSeeMoreClick}
     >
      See More
     </button>
    </div>
    <div className="movie-grid">
     {movies.map((movie) => (
      <Card key={movie.id} movie={movie} />
     ))}
    </div>
   </div>
  </div>
 );
}

export default MovieList;
