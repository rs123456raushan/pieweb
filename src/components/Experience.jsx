import React from "react";

const Experience = ({ contents }) => {

  return (
    <div className="experienceWrapper">
      <div className="experienceLeft">
        <h2>{`${contents.experience}+`}</h2>
        <p>Years of Experience</p>
      </div>
      <div className="experienceRight">
        <h4 className="heading">We have been doing this for</h4>
        <div>
          <span className="heading">more than 11 years.</span>
        </div>
        <p className="para">{`${contents.work}`}</p>
        <h6>{`Get the project started instant, Book with Rs ${contents.price} Now.`}</h6>
        <button className="btn">Book Now</button>
      </div>
    </div>
  );
};

export default Experience;
