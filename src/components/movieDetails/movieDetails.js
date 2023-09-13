import "./moviedetails.css";
import React, {
 useEffect,
 useState,
} from "react";
import { useParams } from "react-router-dom";
import { FetchMovieDetails } from "../../movieAPI";
import LIKEICON from "../../Assets/favorite.png";
import FAVORITEICON from "../../Assets/fovorite_1.png";

function MovieDetails() {
 const { id } = useParams();
 const [movieDetails, setMovieDetails] =
  useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [isLiked, setIsLiked] = useState(false); // State to track liked status

 // Function to convert a date to UTC format
 const convertToUTC = (dateString) => {
  const date = new Date(dateString);
  return date.toUTCString();
 };

 useEffect(() => {
  const fetchMovieDetails = async () => {
   setLoading(true);
   setError(null);

   try {
    const data = await FetchMovieDetails(id);
    // Converting the release_date to UTC format
    data.release_date = convertToUTC(
     data.release_date
    );
    setMovieDetails(data);
    setLoading(false);
   } catch (error) {
    setError(error.message);
    setLoading(false);
   }
  };

  fetchMovieDetails();
 }, [id]);

 const toggleLike = () => {
  setIsLiked(!isLiked); // Toggle liked status
 };

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>Error: {error}</div>;
 }
 console.log(movieDetails);
 return (
  <div className="movie-details">
   <div className="movie-details_cont">
    <img
     src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
     alt={movieDetails.title}
     data-testid="movie-poster"
    />
    <div className="title_div">
     <h2 data-testid="movie-title">
      {movieDetails.title}
     </h2>
     <div
      className="btn_like"
      onClick={toggleLike}
     >
      <img
       className="btn_img"
       src={isLiked ? FAVORITEICON : LIKEICON}
       alt="like button"
      />
     </div>
    </div>
    <p data-testid="movie-release-date">
     {convertToUTC(movieDetails.release_date)}
    </p>
    <p data-testid="movie-runtime">
     {movieDetails.runtime} minutes
    </p>
    <p data-testid="movie-overview">
     {movieDetails.overview}
    </p>
   </div>
  </div>
 );
}

export default MovieDetails;
