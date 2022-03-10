import React from "react";
import "./WriteBlog.css";
import { GoX } from "react-icons/go";

const WriteBlog = ({ show, handleClickShow }) => {
  return (
    <>
      {show && (
        <div className="write__blog">
          <div className="write__blog-modal" onClick={handleClickShow}></div>
          <div className="write__blog-container">
            <div className="write__blog-icon">
              <span className="write__blog-button">
                <GoX className="write__blog-color" />
              </span>
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Title</div>
              <input
                type="text"
                className="write__blog-input"
                placeholder="title..."
              />
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Description</div>
              <input
                type="text"
                className="write__blog-input"
                placeholder="Description..."
              />
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Choose file</div>
              <input type="file" className="write__blog-file" />
            </div>
            <div className="write__blog-container-image">
              <img
                src="https://bloggioitre.net/wp-content/uploads/2021/06/ngam-gai-xinh-giup-tang-tuoi-tho.jpg"
                alt=""
                className="write__blog-img"
              />
            </div>
            <span className="write__blog-button-save">Save</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WriteBlog;
