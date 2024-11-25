import React from "react";
import { tickIcon } from "../assets/icons";
import Forms from "./Forms";

const Form = ({ contents }) => {
  return (
    <div className="heroWrapper formWrapper">
      <div className="formLeft">
        <h2 className="heading">What can you expect!</h2>
        <div className="formLeftList">
          {contents.services?.split("|").map((service, index) => {
            return (
              <div key={index}>
                <img src={tickIcon} alt="tickIcon" />
                <span>{service}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="heroRight formRight">
        <Forms />
      </div>
    </div>
  );
};

export default Form;
