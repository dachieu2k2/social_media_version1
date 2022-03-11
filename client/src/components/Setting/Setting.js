import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./Setting.css";
import { Link } from "react-router-dom";

const Setting = () => {
  const { userInfo } = useContext(UserContext);
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
          <input type="text" className="setting__control-input" />
        </div>
        <div className="setting__control">
          <div className="setting__control-label">your email</div>
          <input type="text" className="setting__control-input" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
