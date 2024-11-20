import React from "react";

const Technologies = ({ contents }) => {
  return (
    <div className="technologiesWrapper">
      <h2 className="heading">Technologies we have worked with</h2>
      <div className="technologies">
        {contents.technologies && contents.technologies.map((technology, index) => {
          return <div key={index}>
            <img src={`http://localhost:1337/${technology.url}`} alt={technology.name} />
          </div>
        })}
      </div>
    </div>
  );
};

export default Technologies;
