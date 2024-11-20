import React from "react";
import { phoneIcon, whatsappIcon } from "../assets/icons";

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
          <img src={whatsappIcon} width={170} height={48} alt="whatsappIcon" />
          <div className="callUsAt">
            <span>or Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>+91 8588558855</span>
            </div>
          </div>
        </div>
      </div>
      <div className="heroRight">
        <h5>Get a call back in 30 mins.</h5>
        <p>Share your Requirements or WhatsApp me to get a call back.</p>
        <form>
          <input placeholder="Enter your name" />
          <input placeholder="Enter your email" />
          <div>
            <span>+91</span>
            <input placeholder="Enter your phone no." />
          </div>
          <textarea rows={5} placeholder="Describe your requirement"></textarea>
          <button className="btn" type="submit">
            Get a Call Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
