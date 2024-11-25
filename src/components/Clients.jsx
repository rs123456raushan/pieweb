import React from "react";

const Clients = ({ contents }) => {  return (
    <div className="experienceWrapper clientWrapper">
      <div className="experienceRight clientLeft">
        <h4 className="heading">{contents.work_experience?.title}</h4>
        <div>
          <span className="heading">We have worked with all these.</span>
        </div>
        <p className="para">{contents.work_experience?.description}</p>
        <h6>Let's Discuss the project on a nice call</h6>
        <button className="btn">Book Now</button>
      </div>
      <div className="experienceLeft clientRight">
        <h2>{`${contents.work_experience?.total_clients}+`}</h2>
        <p>
          Clients
          <br /> Around the World
        </p>
      </div>
    </div>
  );
};

export default Clients;
