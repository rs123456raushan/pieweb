import React from "react";
import { phoneIcon, whatsappIcon } from "../assets/icons";
import Forms from "./Forms";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="heroLeft">
        <p className="heading">Are you looking for</p>
        <h3 className="heading">Website/APP Development&nbsp;&nbsp;</h3>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </span>
        <div className="heroLeftContact">
          <img src={whatsappIcon} alt="whatsappIcon" />
          <div className="callUsAt">
            <span>or Call us at</span>
            <div>
              <img src={phoneIcon} alt="phoneIcon" />
              <span>+91 8588558855</span>
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
