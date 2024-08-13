import React from "react";
import "../Components/Navbar.css";


const CinemaNavbar = () => {
  return (
    <div className="NavWrapper">
      <div className="title">Cinema </div>

      <div className="dropDown-wrapper">
        <select className="dropDown">
          <option>Forney</option>
          <option>Rockwall</option>
          <option>Sunnyvalle</option>
          <option>Mesquite</option>
        </select>
      </div>
    </div>
  );
};

export default CinemaNavbar;
