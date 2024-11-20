import React from "react";
import NavBar from "./NavBar";
import HeroForm from "./HeroForm";

const Hero = ({ contacts }) => {
  return (
    <div className="heroWrapper">
      <NavBar />
      <HeroForm contacts={contacts} />
    </div>
  );
};

export default Hero;
