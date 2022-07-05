import React from "react";
import Logo from "../../img/icon-left-font.png";
import "./LogoSearch.css";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home">
        <img src={Logo} alt="Logo Groupomania" className="logo" />
      </Link>
    </div>
  );
};

export default LogoSearch;
