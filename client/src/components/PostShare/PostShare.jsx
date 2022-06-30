import React, { useState, useRef } from "react";
import ProfileImg from "../../img/profilImage.jpg";
import "./PostShare.css";
import {
  faImages,
  faCirclePlay,
  faCompass,
  faCalendarCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(uploadPost(newPost));
    reset();
  };
  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="Person profil" />
      <div>
        <input
          type="text"
          placeholder="What's Happening?"
          ref={desc}
          required
        />
        <div className="postOptions">
          <div className="option" onClick={() => imageRef.current.click()}>
            <FontAwesomeIcon icon={faImages} />
            Photo
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faCirclePlay} />
            Video
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faCompass} />
            Location
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faCalendarCheck} />
            Schedule
          </div>
          <button
            className="btn ps-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setImage(null)}
            />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
