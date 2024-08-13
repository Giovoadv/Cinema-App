import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDisplay from "./MovieDisplay";

// const apiKey = "354c4bb7";
const apiKeyTwo = "api_key=db95773a7fb212ba790d71f6adac0e7e";

const FeaturedMovies = ({movieType}) => {
  const [movies, setMovies] = useState([]);

  const getMovie = async (type) => {
    console.log(movieType)
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?${apiKeyTwo}`
      );

      const data = res.data.results;
      //   console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie(movieType);
  }, [movieType]);

  return (
    <div>
      <MovieDisplay movies={movies} />
    </div>
  );
};

export default FeaturedMovies;
