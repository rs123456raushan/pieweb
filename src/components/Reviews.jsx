import React from "react";
import { leftArrowIcon, phoneIcon, rightArrowIcon } from "../assets/icons";
import { clientReviewImg } from "../assets/images";

const Reviews = () => {
  return (
    <div className="projectWrapper reviewsWrapper">
      <div className="projectUpper reviewsUpper">
        <div className="projectUpperHeading reviewUpperHeading">
          <h3 className="heading">What our clients say about our work</h3>
          <div className="callUsAt">
            <span>Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>+91 8588558855</span>
            </div>
          </div>
        </div>
        <div className="projectUpperLower reviewUpperLower para">
          we work with Quality and scalability.
        </div>
      </div>
      <div className="reviewsLower">
        <div className="reviewsLowerUpper">
          <div className="reviewsLowerLeft">
            <img
              width={302}
              height={422}
              src={clientReviewImg}
              alt="clientReviewImg"
            />
          </div>
          <div className="reviewsLowerRight">
            <h3 className="heading">App-solutely Impressive!</h3>
            <p className="para">
              Our app project felt overwhelming until PIE WebServices stepped
              in. Their expertise in both design and strategy made everything
              click, turning our idea into an app we're genuinely proud of. If
              you're aiming for digital brilliance, PIE is the way to go!
            </p>
            <span>Amit Gupta, CEO of FitSync</span>
          </div>
        </div>
        <div className="reviewsLowerLower">
          <span>
            <img
              width={9}
              height={16}
              src={leftArrowIcon}
              alt="leftArrowIcon"
            />
          </span>
          <span>
            <img
              width={9}
              height={16}
              src={rightArrowIcon}
              alt="rightArrowIcon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
