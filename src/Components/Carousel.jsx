import React from "react";
import "../Components/Carousel.css";
import deadpool from '../assets/MoviesImages/Deadpool&Wolverine.jpg'

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id="carouselId">
        <div className="carousel-item active">
          <img
            src={deadpool}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/MoviesImages/romulus-1080x36040.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/MoviesImages/Terror.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/MoviesImages/iewu_1080x360_er_banners_v2_aug.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/MoviesImages/btlbtl_cinemark_dated_1080x360.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
