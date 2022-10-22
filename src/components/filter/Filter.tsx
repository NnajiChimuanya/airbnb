import React, { useState } from "react";
import "./filter.scss";
import { filterList } from "./listData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MdOutlineTune } from "react-icons/md";

const Filter: React.FC = () => {
  const [active, setActive] = useState<React.SetStateAction<number>>(0);
  const [viewStart, setViewStart] = useState<React.SetStateAction<number>>(0);

  return (
    <div className="filter">
      <div className="list">
        {filterList.map((item, index) => {
          let { name, Icon } = item;
          return (
            <div className={`list-item ${active === index ? "active" : null}`}>
              <Icon className="icon" />
              <p
                onClick={() => {
                  setActive(index);
                }}
              >
                {name}
              </p>
            </div>
          );
        })}
        <div className="list-button">
          <span>
            {" "}
            <ChevronRightIcon
              onClick={() => {
                setViewStart(5);
              }}
            />
          </span>
        </div>
      </div>

      <div className="filter-button">
        <MdOutlineTune /> <p>Filters</p>
      </div>
    </div>
  );
};

export default Filter;
