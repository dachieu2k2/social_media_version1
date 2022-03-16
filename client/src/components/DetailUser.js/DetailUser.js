import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/post";
import MyBlogItem from "../MyBlog/MyBlogItem";
import TrendingBlog from "../TrendingBlog/TrendingBlog";

const DetailUser = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);

  return (
    <>
      <ul className="list_blog">
        {posts
          .filter((blog) => blog.user._id === id)
          .map((blog, index) => {
            return (
              <MyBlogItem
                key={index}
                image={blog.image}
                description={blog.description}
                title={blog.title}
                user={blog.user}
                createdAt={blog.createdAt}
              />
            );
          })}
      </ul>
      <TrendingBlog />
    </>
  );
};

export default DetailUser;
