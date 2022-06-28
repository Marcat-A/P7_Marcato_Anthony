import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faCommentDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="postReact">
        <FontAwesomeIcon icon={data.liked ? faHeartCircleCheck : faHeart} />
        <FontAwesomeIcon icon={faCommentDots} />
        <FontAwesomeIcon icon={faShare} />
      </div>
      <span>{data.likes} likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
