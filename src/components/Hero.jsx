import React from "react";
import { whatsappIcon } from "../assets/icons";
import Forms from "./Forms";

const Hero = () => {

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+919084340987'
    const message = encodeURIComponent("Hello, I would like to talk to you regarding project requirements !!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank"); // Opens in a new tab
  };

  return (
    <div className="heroWrapper">
      <div className="heroLeft">
        <p className="heading">Are you looking for</p>
        <h3 className="heading">Website/APP Development&nbsp;&nbsp;</h3>
        <span>
          We are into website development services and have delivered many
          successful projects. Our strength lies in our Empathy and
          Deliverability.
        </span>
        <div className="heroLeftContact">
          <img onClick={handleWhatsAppRedirect} src={whatsappIcon} alt="whatsappIcon" />
          <div className="callUsAt">
            <span>or Call us at</span>
            <div>
              <span>+91 9084340987</span>
            </div>
          </div>
        </div>
      </div>
      <div id="form" className="heroRight">
        <Forms />
      </div>
    </div>
  );
};

export default Hero;
