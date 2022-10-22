import React from "react";
import { Link } from "react-router-dom";

interface IShowMap {
  text: string;
  link: string;
}

const ShowMap: React.FC<IShowMap> = ({ text, link }) => {
  return (
    <div className="showMap">
      <Link className="link" to={link}>
        {" "}
        <h4>{text}</h4>
      </Link>
    </div>
  );
};

export default ShowMap;
