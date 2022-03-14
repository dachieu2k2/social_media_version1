import React from "react";
import { GoHeart } from "react-icons/go";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-icon">
        <GoHeart className="loading__icon-color" />
      </div>
    </div>
  );
};

export default Loading;
