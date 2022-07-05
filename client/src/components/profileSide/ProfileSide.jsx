import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import "./profileSide.css";
import ProfileCard from "../ProfileCard/profileCard";
import FollowersCard from "../FollowersCard/followersCard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
