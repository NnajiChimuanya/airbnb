import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineRight } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { ChevronLeft } from "@mui/icons-material";
import { IndexType } from "typescript";

interface ItemProps {
  images: string[];
  name: string;
  location: string;
  distance: string;
  date: string;
  cost: string;
  rating: string;
}

const Item: React.FC<ItemProps> = ({
  images,
  name,
  location,
  distance,
  date,
  cost,
  rating,
}) => {
  const [liked, setLiked] = useState<React.SetStateAction<boolean>>(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleRight = (num: number) => {
    if (num < images.length - 1) {
      num++;
      setCurrentImage(num);
    }
  };

  const handleLeft = (num: number) => {
    if (num > 0) {
      num--;
      setCurrentImage(num);
    }
  };

  return (
    <div className="item">
      <div className="top">
        {liked ? (
          <FcLike className="liked" onClick={() => setLiked(!liked)} />
        ) : (
          <AiFillHeart className="like-icon" onClick={() => setLiked(!liked)} />
        )}

        <ChevronLeft
          onClick={() => handleLeft(currentImage)}
          className={`${currentImage > 0 ? "prev-image" : "display-none"} `}
        />

        <ChevronRight
          onClick={() => handleRight(currentImage)}
          className={`${
            currentImage < images.length - 1 ? "next-image" : "display-none"
          } `}
        />

        <div className="images">
          <img src={images[currentImage]} alt="name" />
        </div>
      </div>

      <div className="details-container">
        <div className="details">
          <h4 className="location">{`${name}, ${location}`}</h4>
          <p className="distance">{distance}</p>
          <p className="date">{date}</p>
          <p>
            <b>{cost}</b>
          </p>
        </div>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
