import React from "react";

const Contract = ({ contents }) => {
  return (
    <div className="contractWrapper">
      <h2 className="heading">Contract from government of India.</h2>
      <div className="contractImageWrapper">
        <div className="contractLeft">
          <div className="contractImgHover">
            <img src={contents.contracts && `http://localhost:1337/${contents.contracts[2].url}`} alt="contractImageOne" />
            <div className="contractDivHover">
              <h3>Uttarafish</h3>
              <p>{contents.contract_text}</p>
              <button>View</button>
            </div>
          </div>
        </div>
        <div className="contractRight">
          <div className="contractImgHover">
            <img src={contents.contracts && `http://localhost:1337/${contents.contracts[0].url}`} alt="contractImageTwo" />
            <div className="contractDivHover">
              <h3>Uttarafish</h3>
              <p>{contents.contract_text}</p>
              <button>View</button>
            </div>
          </div>
          <div className="contractImgHover">
            <img src={contents.contracts && `http://localhost:1337/${contents.contracts[1].url}`} alt="contractImageThree" />
            <div className="contractDivHover">
              <h3>Uttarafish</h3>
              <p>{contents.contract_text}</p>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
