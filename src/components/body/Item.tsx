import React, { useState } from "react";
import { AiFillHeart, AiOutlineRight } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Idata from "../../interfaces/IData";

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

  return (
    <div className="item">
      <div className="top">
        {liked ? (
          <FcLike className="liked" onClick={() => setLiked(!liked)} />
        ) : (
          <AiFillHeart className="like-icon" onClick={() => setLiked(!liked)} />
        )}

        <ChevronRight className="next-image" />

        <div className="images">
          {images.map((name, id) => {
            return <img src={name} alt="name" />;
          })}
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
