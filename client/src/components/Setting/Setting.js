import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./Setting.css";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const Setting = () => {
  const { userInfo, logout } = useContext(UserContext);
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
          <input type="text" className="write__blog-input setting-change" />
          <span
            className="write__blog-button-save"
            style={{ marginTop: "20px" }}
          >
            Edit
          </span>
        </div>
        <div className="setting__control" style={{ marginBottom: "20px" }}>
          <div className="setting__control-label">your email</div>
          <input type="text" className="write__blog-input setting-change" />
          <span
            className="write__blog-button-save"
            style={{ marginTop: "20px" }}
          >
            Edit
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
