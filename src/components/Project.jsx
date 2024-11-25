import React from "react";
import { phoneIcon, whatsappIcon } from "../assets/icons";

const Project = ({ contents, contacts }) => {
  return (
    <div className="projectWrapper">
      <div className="projectUpper">
        <div className="projectUpperHeading">
          <h3 className="heading">Some of our recent projects</h3>
          <div className="callUsAt">
            <span>Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>{contacts.contact}</span>
            </div>
          </div>
        </div>
        <div className="projectUpperLower para">
          {contents.project_text?.split('|')[0]}
          <span>{contents.project_text?.split('|')[1]}</span>
        </div>
      </div>
      <div className="projectMiddle">
        {contents.projects && contents.projects.map((project, index) => {
          return <img key={index} src={`http://localhost:1337/${project.url}`} alt={project.name} />
        })}
      </div>
      <div className="projectLower">
        <div className="projectLowerUpper">
          <button className="btn">Start Instant Project</button>
          <img src={whatsappIcon} width={170} height={48} alt="whatsappIcon" />
        </div>
        <div className="projectLowerLower callUsAt">
          <span>Or Call us at</span>
          <div>
            <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
            <span>{contacts.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
