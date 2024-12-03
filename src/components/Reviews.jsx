import React, { useState } from "react";
import { leftArrowIcon, phoneIcon, rightArrowIcon } from "../assets/icons";
import { clientReviewImg1, clientReviewImg2, clientReviewImg3 } from "../assets/images";

const Reviews = () => {

  const [index, setIndex] = useState(0)

  const setRightSlideIndex = () => {
    setIndex((index + 1) % 3)
  }

  const setLeftSlideIndex = () => {
    setIndex((index + 2) % 3)
  }

  return (
    <div className="projectWrapper reviewsWrapper">
      <div className="projectUpper reviewsUpper">
        <div className="projectUpperHeading reviewUpperHeading">
          <h3 className="heading">What our clients say about our work</h3>
          <div className="callUsAt">
            <span>Call us at</span>
            <div>
              <img width={34} height={34} src={phoneIcon} alt="phoneIcon" />
              <span>+91 9084340987</span>
            </div>
          </div>
        </div>
        <div className="projectUpperLower reviewUpperLower para">
          We work with quality and scalability.
        </div>
      </div>
      <div className="reviewsLower">
        <div className="reviewsLowerUpper">
          <div className="reviewsLowerLeft">
            <img
              src={(index === 0) ? clientReviewImg1 : (index === 1) ? clientReviewImg2 : (index === 2) ? clientReviewImg3 : null}
              alt="clientReviewImg"
            />
          </div>
          <div className="reviewsLowerRight">
            {(index === 0) && <p className="para">
              PieWeb Services is a competent website service provider with a range of high value-for-money services around e-commerce website development and management. Their team was responsive, professional, and Jaideep leads the team by example. Highly recommended!
            </p>}
            {(index === 0) && <span>Saugata, Founder, Foreva</span>}
            {(index === 1) && <p className="para">
              Jaideep has helped me greatly in getting an e-commerce platform for Agreenco. Jaideep and his team are professional and help me maintain and develop more features. I highly recommend them if you are looking for a long-term tech team.
            </p>}
            {(index === 1) && <span>Govil Khattar, Founder, Agreenco</span>}
            {(index === 2) && <p className="para">
              Jaideep and his team have been instrumental in the development of Resilient Thoughts, which is an ongoing project. I appreciate the insights Jaideep shares with me and the trust he fosters. I look forward to continuing our work together and wish him all the best.
            </p>}
            {(index === 2) && <span>Gaurav, Founder, Resilient Thoughts</span>}
          </div>
        </div>
        <div className="reviewsLowerLower">
          <span onClick={setLeftSlideIndex}>
            <img
              width={9}
              height={16}
              src={leftArrowIcon}
              alt="leftArrowIcon"
            />
          </span>
          <span onClick={setRightSlideIndex}>
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
