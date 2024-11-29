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
        <a href="https://parallelcap.in/" target="_blank" rel="noreferrer">
          <img src={projectOneImg} alt="projectOneImg" />
        </a>
        <a href="https://www.svcl.in/" target="_blank" rel="noreferrer">
          <img src={projectTwoImg} alt="projectTwoImg" />
        </a>
        <a href="https://jaiviksattva.in/" target="_blank" rel="noreferrer">
          <img src={projectThreeImg} alt="projectThreeImg" />
        </a>
        <a href="https://www.supertekwindows.com.au/" target="_blank" rel="noreferrer">
          <img src={projectFourImg} alt="projectFourImg" />
        </a>
        <a href="https://sugassence.com/" target="_blank" rel="noreferrer">
          <img src={projectFiveImg} alt="projectFiveImg" />
        </a>
        <a href="https://dhauladharpickles.com/" target="_blank" rel="noreferrer">
          <img src={projectSixImg} alt="projectSixImg" />
        </a>
        <a href="https://fitness-a-message-away.com/" target="_blank" rel="noreferrer">
          <img src={projectSevenImg} alt="projectSevenImg" />
        </a>
        <a href="https://aiqahealth.com/" target="_blank" rel="noreferrer">
          <img src={projectEightImg} alt="projectEightImg" />
        </a>
        <a href="https://hungritos.com/" target="_blank" rel="noreferrer">
          <img src={projectNineImg} alt="projectNineImg" />
        </a>
        <a href="https://verdantimpact.com/" target="_blank" rel="noreferrer">
          <img src={projectTenImg} alt="projectTenImg" />
        </a>
        <a href="https://santushtichakkiatta.com/" target="_blank" rel="noreferrer">
          <img src={projectElevenImg} alt="projectElevenImg" />
        </a>
        <a href="https://resilientthoughts.com/" target="_blank" rel="noreferrer">
          <img src={projectTwelveImg} alt="projectTwelveImg" />
        </a>
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
