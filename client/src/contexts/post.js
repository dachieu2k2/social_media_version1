import React, { createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducers/post";
import axios from "axios";
import io from "socket.io-client";
import { apiUrl, SET_POST, config } from "./constants";

let socket;
const PORT = "http://localhost:4000/";
export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, {
    isLoadingPost: true,
    posts: [],
  });
  useEffect(() => {
    socket = io(PORT);
    // console.log(socket);
    // socket.emit("connection");
  }, []);
  useEffect(() => {
    socket.on("receive_global_post", (data) => {
      dispatch(data, postState);
    });
  }, [socket]);

  const createPost = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/post`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response);
      if (response.data.success) {
        socket.emit("global_post", {
          type: SET_POST,
          payload: response.data.newPost,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const dataPostContext = {
    posts: postState.posts,
    createPost,
  };
  return (
    <PostContext.Provider value={dataPostContext}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
