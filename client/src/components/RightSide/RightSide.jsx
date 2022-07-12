import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArchway, faGear } from "@fortawesome/free-solid-svg-icons";
import "./RightSide.css";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          <FontAwesomeIcon icon={faArchway} />
        </Link>
        <FontAwesomeIcon icon={faGear} />
      </div>
      {/* <TrendCard /> */}
      <button className="btn r-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
