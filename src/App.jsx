import CinemaNavbar from "./Components/CinemaNavbar";
import Carousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import FeaturedMovies from "./Components/FeaturedMovies";
import { useState } from "react";

function App() {
  const [movieType, setMovieType] = useState("now_playing");
  const handleClick = (e, value) => {
    e.preventDefault();
    setMovieType(value);
    console.log("click ", value);
  };
  return (
    <div className="appWrapper">
      <section>
        <Router>
          <Sidebar handleClick={handleClick} />
        </Router>
      </section>
      <section className="content-wrapper">
        <CinemaNavbar />
        <section className="carousel-wrapper">
          <Carousel />
        </section>
        <section>
          <FeaturedMovies movieType={movieType} />
        </section>
      </section>
    </div>
  );
}

export default App;
