import CinemaNavbar from "./Components/CinemaNavbar";
import Carousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="appWrapper">
      <section>
        <Router>
          <Sidebar />
        </Router>
      </section>
      <section className="content-wrapper">
        <CinemaNavbar />
        <section className="carousel-wrapper">
          <Carousel />
        </section>
      </section>
    </div>
  );
}

export default App;
