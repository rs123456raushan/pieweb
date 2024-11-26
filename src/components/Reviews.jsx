import React, { useState } from "react";
import { leftArrowIcon, phoneIcon, rightArrowIcon } from "../assets/icons";
import { clientReviewImg } from "../assets/images";

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
              width={302}
              height={422}
              src={clientReviewImg}
              alt="clientReviewImg"
            />
          </div>
          <div className="reviewsLowerRight">
            <h3 className="heading">App-solutely Impressive!</h3>
            {(index === 0) && <p className="para">
              Nuclay is a competent website service provider with a range of high value-for-money services around e-commerce website development and management. Their team was responsive, professional, and Jaideep leads the team by example. Highly recommended!
            </p>}
            {(index === 0) && <span>Saugata, Founder, Foreva</span>}
            {(index === 1) && <p className="para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat amet assumenda perferendis velit sequi unde perspiciatis dolorum asperiores? Facere fuga ex voluptatem architecto accusamus, cumque at suscipit tempore sunt?
            </p>}
            {(index === 1) && <span>Govil Khattar, Founder, Agreenco</span>}
            {(index === 2) && <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, ipsum autem quos eligendi rem inventore reiciendis temporibus nihil quas numquam eius quisquam magnam perferendis dolorem voluptas nesciunt ut commodi.
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
