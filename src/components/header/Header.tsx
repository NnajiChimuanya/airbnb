import React from "react";
import "./header.scss";
import { Search, Language, DensityMedium } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCcR9xjgPrA-QlIJfm7X7YS5FUvjph_FvBSBtP7oAvc3KbCLmD69P_VyJIJT4gCFEUA&usqp=CAU"
          alt="logo"
        />
      </div>

      <div className="search">
        <div className="search-container">
          <div className="anywhere"> Anywhere</div>
          <div className="anyweek"> Any week</div>

          <div className="guests">
            <div className="guests-container">
              <p>Add guests</p>
              <span>
                <Search />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="host">Become a patron</div>
        <div className="globe">
          <span>
            <Language />
          </span>
        </div>
        <div className="util">
          <DensityMedium className="density" />
          <Avatar className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
