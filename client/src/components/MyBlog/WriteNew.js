import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";

const WriteNew = ({ handleClickShow }) => {
  const { userInfo } = useContext(UserContext);
  return (
    <div
      className="item__blog__container writenew"
      style={{ cursor: "pointer" }}
      onClick={handleClickShow}
    >
      <div className="blog__title">
        <div className="blog__title-personal" style={{ alignItems: "center" }}>
          <img
            className="blog__title-avatar"
            src={userInfo.avatar}
            alt="avatarhere"
          />
          <li className="write__blog-control write__blog-control-1">
            <div
              className="write__blog-input write__blog-input--hover"
              style={{
                border: "1px solid pink",
                borderRadius: "50px",
              }}
            >
              Write a new post...
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default WriteNew;
