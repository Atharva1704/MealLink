import React from "react";
import AboutTeam from "../AboutTeam/AboutTeam";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Navbar from "../Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default Home;
