import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchway,
  faGear,
  faDragon,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <FontAwesomeIcon icon={faArchway} />
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faDragon} />
        <FontAwesomeIcon icon={faMessage} />
      </div>
      <TrendCard />
      <button className="btn r-btn">Share</button>
    </div>
  );
};

export default RightSide;
