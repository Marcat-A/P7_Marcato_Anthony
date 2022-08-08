import React, { useState, useRef } from "react";
import "./PostUpdate.css";
import { faImages, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/PostAction";
import { uploadImage } from "../../actions/UploadAction";

const PostUpdate = ({ data, updateOpened, setUpdateOpened }) => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(data.image);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      image: data.image,
      desc: desc.current.value,
      _id: data._id,
    };
    const newImg = new FormData();

    const hasNewImage = image !== undefined;

    if (hasNewImage) {
      const filename = Date.now() + image.name;
      newImg.append("name", filename);
      newImg.append("file", image);

      updatedPost.image = filename;

      try {
        dispatch(uploadImage(newImg));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updatePost(data._id, updatedPost));
    setUpdateOpened(false);
  };
  return (
    <div className="PostShare">
      <div>
        {image && (
          <div className="previewImage">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setImage(null)}
            />
            <img
              src={image ? "images/" + data.image : URL.createObjectURL(image)}
              alt=""
            />
          </div>
        )}
        <input
          type="text"
          placeholder="What's Happening?"
          ref={desc}
          info={user.name}
          required
          defaultValue={data.desc}
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
      </div>
    </div>
  );
};

export default PostUpdate;
