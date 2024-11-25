import React from "react";
import { phoneIcon, whatsappIcon } from "../assets/icons";

const Hero = () => {

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

export default Hero;
