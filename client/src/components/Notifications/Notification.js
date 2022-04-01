import React from "react";
import TrendingBlog from "../TrendingBlog/TrendingBlog";
import "./Notification.css";

const Notification = () => {
  return (
    <>
      <div className="notification__1">
        <ul className="notification__1__container">
          <ul class="blog__footer-listComment">
            <li class="comment-item">
              <div class="blog__title">
                <div class="blog__title-personal">
                  <img
                    class="blog__title-avatar"
                    src="https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg"
                    alt="avatarhere"
                  />
                  <div class="blog__title-container-name">
                    <h4 class="blog__title-name">b</h4>
                    <p class="blog__title-moment">wow it so crazy</p>
                    <span class="blog__title-moment-small">9 days ago</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </li>
            <li class="comment-item">
              <div class="blog__title">
                <div class="blog__title-personal">
                  <img
                    class="blog__title-avatar"
                    src="https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg"
                    alt="avatarhere"
                  />
                  <div class="blog__title-container-name">
                    <h4 class="blog__title-name">a</h4>
                    <p class="blog__title-moment">oh really</p>
                    <span class="blog__title-moment-small">9 days ago</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>
      <TrendingBlog />
    </>
  );
};

export default Notification;
