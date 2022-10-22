import React from "react";
import { Language } from "@mui/icons-material";
import { FaChevronUp } from "react-icons/fa";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>© 2022 Airbnb, Inc.</p>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="right">
        <div>
          <Language className="language" />
          <h4>English (US)</h4>
        </div>

        <div>
          <b>$</b>
          <h4> USD</h4>
        </div>

        <div>
          <h4>Support & resources</h4>
          <FaChevronUp className="chevron-up" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
