import React from "react";
import { phoneIcon, whatsappIcon } from "../assets/icons";
import Forms from "./Forms";

const Hero = ({ contacts }) => {
  return (
    <div className="heroWrapper">
      <div className="heroLeft">
        <p className="heading">Are you looking for</p>
        <h3 className="heading">Website/APP Development&nbsp;&nbsp;</h3>
        <span>{contacts.text}</span>
        <div className="heroLeftContact">
          <img src={whatsappIcon} width={170} height={48} alt="whatsappIcon" />
          <div className="callUsAt">
            <span>or Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>{contacts.contact}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="heroRight">
        <Forms />
      </div>
    </div>
  );
};

export default Hero;
