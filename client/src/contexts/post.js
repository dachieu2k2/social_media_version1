import React, { createContext, useContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducers/post";
import axios from "axios";
import io from "socket.io-client";
import { apiUrl, SET_POST, ADD_POST, config, SET_ALL_USER } from "./constants";
import { UserContext } from "./user";

let socket;
const PORT = "http://localhost:4000/";
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
    socket = io(PORT);
    // console.log(socket);
  }, []);
  useEffect(() => {
    socket.on("receive_global_post", (data) => {
      dispatch(data, postState);
      console.log("tai sao m chay 2lan");
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

  const dataPostContext = {
    posts: postState.posts,
    createPost,
    getPost,
    users: postState.users,
    isLoadingPost: postState.isLoadingPost,
  };
  return (
    <PostContext.Provider value={dataPostContext}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
