export const apiUrl = "http://localhost:4000/api";
export const accessToken = localStorage.getItem("accessToken");

export const config = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
};
export const SET_USER = "SET_USER";
export const SET_AVATAR_USER = "SET_AVATAR_USER";

export const SET_POST = "SET_POST";
