import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Comment.css";

import Profile from "../../img/profilImage.png";
import { commentPost } from "../../actions/PostAction";

const Comment = ({ data, setCommentOpen }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const desc = useRef();
  const reset = () => {
    desc.current.value = "";
    setCommentOpen(false);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const newComment = {
      desc: desc.current.value,
      info: user.username,
    };

    dispatch(commentPost(data._id, newComment));
    reset();
  };
  return (
    <div className="Comment">
      <div className="Comment_card">
        <div className="info">
          <img
            src={
              user.profilePicture ? serverPublic + user.profilePicture : Profile
            }
            alt="Profil"
          />
        </div>
        <div className="text">
          <input
            type="text"
            name="message"
            id="message"
            className="inputMessage"
            placeholder="Please write your comment here ...."
            ref={desc}
          />
          <button className="btn" type="submit" onClick={handleComment}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
