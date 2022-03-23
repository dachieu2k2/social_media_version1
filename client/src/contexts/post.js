import React, { createContext, useContext, useEffect, useReducer } from "react";
import postReducer from "../reducers/post";
import axios from "axios";
import io from "socket.io-client";
import { apiUrl, SET_POST, ADD_POST, config, SET_ALL_USER, ADD_COMMENT } from "./constants";
import { UserContext } from "./user";

const PORT = "http://localhost:4000/";
const socket = io(PORT);
// const PORT = "https://project-social-media-app-v1.herokuapp.com/";
export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //user Context
  const { userInfo } = useContext(UserContext);
  //postContext

  const [postState, dispatch] = useReducer(postReducer, {
    isLoadingPost: true,
    posts: [],
    users: [],
  });

  useEffect(() => {
    console.log(postState.posts)
  }, [postState]);

  useEffect(() => {
    socket.on("receive_global_post", (data) => {
      dispatch(data, postState);
    });
  }, []);
  useEffect(() => {
    if (userInfo) {
      getPost();
      getAllUser();
    }
  }, [userInfo]);

  const getAllUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users/allUser`, config());

      if (response.data.success) {
        if (response.data.success) {
          dispatch(
            {
              type: SET_ALL_USER,
              payload: response.data.users,
            },
            postState
          );
          // socket.emit("global_post", {
          //   type: SET_POST,
          //   payload: response.data.posts,
          // });
        }
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
      }
      console.log({ success: false, message: error.message });
    }
  };
  const createPost = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/post`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // console.log(response);
      if (response.data.success) {
        socket.emit("global_post", {
          type: ADD_POST,
          payload: response.data.newPost,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const getPost = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`, config());
      if (response.data.success) {
        dispatch(
          {
            type: SET_POST,
            payload: response.data.posts,
          },
          postState
        );
        // socket.emit("global_post", {
        //   type: SET_POST,
        //   payload: response.data.posts,
        // });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const createComment = async (data, blogId) => {
    try {
      const response = await axios.post(`${apiUrl}/post/${blogId}`, data,config());
      if (response.data.success) {
        socket.emit("global_post", {
          type: ADD_COMMENT,
          payload: {
            blogId,
            comment: response.data.comment,
          }
        });
      }
    } catch(e) {
      console.log(e);
    }
  }

  const dataPostContext = {
    posts: postState.posts,
    createPost,
    getPost,
    users: postState.users,
    isLoadingPost: postState.isLoadingPost,
    createComment
  };
  return (
    <PostContext.Provider value={dataPostContext}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
