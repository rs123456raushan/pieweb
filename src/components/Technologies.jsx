import React from "react";
import {
  technologyEightImg,
  technologyFiveImg,
  technologyFourImg,
  technologyNineImg,
  technologyOneImg,
  technologySevenImg,
  technologySixImg,
  technologyTenImg,
  technologyThreeImg,
  technologyTwoImg,
} from "../assets/images";

const Technologies = () => {
  return (
    <div className="technologiesWrapper">
      <h2 className="heading">Technologies we have worked with</h2>
      <div className="technologies">
        <div>
          <img src={technologyOneImg} alt="technologyOneImg" />
        </div>
        <div>
          <img src={technologyTwoImg} alt="technologyTwoImg" />
        </div>
        <div>
          <img src={technologyThreeImg} alt="technologyThreeImg" />
        </div>
        <div>
          <img src={technologyFourImg} alt="technologyFourImg" />
        </div>
        <div>
          <img src={technologyFiveImg} alt="technologyFiveImg" />
        </div>
        <div>
          <img src={technologySixImg} alt="technologySixImg" />
        </div>
        <div>
          <img src={technologySevenImg} alt="technologySevenImg" />
        </div>
        <div>
          <img src={technologyEightImg} alt="technologyEightImg" />
        </div>
        <div>
          <img src={technologyNineImg} alt="technologyNineImg" />
        </div>
        <div>
          <img src={technologyTenImg} alt="technologyTenImg" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
