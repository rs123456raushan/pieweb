import React, { useState, useEffect } from "react";
import { logoImage } from "../assets/images";
import { closeIcon, menuIcon } from "../assets/icons";

const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [navbarOptions, setNavbarOptions] = useState([]);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  useEffect(() => {
    fetch('http://localhost:1337/api/navbars')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching navbars: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setNavbarOptions(data.data[0]))
      .catch((error) => console.error('Error fetching navbars:', error));
  }, [])

  return (
    <div className="navWrapper">
      <div className="navBarLogo">
        <img src={logoImage} alt="logoImage" />
      </div>
      <div className="navBar">
        <div className="navBarBig">
          <div></div>
          <div className="navBarLink">
            <span className="active">{navbarOptions.field1}</span>
            <span>{navbarOptions.field2}</span>
            <span>{navbarOptions.field3}</span>
            <span>{navbarOptions.field4}</span>
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
            <span className="active">Home</span>
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
