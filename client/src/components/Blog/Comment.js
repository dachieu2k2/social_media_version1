import React, { useState } from "react";
import "./Comment.css";
import moment from "moment";

const Comment = ({ comment, commenter, createdAt }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <li className="comment-item">
      <div className="blog__title">
        <div className="blog__title-personal">
          <img
            className="blog__title-avatar"
            src={commenter.avatar}
            alt="avatarhere"
          />
          <div className="blog__title-container-name">
            <h4 className="blog__title-name">{commenter.username}</h4>
            {comment.length <= 200 ? (
              <>
                <p className="blog__title-moment">{comment}</p>
              </>
            ) : (
              <>
                <p className="blog__title-moment">
                  {seeMore ? comment : `${comment.substring(0, 200)}...`}
                  <span onClick={() => setSeeMore(!seeMore)}>
                    {seeMore ? "See less" : "See more"}
                  </span>
                </p>
              </>
            )}
            <span className="blog__title-moment-small">
              {moment(createdAt).startOf("second").fromNow()}
            </span>
          </div>
          <div />
        </div>
      </div>
    </li>
  );
};

export default Comment;
