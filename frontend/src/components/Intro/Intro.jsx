import React from "react";
import { Link } from "react-router-dom";
import IntroPic from "../../photos/IntroPic.jpeg";
import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="img-container">
        <img class="image" src={IntroPic}></img>
        <h1 class="heading-1">Welcome to Meal Link</h1>
        <h2 class="heading-2">
          Helping the Underprivileged with Nutritious Meals
        </h2>
        <div className="text">
          <Link to="/donor-signup">
            <button class="btn btn-1">DONOR</button>
          </Link>
        </div>
        <div className="text">
          <Link to="/beneficiary-signup">
            <button class="btn btn-2">BENEFICIARY</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
