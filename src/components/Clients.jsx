import React from "react";

const Clients = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="services" className="experienceWrapper clientWrapper">
      <div className="experienceRight clientLeft">
        <h4 className="heading">
          Ecommerce, Portfolio and Software Development
        </h4>
        <div>
          <span className="heading">We have worked with all these.</span>
        </div>
        <p className="para">
          We have worked across technologies and developed fast, secure websites and platforms. We also provide admin panels to manage your website easily and a training module.
        </p>
        <h6>Let's Discuss the project on a nice call</h6>
        <button onClick={() => scrollToSection("form")} className="btn">Book Now</button>
      </div>
      <div className="experienceLeft clientRight">
        <h2>50+</h2>
        <p>
          Clients
          <br /> Around the World
        </p>
      </div>
    </div>
  );
};

export default Clients;
