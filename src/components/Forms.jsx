import React from "react";

const Forms = () => {
  return (
    <>
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
    </>
  );
};

export default Forms;
