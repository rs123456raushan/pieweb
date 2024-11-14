import React from "react";
import { logoImage } from "../assets/images";

const NavBar = () => {
  return (
    <div className="navWrapper">
      <div className="navBarLogo">
        <img src={logoImage} width={150} height={150} alt="logoImage" />
      </div>
      <div className="navBarLink">
        <div></div>
        <div className="navBarLinks">
          <span>Home</span>
          <span>About Us</span>
          <span>Our Services</span>
          <span>Contact Us</span>
        </div>
        <div className="navBarQuote btn">
          <span>Quote</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
