import React from "react";
import {
  contractImageOne,
  contractImageThree,
  contractImageTwo,
} from "../assets/images";

const Contract = () => {
  return (
    <div className="contractWrapper">
      <h2 className="heading">Contract from government of India.</h2>
      <div className="contractImageWrapper">
        <div className="contractLeft">
          <img src={contractImageOne} alt="contractImageOne" />
        </div>
        <div className="contractRight">
          <img src={contractImageTwo} alt="contractImageTwo" />
          <img src={contractImageThree} alt="contractImageThree" />
        </div>
      </div>
    </div>
  );
};

export default Contract;
