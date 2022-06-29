import React from "react";
import Logo from "../../img/icon-left-font.png";
import "./LogoSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="Logo Groupomania" className="logo" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
