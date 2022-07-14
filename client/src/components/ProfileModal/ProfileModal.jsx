import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProfileModal.css";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const filename = Date.now() + profileImage.name;
      data.append("name", filename);
      data.append("file", profileImage);
      UserData.profilePicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const filename = Date.now() + coverImage.name;
      data.append("name", filename);
      data.append("file", coverImage);
      UserData.coverPicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {window.matchMedia("(max-width:767px)").matches ? (
        <form action="" className="infoForm">
          <h3>Your Infos</h3>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="Firstname"
            onChange={handleChange}
            value={formData.firstname || ""}
          />
          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="LastName"
            onChange={handleChange}
            value={formData.lastname || ""}
          />
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Work At"
            onChange={handleChange}
            value={formData.worksAt || ""}
          />
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives In"
            onChange={handleChange}
            value={formData.livesin || ""}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country || ""}
          />
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="Relationship Status"
            onChange={handleChange}
            value={formData.relationship || ""}
          />
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
          <button className="btn info-btn" onClick={handleSubmit}>
            Update
          </button>
        </form>
      ) : (
        <form action="" className="infoForm">
          <h3>Your Infos</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="Firstname"
              onChange={handleChange}
              value={formData.firstname || ""}
            />
            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="LastName"
              onChange={handleChange}
              value={formData.lastname || ""}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Work At"
              onChange={handleChange}
              value={formData.worksAt || ""}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="livesin"
              placeholder="Lives In"
              onChange={handleChange}
              value={formData.livesin || ""}
            />
            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              value={formData.country || ""}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="relationship"
              placeholder="Relationship Status"
              onChange={handleChange}
              value={formData.relationship || ""}
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" onChange={onImageChange} />
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange} />
          </div>
          <button className="btn info-btn" onClick={handleSubmit}>
            Update
          </button>
        </form>
      )}
    </Modal>
  );
}

export default ProfileModal;
