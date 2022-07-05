import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePost, likePost } from "../../api/PostRequest";
const moment = require("moment");

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const date = moment(data.createdAt).calendar();
  const dispatch = useDispatch;

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this post ??")) {
      deletePost(data._id, user._id);
      dispatch(deletePost(data._id));
    } else {
      console.log("Deleted aborted");
    }
  };
  return (
    <div className="Post">
      <FontAwesomeIcon
        icon={faXmark}
        className="deletePost"
        onClick={handleDelete}
      />
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="detail">
        <span> {data.desc}</span>
      </div>
      <span className="likes">
        {likes >= 2 ? `${likes}  likes` : `${likes} like`}
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
