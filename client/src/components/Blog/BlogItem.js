import React, { useContext, useState } from "react";
import "./BlogItem.css";
import { GoHeart, GoComment } from "react-icons/go";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import moment from "moment";
import Comment from "./Comment";
import { UserContext } from "../../contexts/user";

const BlogItem = ({
  title,
  description,
  image,
  user,
  createdAt,
  likers,
  comments,
}) => {
  //Context user
  const { userInfo } = useContext(UserContext);

  //state
  const [seeMore, setSeeMore] = useState(true);
  const [seeMoreComment, setSeeMoreComment] = useState(2);
  return (
    <div className="item__blog__container">
      <div className="blog__title">
        <div className="blog__title-personal">
          <img
            className="blog__title-avatar"
            src={user.avatar}
            alt="avatarhere"
          />
          <div className="blog__title-container-name">
            <h4 className="blog__title-name">{user.username}</h4>
            <p className="blog__title-moment">
              {moment(createdAt).startOf("second").fromNow()}
            </p>
          </div>
        </div>

        <h5>{title}</h5>
        {description.length <= 200 ? (
          <p>{description}</p>
        ) : (
          <>
            <p>
              {seeMore
                ? `${description.substring(0, 200)}...`
                : `${description}`}
            </p>
            <span onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? "See more" : "See less"}
            </span>
          </>
        )}
      </div>
      <div className="blog__body">
        <img className="blog__body-image" src={image} alt="notTHing" />
      </div>
      <div className="blog__footer">
        <div className="blog__footer-like">
          {likers.find((like) => like === userInfo._id) ? (
            <GoHeart className="blog__footer-like-icon" />
          ) : (
            <AiOutlineHeart className="blog__footer-like-icon" />
          )}
          <span className="blog__footer-like-amount">{likers.length}</span>
        </div>
        <div className="blog__footer-like">
          <GoComment className="blog__footer-like-icon" />
          <span className="blog__footer-like-amount">{comments.length}</span>
        </div>
      </div>
      <ul className="blog__footer-listComment">
        {comments.slice(0, seeMoreComment).map((comment, index) => {
          return (
            <Comment
              key={index}
              commenter={comment.commenter}
              comment={comment.comment}
              createdAt={comment.createdAt}
            />
          );
        })}
      </ul>
      {comments.length > 2 && (
        <div
          className="see-more-comment"
          onClick={() => setSeeMoreComment(comments.length)}
        >
          See More Comment
        </div>
      )}
      <div className="blog__footer-createComment">
        <img
          className="blog__title-avatar"
          src={user.avatar}
          alt="avatarhere"
        />
        <div className="blog__footer-control-input">
          <input
            className="blog__footer-wirte"
            placeholder="write a comment..."
          />
        </div>
        <span>
          <AiOutlineSend className="blog__footer-like-icon" />
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
