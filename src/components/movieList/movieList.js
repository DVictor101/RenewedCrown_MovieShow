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
 const [totalMovies, setTotalMovies] =
  useState(0);

 useEffect(() => {
  const fetchMovies = async () => {
   setLoading(true);
   setError(null);

   try {
    const data = await FetchMovie();
    console.log(data);
    setTotalMovies(data.length); // Set the total number of movies
    const startIndex =
     (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const slicedMovies = data.slice(
     startIndex,
     endIndex
    );

    setMovies((prevMovies) => [
     ...prevMovies,
     ...slicedMovies,
    ]);
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
    {
     <svg>
      <use href={`${icons}#icon-loader`}></use>
     </svg>
    }
   </div>
  );
 }

 if (error) {
  return <div>Error: {error}</div>;
 }

 return (
  <div className="movielist">
   <div className="movielist_cont">
    <h2>Featured Movie</h2>
    {movies.length < totalMovies && (
     <button
      className="seemore_div"
      onClick={handleSeeMoreClick}
     >
      See More
     </button>
    )}
    <div className="movie-grid">
     {movies
      .slice(0, moviesPerPage)
      .map((movie) => (
       <Card key={movie.id} movie={movie} />
      ))}
    </div>
   </div>
  </div>
 );
}

export default MovieList;
