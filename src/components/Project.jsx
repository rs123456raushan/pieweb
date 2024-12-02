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

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+919084340987'
    const message = encodeURIComponent("Hello, I would like to talk to you regarding project requirements !!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank"); // Opens in a new tab
  };

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
            We pay focus on each of our clients requirement so that a great
            delivery can be met.
          </span>
        </div>
      </div>
      <div className="projectMiddle">
        <img
          src={projectOneImg}
          onClick={() => window.open("https://parallelcap.in/", "_blank")}
          alt="projectOneImg"
        />
        <img
          src={projectTwoImg}
          onClick={() => window.open("https://www.svcl.in/", "_blank")}
          alt="projectTwoImg"
        />
        <img
          src={projectThreeImg}
          onClick={() => window.open("https://jaiviksattva.in/", "_blank")}
          alt="projectThreeImg"
        />
        <img
          src={projectFourImg}
          onClick={() =>
            window.open("https://www.supertekwindows.com.au/", "_blank")
          }
          alt="projectFourImg"
        />
        <img
          src={projectFiveImg}
          onClick={() => window.open("https://sugassence.com/", "_blank")}
          alt="projectFiveImg"
        />
        <img
          src={projectSixImg}
          onClick={() =>
            window.open("https://dhauladharpickles.com/", "_blank")
          }
          alt="projectSixImg"
        />
        <img
          src={projectSevenImg}
          onClick={() =>
            window.open("https://fitness-a-message-away.com/", "_blank")
          }
          alt="projectSevenImg"
        />
        <img
          src={projectEightImg}
          onClick={() => window.open("https://aiqahealth.com/", "_blank")}
          alt="projectEightImg"
        />
        <img
          src={projectNineImg}
          onClick={() => window.open("https://hungritos.com/", "_blank")}
          alt="projectNineImg"
        />
        <img
          src={projectTenImg}
          onClick={() => window.open("https://verdantimpact.com/", "_blank")}
          alt="projectTenImg"
        />
        <img
          src={projectElevenImg}
          onClick={() =>
            window.open("https://santushtichakkiatta.com/", "_blank")
          }
          alt="projectElevenImg"
        />
        <img
          src={projectTwelveImg}
          onClick={() =>
            window.open("https://resilientthoughts.com/", "_blank")
          }
          alt="projectTwelveImg"
        />
      </div>
      <div className="projectLower">
        <div className="projectLowerUpper">
          <button onClick={() => scrollToSection("form")} className="btn">
            Start Instant Project
          </button>
          <img onClick={handleWhatsAppRedirect} src={whatsappIcon} width={170} height={48} alt="whatsappIcon" />
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
