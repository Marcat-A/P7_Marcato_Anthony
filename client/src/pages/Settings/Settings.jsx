import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Settings.css";

const Settings = ({ onLanguageChange }) => {
  const handleOnLanguageChange = React.useCallback(
    (lang) => () => onLanguageChange(lang),
    [onLanguageChange]
  );

  return (
    <div className="Settings">
      <ProfileSide />
      <div className="lang">
        <h1>Languages</h1>
        <button
          className="langButton btn"
          onClick={handleOnLanguageChange("fr")}
        >
          Français
        </button>
        <button
          className="langButton btn"
          onClick={handleOnLanguageChange("en")}
        >
          English
        </button>
      </div>
      <RightSide location="settings" />
    </div>
  );
};

export default Settings;
