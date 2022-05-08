import React from "react";
import "./TrendingBlog.css";
import TrendingBlogItem from "./TrendingBlogItem";
const fakeListTrending = [
  {
    title: "news",
    amount: 2,
  },
  {
    title: "gaixinh",
    amount: 22,
  },
  {
    title: "superidol",
    amount: 0,
  },
];

const TrendingBlog = () => {
  return (
    <div className="trending__blog">
      <div className="trending__blog-main">
        <div className="trending__blog-container">
          <h3 className="blog__item_typo">Trend for you</h3>

          <div className="trending__blog-list">
            {fakeListTrending.map((item, index) => {
              return (
                <TrendingBlogItem
                  title={item.title}
                  key={index}
                  amount={item.amount}
                />
              );
            })}
          </div>
        </div>
        <div className="trending__blog-container" style={{ marginTop: "30px" }}>
          <h3 className="blog__item_typo">News for you</h3>

          <div className="trending__blog-list">
            {fakeListTrending.map((item, index) => {
              return (
                <TrendingBlogItem
                  title={item.title}
                  key={index}
                  amount={item.amount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlog;
