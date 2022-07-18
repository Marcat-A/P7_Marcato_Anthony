import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest";
import { logout } from "../../actions/AuthAction";
import { useIntl } from "react-intl";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const intl = useIntl();

  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>{intl.formatMessage({ id: "infoCard.title" })}</h4>
        {user._id === profileUserId ? (
          <div>
            <FontAwesomeIcon
              icon={faPencil}
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <span>
          <b>{intl.formatMessage({ id: "infoCard.status" })}</b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>{intl.formatMessage({ id: "infoCard.livesIn" })}</b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>{intl.formatMessage({ id: "infoCard.worksAt" })}</b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="btn btn-logout" onClick={handleLogOut}>
        {intl.formatMessage({ id: "infoCard.logout" })}
      </button>
    </div>
  );
};

export default InfoCard;
