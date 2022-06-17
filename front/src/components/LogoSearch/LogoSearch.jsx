import React from "react";
import Logo from "../../img/icon-left-font-monochrome-black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="Logo Groupomania" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
