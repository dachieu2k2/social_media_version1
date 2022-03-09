import React from "react";
import "./Blog.css";
import BlogItem from "./BlogItem";

const fakeblog = [
  {
    title: "Blog 1 ne",
    description: "Blog nay co nhieu cai hay nay!",
    image:
      "https://image-us.24h.com.vn/upload/4-2021/images/2021-12-23/anh-1-1640243906-582-width650height741.jpg",
    user: 982173971923779,
  },
  {
    title: "Write 2 ne",
    description: "Blog nay chua nhung thu khong lo nay",
    image:
      "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg",
    user: 982173971923779,
  },
  {
    title: "Write 3 ne hasjdhakjsdhakjshdasd",
    description: "Blog nay chua nhung cai tha hoa nay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnbjrTcb5jfKLL3pDrlFXrdG-JSdyijhl59ciqVznT9GUtK6kV3mOy2DyRjB2r_IAen8&usqp=CAU",
    user: 98217397192323779,
  },
];

const Blog = () => {
  return (
    <ul className="list_blog">
      {fakeblog.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            image={blog.image}
            description={blog.description}
            title={blog.title}
            user={blog.user}
          />
        );
      })}
    </ul>
  );
};

export default Blog;
