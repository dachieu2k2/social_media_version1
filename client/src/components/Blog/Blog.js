import React, { useContext } from "react";
import "./Blog.css";
import BlogItem from "./BlogItem";
import TrendingBlog from "../TrendingBlog/TrendingBlog";
import Loading from "../Loading/Loading";
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
        "https://bloggioitre.net/wp-content/uploads/2021/06/ngam-gai-xinh-giup-tang-tuoi-tho.jpg",
    },
    likers: ["622ef630170f1abb40af8a2d", "b", "c", "d"],
    comments: [
      {
        commenter: {
          _id: "622ef630170f1abb40af8a2d",
          username: "Pham Dac Hieu",
          avatar:
            "https://hinhgaixinh.com/wp-content/uploads/2021/11/hinh-anh-gai-xinh-deo-mat-kinh-dep-nhat-the-gioi.jpg",
        },
        comment: "917273120938",
        createAt: Date.now(),
      },
    ],
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
        "https://bloggioitre.net/wp-content/uploads/2021/06/ngam-gai-xinh-giup-tang-tuoi-tho.jpg",
      __v: 0,
    },

    likers: ["a", "b", "c", "d"],
    comments: [],
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
    likers: [],
    comments: [
      {
        commenter: {
          _id: "622856796ce4f546f38f6783",
          username: "Pham Dac Hieu",
          avatar:
            "https://hinhgaixinh.com/wp-content/uploads/2021/11/hinh-anh-gai-xinh-deo-mat-kinh-dep-nhat-the-gioi.jpg",
        },
        comment: "917273120938",
        createAt: Date.now(),
      },
      {
        commenter: {
          _id: "622856796ce4f546f38f6784",
          username: "c",
          avatar:
            "https://bloggioitre.net/wp-content/uploads/2021/06/ngam-gai-xinh-giup-tang-tuoi-tho.jpg",
          __v: 0,
        },
        comment:
          "Picanha sirloin chicken, beef ribs biltong shank ground round ribeye ham hock. Jowl shank andouille, prosciutto frankfurter chuck venison chislic filet mignon cow shoulder ball tip ribeye. Corned beef turducken pastrami salami, bresaola pork pork loin. Bresaola cow tri-tip, venison ribeye short ribs fatback prosciutto sausage. Ham hock picanha bresaola chuck. Pancetta frankfurter kevin fatback chislic, ball tip doner ham hock sirloin. Buffalo tail turkey, meatloaf strip steak corned beef tri-tip pig chuck.",
        createAt: Date.now(),
      },
    ],
  },
];

const Blog = () => {
  const { isLoadingPost, posts } = useContext(PostContext);
  let body;
  if (isLoadingPost) {
    body = <Loading />;
  } else {
    body = (
      <>
        <ul className="list_blog">
          {posts.map((blog, index) => {
            return (
              <BlogItem
                key={index}
                image={blog.image}
                description={blog.description}
                title={blog.title}
                user={blog.user}
                createdAt={blog.createdAt}
                comments={blog.comments}
                likers={blog.likers}
                blogId={blog._id}
              />
            );
          })}
        </ul>
        <TrendingBlog />
      </>
    );
  }
  return body;
};

export default Blog;
