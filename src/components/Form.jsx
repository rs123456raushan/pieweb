import React from "react";
import { tickIcon } from "../assets/icons";
import Forms from "./Forms";

const Form = () => {
  return (
    <div className="heroWrapper formWrapper">
      <div className="formLeft">
        <h2 className="heading">What can you expect!</h2>
        <div className="formLeftList">
          <div>
            <img src={tickIcon} alt="tickIcon" />
            <span>On time delivery</span>
          </div>
          <div>
            <img src={tickIcon} alt="tickIcon" />
            <span>Most Affordable Quote</span>
          </div>
          <div>
            <img src={tickIcon} alt="tickIcon" />
            <span>1 year of service warranty</span>
          </div>
          <div>
            <img src={tickIcon} alt="tickIcon" />
            <span>Compressed and royalty free images</span>
          </div>
          <div>
            <img src={tickIcon} alt="tickIcon" />
            <span>Domain, Hosting Included for 1 year</span>
          </div>
        </div>
      </div>
      <div className="heroRight formRight">
        <Forms />
      </div>
    </div>
  );
};

export default Form;
