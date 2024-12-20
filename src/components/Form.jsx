import React, { useState } from "react";
import { tickIcon } from "../assets/icons";

const Form = ({ contents }) => {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [requirements, setRequirements] = useState(null)

  const onSubmit = () => {
    fetch('http://localhost:1337/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: name,
          email: email,
          phone: phone,
          requirements: requirements
        }
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="heroWrapper formWrapper">
      <div className="formLeft">
        <h2 className="heading">What can you expect!</h2>
        <div className="formLeftList">
          {contents.services?.split('|').map((service, index) => {
            return <div key={index}>
              <img src={tickIcon} alt="tickIcon" />
              <span>{service}</span>
            </div>
          })}
        </div>
      </div>
      <div className="heroRight formRight">
        <h5>Get a call back in 30 mins.</h5>
        <p>Share your Requirements or WhatsApp me to get a call back.</p>
        <form>
          <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <div>
            <span>+91</span>
            <input onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone no." />
          </div>
          <textarea onChange={(e) => setRequirements(e.target.value)} rows={5} placeholder="Describe your requirement"></textarea>
          <button onClick={onSubmit} className="btn" type="button">
            Get a Call Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
