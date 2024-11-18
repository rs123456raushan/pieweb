import React, { useState } from "react";
import { logoImage } from "../assets/images";
import { closeIcon, menuIcon } from "../assets/icons";

const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div className="navWrapper">
      <div className="navBarLogo">
        <img src={logoImage} alt="logoImage" />
      </div>
      <div className="navBar">
        <div className="navBarBig">
          <div></div>
          <div className="navBarLink">
            <span>Home</span>
            <span>About Us</span>
            <span>Our Services</span>
            <span>Contact Us</span>
          </div>
          <div className="navBarQuote btn">
            <span>Quote</span>
          </div>
        </div>
        <div className="navBarMobileIcon">
          <img
            className="navBarMenuIcon"
            src={menuIcon}
            onClick={ToggleSidebar}
            width={30}
            height={30}
            alt="menuIcon"
          />
        </div>
      </div>
      <div className="navBarMobile">
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="navBarLink">
            <span>Home</span>
            <span>About Us</span>
            <span>Our Services</span>
            <span>Contact Us</span>
            <img
              onClick={ToggleSidebar}
              src={closeIcon}
              alt="closeIcon"
              width={24}
              height={24}
            />
          </div>
          <div className="navBarQuote btn">
            <span>Quote</span>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
