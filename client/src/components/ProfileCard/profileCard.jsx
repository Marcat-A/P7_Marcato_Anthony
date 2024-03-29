import React from "react";
import Cover from "../../img/coverImage.png";
import Profile from "../../img/profilImage.png";
import "./profileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const intl = useIntl();
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={user.coverPicture ? serverPublic + user.coverPicture : Cover}
          alt="Couverture"
        />
        <img
          src={
            user.profilePicture ? serverPublic + user.profilePicture : Profile
          }
          alt="Profil"
        />
      </div>
      <div className="ProfileName">
        <span>{user.firstname + " " + user.lastname}</span>
        <span>
          {user.worksAt
            ? user.worksAt
            : intl.formatMessage({ id: "profileCard.worksAt" })}
        </span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`}>
            {intl.formatMessage({ id: "profileCard.myProfile" })}
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
