import "./card.css";
import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card" data-testid="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          data-testid="movie-poster"
        />
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default Card;
