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
            <input
              disabled
              type="text"
              className="write__blog-input write__blog-input--hover"
              placeholder="Write a new post..."
              name="description"
              style={{
                border: "1px solid pink",
                cursor: "pointer",
                borderRadius: "50px",
              }}
            />
          </li>
        </div>
      </div>
    </div>
  );
};

export default WriteNew;
