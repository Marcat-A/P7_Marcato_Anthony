import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchway,
  faGear,
  faDragon,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <FontAwesomeIcon icon={faArchway} />
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faDragon} />
        <FontAwesomeIcon icon={faMessage} />
      </div>
      <TrendCard />
      <button className="btn r-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
