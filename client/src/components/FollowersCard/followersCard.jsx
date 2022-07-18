import React from "react";
import "./followersCard.css";
import User from "../User/User";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
import { useIntl } from "react-intl";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const intl = useIntl();
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>{intl.formatMessage({ id: "followersCard.title" })}</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default FollowersCard;
