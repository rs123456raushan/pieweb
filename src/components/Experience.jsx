import React from "react";

const Experience = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="experienceWrapper">
      <div className="experienceLeft">
        <h2>7+</h2>
        <p>Years of Experience</p>
      </div>
      <div className="experienceRight">
        <h4 className="heading">We have been doing this for</h4>
        <div>
          <span className="heading">more than 7 years.</span>
        </div>
        <p className="para">
          We have been doing Websites since 2017 and have delivered many successful projects. Some of our best works are mentioned below.
        </p>
        <h6>Get the project started. Book Now.</h6>
        <button onClick={() => scrollToSection("form")} className="btn">Book Now</button>
      </div>
    </div>
  );
};

export default Experience;