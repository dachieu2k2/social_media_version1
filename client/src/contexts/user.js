import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SET_USER, SET_AVATAR_USER, apiUrl, config } from "./constants";
import { userReducer } from "../reducers/user";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [userState, dispatch] = useReducer(userReducer, {
    isLoading: true,
    userInfo: null,
  });

  useEffect(() => {
    // console.log(userState.userInfo);

    if (userState.userInfo) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [userState.userInfo]);

  useEffect(() => getUser(), []);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    try {
      const response = await axios.get(`${apiUrl}/users`, config());
      if (response.data.success) {
        dispatch({ type: SET_USER, payload: response.data.info }, userState);
      } else {
        localStorage.removeItem("accessToken");
      }
    } catch (error) {
      localStorage.removeItem("accessToken");

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

      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        await getUser();
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

      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        await getUser();

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
  const logout = async () => {
    try {
      localStorage.clear();
      await getUser();
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
    logout,
    isLoading: userState.isLoading,
  };
  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
