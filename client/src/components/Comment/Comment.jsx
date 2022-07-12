import React from "react";
import "./Comment.css";

const Comment = ({ info, desc }) => {
  return (
    <div className="Comment">
      <div className="info">{info}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default Comment;
