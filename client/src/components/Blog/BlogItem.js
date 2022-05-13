import React, { useContext, useEffect, useState } from "react";
import "./BlogItem.css";
import { GoHeart, GoComment, GoKebabVertical } from "react-icons/go";
import {
  AiOutlineHeart,
  AiOutlineSend,
  AiOutlineDelete,
  AiOutlineMore,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import Comment from "./Comment";
import { UserContext } from "../../contexts/user";
import { PostContext } from "../../contexts/post";

const BlogItem = ({
  title,
  description,
  image,
  user,
  createdAt,
  likers,
  comments,
  blogId,
}) => {
  //Context user
  const { userInfo } = useContext(UserContext);
  const { createComment, likePost, unlikePost } = useContext(PostContext);

  //state
  const [seeMore, setSeeMore] = useState(true);
  const [seeMoreComment, setSeeMoreComment] = useState(2);
  const [commentValue, setCommentValue] = useState("");
  const [showfunction, setShowfunction] = useState("");
  // use Effect
  useEffect(() => {
    if (seeMoreComment !== 2) {
      setSeeMoreComment(comments.length);
    }
  }, [comments.length]);

  const handleCreateComment = async () => {
    if (commentValue) {
      await createComment(
        {
          comment: commentValue,
        },
        blogId
      );
      setCommentValue("");
    }
  };
  const hanleLikePost = async () => {
    try {
      await likePost(blogId);
    } catch (error) {
      console.log(error);
    }
  };
  const hanleUnLikePost = async () => {
    try {
      await unlikePost(blogId);
    } catch (error) {
      console.log(error);
    }
  };
  const hanleShowFunction = (blogId) => {
    if (showfunction === "") {
      setShowfunction(blogId);
    } else if (showfunction === blogId) {
      setShowfunction("");
    } else {
      setShowfunction(blogId);
    }
  };

  return (
    <div className="item__blog__container">
      <div className="blog__title">
        <div className="blog__title-personal">
          <div style={{ display: "flex", width: "100%" }}>
            <img
              className="blog__title-avatar"
              src={user.avatar}
              alt="avatarhere"
            />
            <div className="blog__title-container-name">
              <h4 className="blog__title-name">
                <Link to={"/" + user._id}>{user.username}</Link>
              </h4>
              <p className="blog__title-moment">
                {moment(createdAt).startOf("second").fromNow()}
              </p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <AiOutlineMore
              className="blog__footer-like-icon"
              onClick={() => hanleShowFunction(blogId)}
            />
            {showfunction === "" && showfunction !== blogId ? (
              ""
            ) : (
              <div
                style={{
                  width: "200px",
                  backgroundColor: "white",
                  position: "absolute",
                  right: "100%",
                  borderRadius: "5px",
                  boxShadow:
                    "rgb(245 213 219) 0px 6px 12px -2px, rgb(245 122 143) 0px 3px 7px -3px",
                }}
              >
                <div className="function_edit">
                  <AiOutlineHeart className="blog__footer-like-icon" />
                  <p style={{ paddingLeft: "10px" }}>View</p>
                </div>

                {userInfo._id === user._id && (
                  <>
                    <div className="function_edit">
                      <AiOutlineEdit className="blog__footer-like-icon" />
                      <p style={{ paddingLeft: "10px" }}>Edit</p>
                    </div>
                    <div className="function_edit">
                      <AiOutlineDelete className="blog__footer-like-icon" />
                      <p style={{ paddingLeft: "10px" }}>Delete</p>
                    </div>
                  </>
                )}
              </div>
            )}
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
      <div
        className="blog__body"
        onDoubleClick={
          likers.find((like) => like === userInfo._id)
            ? () => {}
            : hanleLikePost
        }
      >
        {image && (
          <img className="blog__body-image" src={image} alt="notTHing" />
        )}
      </div>
      <div className="blog__footer">
        <div className="blog__footer-like">
          {likers.find((like) => like === userInfo._id) ? (
            <GoHeart
              className="blog__footer-like-icon"
              onClick={hanleUnLikePost}
            />
          ) : (
            <AiOutlineHeart
              className="blog__footer-like-icon"
              onClick={hanleLikePost}
            />
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
          {seeMoreComment !== comments.length && "See More Comment"}
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
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            onKeyUp={(e) => e.keyCode === 13 && handleCreateComment()}
          />
        </div>
        <span>
          <AiOutlineSend
            className="blog__footer-like-icon"
            onClick={handleCreateComment}
          />
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
