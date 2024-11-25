import React from "react";
import { tickIcon } from "../assets/icons";

const Form = () => {

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyMo88J42CM0E8qpeSCMWb3uOY67lv4D-kkpGewYw2T5qmn9LOtkYlcQbXkXSwEwAr5/exec";
  const form = document.forms["contact-us"];

  const submitHandler = async (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: new FormData(form)
    })
      .then((response) => {
        alert("Form Submitted Successfully!");
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  };

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
        <h5>Get a call back in 30 mins.</h5>
        <p>Share your Requirements or WhatsApp me to get a call back.</p>
        <form
          name="contact-us"
          onSubmit={submitHandler}
        >
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <div>
            <span>+91</span>
            <input type="text" name="phone" placeholder="Enter your phone no." />
          </div>
          <textarea name="requirements" rows={5} placeholder="Describe your requirement"></textarea>
          <button className="btn" type="submit">
            Get a Call Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
