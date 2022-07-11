import React, { useState } from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, unLikePost } from "../../actions/PostAction";
import PostUpdateModal from "../PostUpdateModal/PostUpdateModal";
import Comment from "../Comment/Comment";
const moment = require("moment");

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const liked = data.likes.includes(user._id);
  const date = moment(data.createdAt).calendar();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLike = () => {
    liked
      ? dispatch(unLikePost(data._id, user._id))
      : dispatch(likePost(data._id, user._id));
  };

  const showComment = () => {
    commentOpen ? setCommentOpen(false) : setCommentOpen(true);
  };
  const showImage = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  // console.log(data);

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
          <PostUpdateModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            data={data}
          />
        </>
      ) : (
        ""
      )}

      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
        onClick={showImage}
      />
      {isOpen && (
        <dialog open className="dialog">
          <img
            src={process.env.REACT_APP_PUBLIC_FOLDER + data.image}
            alt=""
            onClick={showImage}
          />
        </dialog>
      )}

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
        <FontAwesomeIcon icon={faComment} onClick={showComment} />
      </div>
      <div className="created">
        @{data.info} - {date}
      </div>
      {commentOpen ? (
        <Comment data={data} setCommentOpen={setCommentOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
