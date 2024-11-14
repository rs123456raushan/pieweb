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
          <img
            width={86}
            height={100}
            src={technologyOneImg}
            alt="technologyOneImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyTwoImg}
            alt="technologyTwoImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyThreeImg}
            alt="technologyThreeImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyFourImg}
            alt="technologyFourImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyFiveImg}
            alt="technologyFiveImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologySixImg}
            alt="technologySixImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologySevenImg}
            alt="technologySevenImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyEightImg}
            alt="technologyEightImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyNineImg}
            alt="technologyNineImg"
          />
        </div>
        <div>
          <img
            width={86}
            height={100}
            src={technologyTenImg}
            alt="technologyTenImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
