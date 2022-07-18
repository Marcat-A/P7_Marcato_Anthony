import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArchway, faGear } from "@fortawesome/free-solid-svg-icons";
import "./RightSide.css";
import ShareModal from "../ShareModal/ShareModal";
import { useIntl } from "react-intl";

const RightSide = ({ location }) => {
  const intl = useIntl();
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          <FontAwesomeIcon icon={faArchway} />
        </Link>
        <Link to="../settings">
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
      {/* <TrendCard /> */}
      {location === "settings" ? (
        ""
      ) : (
        <>
          <button className="btn r-btn" onClick={() => setModalOpened(true)}>
            {intl.formatMessage({ id: "share.button" })}
          </button>
          <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </>
      )}
    </div>
  );
};

export default RightSide;
