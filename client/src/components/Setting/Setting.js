import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import "./Setting.css";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const Setting = () => {
  // User useContext
  const { userInfo, logout } = useContext(UserContext);

  // state
  const [seeMoreEmail, setSeeMoreEmail] = useState(false);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="setting">
      <div className="setting__container">
        <h1 className="setting__title">Setting</h1>

        <div className="setting__avatar">
          <img
            src={userInfo?.avatar}
            alt="hihi"
            className="setting__avatar-img"
          />
        </div>
        <div className="setting__avatar-button">
          <button>
            <Link to="/changeAvatar">Set avatar</Link>
          </button>
          {/* <Blog /> */}
        </div>
        <div className="setting__control">
          <div className="setting__control-label">username</div>
          <span className="setting_user-typo">{userInfo.username}</span>
        </div>
        <div className="setting__control" style={{ marginBottom: "20px" }}>
          <div className="setting__control-label">your email</div>
          <span className="setting_user-typo">
            {seeMoreEmail
              ? userInfo.email
              : userInfo.email
                  ?.slice(0, 5)
                  ?.padEnd(userInfo.email?.length, "*")}
          </span>
          <span
            className="setting_user-typo-seeall"
            style={{ padding: "10px 10px", cursor: "pointer" }}
            onClick={() => setSeeMoreEmail(!seeMoreEmail)}
          >
            {seeMoreEmail ? "Hide" : "See"}
          </span>
        </div>
        <span className="write__blog-button-save" style={{ marginTop: "20px" }}>
          Save
        </span>
        <span
          className="write__blog-button-save"
          style={{ marginTop: "20px" }}
          onClick={handleLogout}
        >
          <GoSignOut
            className="write__blog-button-color"
            style={{ fill: "white" }}
          />
          Logout
        </span>
      </div>
    </div>
  );
};

export default Setting;
