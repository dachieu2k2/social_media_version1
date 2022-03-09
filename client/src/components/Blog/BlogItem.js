import React from "react";
import "./BlogItem.css";

const BlogItem = ({ title, description, image, user }) => {
  return (
    <div className="item__blog__container">
      <div className="blog__title">
        <h4>{user}</h4>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="blog__body">
        <img className="blog__body-image" src={image} alt="notTHing" />
      </div>
      <div className="blog__footer">
        <div className="blog__footer-like">Like</div>
        <div className="blog__footer-like">Comment</div>
      </div>
    </div>
  );
};

export default BlogItem;
