import React, { useContext } from "react";
import TrendingBlog from "../TrendingBlog/TrendingBlog";
import MyBlogItem from "./MyBlogItem";
// import "./MyBlog.css";
import { UserContext } from "../../contexts/user";
import { PostContext } from "../../contexts/post";

const fakeblog = [
  {
    title: "Blog 1 ne",
    description: "Blog nay co nhieu cai hay nay!",
    image:
      "https://image-us.24h.com.vn/upload/4-2021/images/2021-12-23/anh-1-1640243906-582-width650height741.jpg",
    user: {
      _id: "622856796ce4f546f38f6784",
      username: "c",
      avatar:
        "http://localhost:4000/static/0c049f22d1ee2f07b2d91233c43cd8a8.jpeg",
      __v: 0,
    },
  },
  {
    title: "Write 2 ne",
    description: "Blog nay chua nhung thu khong lo nay",
    image:
      "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg",
    user: {
      _id: "622856796ce4f546f38f6782",
      username: "Hehe",
      avatar:
        "http://localhost:4000/static/0c049f22d1ee2f07b2d91233c43cd8a8.jpeg",
      __v: 0,
    },
  },
  {
    title: "Write 3 ne hasjdhakjsdhakjshdasd",
    description: "Blog nay chua nhung cai tha hoa nay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbjrTcb5jfKLL3pDrlFXrdG-JSdyijhl59ciqVznT9GUtK6kV3mOy2DyRjB2r_IAen8&usqp=CAU",
    user: {
      _id: "622856796ce4f546f38f6783",
      username: "Pham Dac Hieu",
      avatar:
        "https://hinhgaixinh.com/wp-content/uploads/2021/11/hinh-anh-gai-xinh-deo-mat-kinh-dep-nhat-the-gioi.jpg",
      __v: 0,
    },
  },
];
const MyBlog = () => {
  //post context
  const { posts } = useContext(PostContext);
  //user context
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <ul className="list_blog">
        {fakeblog
          .filter((blog) => blog.user._id === userInfo?._id)
          .map((blog, index) => {
            return (
              <MyBlogItem
                key={index}
                image={blog.image}
                description={blog.description}
                title={blog.title}
                user={blog.user}
              />
            );
          })}
      </ul>
      <TrendingBlog />
    </>
  );
};

export default MyBlog;
