import React, { useState } from "react";
import "./MovieDisplay.css";

const imgPath = "https://image.tmdb.org/t/p/w500";

const MovieDisplay = ({ movies }) => {
  const [limit, setLimit] = useState(8);

  if (!movies || movies.length === 0) return <p>No movies available.</p>;

  return (
    <div>
      <p className="featuredMovies">FEATURED MOVIES</p>
      <div className="movie-poster">
        {movies.slice(0, limit).map((movie) => (
          <div className="img-wrapper" key={movie.id}>
            <img src={imgPath + movie.poster_path} alt={movie.title} />
            <h2 className="movie-title">{movie.title}</h2>
            {/* <p className="movie-overview">{movie.overview}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
