import React from "react";
import Comment from "../Comment/Comment";
import "./Comments.css";

const Comments = ({ listComments }) => {
  return (
    <div className="Comments">
      {listComments.map(({ info, desc }) => {
        return <Comment info={info} desc={desc} key={desc} />;
      })}
    </div>
  );
};

export default Comments;
