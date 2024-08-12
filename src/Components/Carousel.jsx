import React from "react";
import "../Components/Carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner" id="carouselId">
      <div className="carousel-item active">
        <img src="https://stcinesunidoswebshared.blob.core.windows.net/sliders/HO00005054.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://stcinesunidoswebshared.blob.core.windows.net/sliders/HO00005089.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://stcinesunidoswebshared.blob.core.windows.net/sliders/HO00005042.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://stcinesunidoswebshared.blob.core.windows.net/sliders/HO00004895.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  )
};

export default Carousel;
