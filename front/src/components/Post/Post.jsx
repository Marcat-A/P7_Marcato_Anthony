import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="postReact">
        <FontAwesomeIcon icon={data.liked ? faHeartCircleCheck : faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faShareFromSquare} />
      </div>
      <span className="likes">{data.likes} likes</span>
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
