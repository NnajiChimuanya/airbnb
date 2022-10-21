import React from "react";
import "./airbnb.scss";
import { AiFillHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Airbnb = () => {
  return (
    <div className="airbnb">
      <div className="item">
        <div className="top">
          <AiFillHeart className="like-icon" />

          <div className="images">
            <img
              src="https://bluprint.onemega.com/wp-content/uploads/2018/03/myhome-tropical-house-image-4.jpg"
              alt="l"
            />
          </div>
        </div>

        <div className="details-container">
          <div className="details"></div>
          <div className="start"></div>
        </div>
      </div>

      <div className="item">
        <div className="top">
          <AiFillHeart className="like-icon" />

          <div className="images">
            <img
              src="https://bluprint.onemega.com/wp-content/uploads/2018/03/myhome-tropical-house-image-4.jpg"
              alt="l"
            />
          </div>
        </div>

        <div className="details-container">
          <div className="details"></div>
          <div className="start"></div>
        </div>
      </div>

      <div className="item">
        <div className="top">
          <AiFillHeart className="like-icon" />

          <div className="images">
            <img
              src="https://bluprint.onemega.com/wp-content/uploads/2018/03/myhome-tropical-house-image-4.jpg"
              alt="l"
            />
          </div>
        </div>

        <div className="details-container">
          <div className="details"></div>
          <div className="start"></div>
        </div>
      </div>

      <div className="item">
        <div className="top">
          <AiFillHeart className="like-icon" />

          <div className="images">
            <img
              src="https://bluprint.onemega.com/wp-content/uploads/2018/03/myhome-tropical-house-image-4.jpg"
              alt="l"
            />
          </div>
        </div>

        <div className="details-container">
          <div className="details"></div>
          <div className="start"></div>
        </div>
      </div>
    </div>
  );
};

export default Airbnb;
