import React from "react";
import { useIntl } from "react-intl";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Settings.css";

const Settings = ({ onLanguageChange }) => {
  const handleOnLanguageChange = React.useCallback(
    (lang) => () => onLanguageChange(lang),
    [onLanguageChange]
  );
  const intl = useIntl();

  return (
    <div className="Settings">
      <ProfileSide />
      <div className="lang">
        <h1>{intl.formatMessage({ id: "settings.title" })}</h1>
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
