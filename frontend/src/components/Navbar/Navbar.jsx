import React from "react";
import logo from "../../photos/logo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="logo">
        <img className="logoClass" src={logo}></img>
      </div>
      {/* <div className="aboutss">
        <h3>About</h3>
      </div> */}

      {/* <div className="links">
        <Link to="/about">
          <button className="btn">About Us</button>
        </Link>
        <Link to="/partners">
          <button className="btn">Funding</button>
        </Link>
        <Link to="/faq">
          <button className="btn">FAQ</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
