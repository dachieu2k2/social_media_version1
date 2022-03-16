import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ user }) => {
  let navigate = useNavigate();
  return (
    <div
      className="item__search__container"
      onClick={() => {
        navigate(`/${user._id}`);
      }}
    >
      <div className="search__title">
        <div className="search__title-personal">
          <img
            className="search__title-avatar"
            src={user.avatar}
            alt="avatarhere"
          />
          <div className="search__title-container-name">
            <h4 className="search__title-name">{user.username}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
