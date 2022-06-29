import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Infos</h4>
        <FontAwesomeIcon icon={faPencil} onClick={() => setModalOpened(true)} />
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>
      <div className="info">
        <span>
          <b>Status : </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in : </b>
        </span>
        <span>Grenoble</span>
      </div>
      <div className="info">
        <span>
          <b>Works at : </b>
        </span>
        <span>OpenClassRooms</span>
      </div>
      <button className="btn btn-logout">Logout</button>
    </div>
  );
};

export default InfoCard;
