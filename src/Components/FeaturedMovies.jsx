import React from "react";
import axios from "axios";

const apiKey = "354c4bb7";

const FeaturedMovies = () => {
  const getMovie = async () => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=Transformers`);
      console.log(res);
    } catch (error) {
      console.log(res);
    }
  };
  getMovie();
  return <div></div>;
};

export default FeaturedMovies;
