import React, { useState } from "react";
import { logoImage } from "../assets/images";
import { closeIcon, menuIcon } from "../assets/icons";

const NavBar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = (section) => {
    if (isOpen) {
      setIsOpen(false)
      scrollToSection(section)
    } else {
      setIsOpen(true)
    }
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
            <span onClick={() => scrollToSection("home")} className="active">Home</span>
            <span onClick={() => scrollToSection("about")}>About Us</span>
            <span onClick={() => scrollToSection("services")}>Our Services</span>
            <span onClick={() => scrollToSection("form")}>Contact Us</span>
          </div>
          <div onClick={() => scrollToSection("form")} className="navBarQuote btn">
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
            <span onClick={() => ToggleSidebar('home')} className="active">Home</span>
            <span onClick={() => ToggleSidebar('about')}>About Us</span>
            <span onClick={() => ToggleSidebar('services')}>Our Services</span>
            <span onClick={() => ToggleSidebar('form')}>Contact Us</span>
            <img
              onClick={() => ToggleSidebar(null)}
              src={closeIcon}
              alt="closeIcon"
              width={24}
              height={24}
            />
          </div>
          <div onClick={() => ToggleSidebar('form')} className="navBarQuote btn">
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