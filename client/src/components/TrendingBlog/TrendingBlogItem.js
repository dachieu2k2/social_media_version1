import React from "react";
import "./TrendingBlogItem.css";

const TrendingBlogItem = ({ title, amount }) => {
  return (
    <div className="blog__item-container">
      <p className="blog__item-title">#{title}</p>
      <p className="blog__item-amount">{amount} blogs</p>
    </div>
  );
};

export default TrendingBlogItem;
