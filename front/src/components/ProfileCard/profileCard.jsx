import React from "react";
import Cover from "../../img/coverImage.png";
import Profile from "../../img/profilImage.jpg";
import "./profileCard.css";

const profileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="Couverture" />
        <img src={Profile} alt="Profil" />
      </div>
      <div className="ProfileName">
        <span>Anthony Marcato</span>
        <span>Développeur Web</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,999</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>8526</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default profileCard;
