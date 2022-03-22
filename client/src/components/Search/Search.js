import React, { useContext, useState } from "react";
import "./Search.css";
import SearchItem from "./SearchItem";
import TrendingBlog from "../TrendingBlog/TrendingBlog";
import { PostContext } from "../../contexts/post";

const Search = () => {
  //post COntext
  const { users } = useContext(PostContext);
  //stateSearch
  const [searchKey, setSearchKey] = useState("");
  const onChangeInputSearch = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <>
      <ul className="list_search">
        <div className="write__blog-control">
          <div className="write__blog-title">Search</div>
          <input
            type="text"
            className="write__blog-input"
            placeholder="title..."
            name="title"
            value={searchKey}
            onChange={onChangeInputSearch}
          />
        </div>
        {users
          .filter((user) => {
            if (searchKey === "") {
              return user;
            }
            return user.username
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          })
          .map((user, index) => {
            return <SearchItem key={index} user={user} />;
          })}
      </ul>
      <TrendingBlog />
    </>
  );
};

export default Search;
