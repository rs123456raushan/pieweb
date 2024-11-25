import React from "react";
import { leftArrowIcon, phoneIcon, rightArrowIcon } from "../assets/icons";
import { clientReviewImg } from "../assets/images";

const Reviews = ({ contents, contacts }) => {
  return (
    <div className="projectWrapper reviewsWrapper">
      <div className="projectUpper reviewsUpper">
        <div className="projectUpperHeading reviewUpperHeading">
          <h3 className="heading">What our clients say about our work</h3>
          <div className="callUsAt">
            <span>Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>{contacts.contact}</span>
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
            <h3 className="heading">{contents.reviews?.reviews[0].title}</h3>
            <p className="para">{contents.reviews?.reviews[0].description}</p>
            <span>{contents.reviews?.reviews[0].name}</span>
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
