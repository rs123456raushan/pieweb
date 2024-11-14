import React from "react";
import { tickIcon } from "../assets/icons";

const Form = () => {
  return (
    <div className="heroFormWrapper formWrapper">
      <div className="formLeft">
        <h2>What can you expect!</h2>
        <div className="formLeftList">
          <div>
            <img width={50} height={50} src={tickIcon} alt="tickIcon" />
            <span>On time delivery</span>
          </div>
          <div>
            <img width={50} height={50} src={tickIcon} alt="tickIcon" />
            <span>Most Affordable Quote</span>
          </div>
          <div>
            <img width={50} height={50} src={tickIcon} alt="tickIcon" />
            <span>1 year of service warranty</span>
          </div>
          <div>
            <img width={50} height={50} src={tickIcon} alt="tickIcon" />
            <span>Compressed and royalty free images</span>
          </div>
          <div>
            <img width={50} height={50} src={tickIcon} alt="tickIcon" />
            <span>Domain, Hosting Included for 1 year</span>
          </div>
        </div>
      </div>
      <div className="heroFormRight formRight">
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

export default Form;
