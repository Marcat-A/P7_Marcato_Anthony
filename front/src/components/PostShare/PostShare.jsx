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

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="Person profil" />
      <div>
        <input type="text" placeholder="What's Happening?" />
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
          <button className="btn ps-btn">Share</button>
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
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
