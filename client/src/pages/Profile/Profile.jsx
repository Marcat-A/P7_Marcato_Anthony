import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/profileCard";
import PostSide from "../../components/PostSide/postSide";
import RightSide from "../../components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-Center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
