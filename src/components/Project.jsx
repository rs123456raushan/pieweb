import React from "react";
import {
  projectEightImg,
  projectElevenImg,
  projectFiveImg,
  projectFourImg,
  projectNineImg,
  projectOneImg,
  projectSevenImg,
  projectSixImg,
  projectTenImg,
  projectThreeImg,
  projectTwelveImg,
  projectTwoImg,
} from "../assets/images";
import { phoneIcon, whatsappIcon } from "../assets/icons";

const Project = ({ scrollToSection }) => {
  return (
    <div className="projectWrapper">
      <div className="projectUpper">
        <div className="projectUpperHeading">
          <h3 className="heading">Some of our recent projects</h3>
          <div className="callUsAt">
            <span>Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>+91 9084340987</span>
            </div>
          </div>
        </div>
        <div className="projectUpperLower para">
          Below are some of our websites work.
          <span>
            We pay focus on each of our clients requirement so that a great delivery can be met.
          </span>
        </div>
      </div>
      <div className="projectMiddle">
        <img src={projectOneImg} alt="projectOneImg" />
        <img src={projectTwoImg} alt="projectTwoImg" />
        <img src={projectThreeImg} alt="projectThreeImg" />
        <img src={projectFourImg} alt="projectFourImg" />
        <img src={projectFiveImg} alt="projectFiveImg" />
        <img src={projectSixImg} alt="projectSixImg" />
        <img src={projectSevenImg} alt="projectSevenImg" />
        <img src={projectEightImg} alt="projectEightImg" />
        <img src={projectNineImg} alt="projectNineImg" />
        <img src={projectTenImg} alt="projectTenImg" />
        <img src={projectElevenImg} alt="projectElevenImg" />
        <img src={projectTwelveImg} alt="projectTwelveImg" />
      </div>
      <div className="projectLower">
        <div className="projectLowerUpper">
          <button onClick={() => scrollToSection("form")} className="btn">Start Instant Project</button>
          <img src={whatsappIcon} width={170} height={48} alt="whatsappIcon" />
        </div>
        <div className="projectLowerLower callUsAt">
          <span>Or Call us at</span>
          <div>
            <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
            <span>+91 9084340987</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
