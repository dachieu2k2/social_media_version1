import React from "react";
import "./MyBlogItem.css";
import { GoHeart, GoComment } from "react-icons/go";

const MyBlogItem = ({ title, description, image, user }) => {
  return (
    <div className="item__blog__container">
      <div className="blog__title">
        <div className="blog__title-personal">
          <img
            className="blog__title-avatar"
            src={user.avatar}
            alt="avatarhere"
          />
          <h4 className="blog__title-name">{user.username}</h4>
        </div>

        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="blog__body">
        <img className="blog__body-image" src={image} alt="notTHing" />
      </div>
      <div className="blog__footer">
        <div className="blog__footer-like">
          <GoHeart className="blog__footer-like-icon" />
        </div>
        <div className="blog__footer-like">
          <GoComment className="blog__footer-like-icon" />
        </div>
      </div>
    </div>
  );
};

export default MyBlogItem;
