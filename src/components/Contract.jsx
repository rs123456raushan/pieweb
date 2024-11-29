import React from "react";
import {
  contractImageOne,
  contractImageThree,
  contractImageTwo,
} from "../assets/images";

const Contract = () => {
  return (
    <div className="contractWrapper">
      <h2 className="heading">Government Contracts (We will show some of our invoices)</h2>
      <div className="contractImageWrapper">
        <div className="contractRight">
          <div className="contractImgHover">
            <img src={contractImageOne} alt="contractImageTwo" />
            <div className="contractDivHover">
              <h3>Uttarafish : Fisheries Department</h3>
              {/* <p>
                We started designing website in 2009 and since then i have
                developed more than 900 websites and APPs. Some of my best works
                are mentioned below.
              </p>
              <button>View</button> */}
            </div>
          </div>
          <div className="contractImgHover">
            <img src={contractImageThree} alt="contractImageThree" />
            <div className="contractDivHover">
              <h3>Aanchal Dairy ( Uttarakhand Govt)</h3>
              {/* <p>
                We started designing website in 2009 and since then i have
                developed more than 900 websites and APPs. Some of my best works
                are mentioned below.
              </p>
              <button>View</button> */}
            </div>
          </div>
        </div>
        <div className="contractLeft">
          <div className="contractImgHover">
            <img src={contractImageTwo} alt="contractImageOne" />
            <div className="contractDivHover">
              <h3>Bakraw : Animal Husbandry (Uttarakhand Govt)</h3>
              {/* <p>
                We started designing website in 2009 and since then i have
                developed more than 900 websites and APPs. Some of my best works
                are mentioned below.
              </p>
              <button>View</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;