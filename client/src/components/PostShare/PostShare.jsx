import React, { useState, useRef } from "react";
import ProfileImg from "../../img/profilImage.png";
import "./PostShare.css";
import { faImages, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import { useIntl } from "react-intl";

const PostShare = () => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const intl = useIntl();

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
      name: user.name,
      info: user.username,
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
      <img
        src={
          user.profilePicture ? serverPublic + user.profilePicture : ProfileImg
        }
        alt="Person profil"
      />
      <div>
        <input
          type="text"
          placeholder={intl.formatMessage({ id: "share.placeholder" })}
          ref={desc}
          info={user.name}
          required
        />
        <div className="postOptions">
          <div className="option" onClick={() => imageRef.current.click()}>
            <FontAwesomeIcon icon={faImages} />
            Photo
          </div>
          <button
            className="btn ps-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "Uploading..."
              : intl.formatMessage({ id: "share.button" })}
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
