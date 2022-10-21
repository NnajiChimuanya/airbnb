import React, { useState } from "react";
import "./airbnb.scss";
import { data } from "./mockupdata";
import Item from "./Item";

const Airbnb: React.FC = () => {
  return (
    <div className="airbnb">
      {data.map((item, id) => {
        let { images, name, location, distance, date, cost, rating } = item;
        return (
          <Item
            key={id}
            images={images}
            name={name}
            distance={distance}
            date={date}
            location={location}
            cost={cost}
            rating={rating}
          />
        );
      })}
    </div>
  );
};

export default Airbnb;
