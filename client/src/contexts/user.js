import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SET_USER, SET_AVATAR_USER, apiUrl, config } from "./constants";
import { userReducer } from "../reducers/user";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [userState, dispatch] = useReducer(userReducer, {
    isLoading: false,
    userInfo: null,
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [userState.userInfo]);

  useEffect(() => getUser(), []);
  const getUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`, config());
      console.log(response.data);
      if (response.data.success) {
        dispatch({ type: SET_USER, payload: response.data.info }, userState);
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
      }
      console.log({ success: false, message: error.message });
    }
  };
  // window.onstorage = getUser();
  const login = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, data);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
      }
      console.log({ success: false, message: error.message });
    }
  };

  //register
  const register = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/users/register`, data);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
      }
      console.log({ success: false, message: error.message });
    }
  };
  // changeAvatar
  const changeAvatar = async (data) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/users/${userState.userInfo._id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        dispatch(
          { type: SET_AVATAR_USER, payload: response.data.avatar },
          userState
        );

        return response.data;
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
      }
      console.log({ success: false, message: error.message });
    }
  };
  const userContextData = {
    userInfo: userState.userInfo,
    login,
    register,
    changeAvatar,
  };
  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
