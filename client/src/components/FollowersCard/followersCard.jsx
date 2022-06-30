import React from "react";
import "./followersCard.css";
import { Followers } from "../../Data/FollowersData";
const followersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={follower.name}>
            <div>
              <img
                src={follower.img}
                alt={follower.username}
                className="followerImg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
              <button className="btn fc-btn">Follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default followersCard;
