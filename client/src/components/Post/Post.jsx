import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePost, likePost, unLikePost } from "../../actions/PostAction";
const moment = require("moment");

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const liked = data.likes.includes(user._id);
  const date = moment(data.createdAt).calendar();
  const dispatch = useDispatch();

  const handleLike = () => {
    liked
      ? dispatch(unLikePost(data._id, user._id))
      : dispatch(likePost(data._id, user._id));
  };

  const handleUpdate = () => {};

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this post ??")) {
      dispatch(deletePost(data._id, user._id));
    } else {
      console.log("Deleted aborted");
    }
  };
  return (
    <div className="Post">
      {user._id === data.userId ? (
        <>
          <FontAwesomeIcon
            icon={faXmark}
            className="deletePost"
            onClick={handleDelete}
          />
          <FontAwesomeIcon
            icon={faPen}
            className="modifPost"
            onClick={handleUpdate}
          />
        </>
      ) : (
        ""
      )}

      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="detail">
        <span> {data.desc}</span>
      </div>
      <span className="likes">
        {data.likes.length >= 2
          ? `${data.likes.length}  likes`
          : `${data.likes.length} like`}
      </span>
      <div className="postReact">
        <FontAwesomeIcon
          icon={liked ? faHeartCircleCheck : faHeart}
          onClick={handleLike}
        />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faShareFromSquare} />
      </div>
      <div className="created">
        @{data.info} - {date}
      </div>
    </div>
  );
};

export default Post;
