import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../actions/UserAction";
import ProfileImg from "../../img/profilImage.png";

const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user._id))
      : dispatch(followUser(person._id, user._id));
    setFollowing((prev) => !prev);
  };
  return (
    <div>
      <div className="follower" key={person.name}>
        <div>
          <img
            src={
              person.coverPicture
                ? serverPublic + person.profilePicture
                : ProfileImg
            }
            alt={person.username}
            className="followerImg"
          />
          <div className="name">
            <span>{person.firstname + " " + person.lastname}</span>
            <span>@{person.username}</span>
          </div>
          <button className="btn fc-btn" onClick={handleFollow}>
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
