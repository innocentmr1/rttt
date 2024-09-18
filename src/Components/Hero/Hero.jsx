import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your Ultimate Travel Partner for Seamless Journeys</h1>
        <p>
          we provide the strategic direction our clients need to choose the best
          options for all of their travel requirements. Delivering the finest to
          you at the appropriate moment is our aim.
        </p>

        <Link
          to="service"
          smooth={true}
          offset={0}
          duration={500}
          className="btn"
        >
          Explore More <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
