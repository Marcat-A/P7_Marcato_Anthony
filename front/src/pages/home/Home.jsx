import React from "react";
import PostSide from "../../components/PostSide/postSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
