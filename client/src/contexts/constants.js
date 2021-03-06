export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000/api"
    : "https://project-social-media-app-v1.herokuapp.com/api";

// export const apiUrl = "https://project-social-media-app-v1.herokuapp.com/api";
export const accessToken = localStorage.getItem("accessToken");

export const config = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
};

export const sortFn = function (x, y) {
  if (x.createdAt < y.createdAt) {
    return 1;
  }
  if (x.createdAt > y.createdAt) {
    return -1;
  }

  return 0;
};

export const SET_USER = "SET_USER";
export const SET_AVATAR_USER = "SET_AVATAR_USER";

export const SET_POST = "SET_POST";
export const ADD_POST = "ADD_POST";
export const SET_ALL_USER = "SET_ALL_USER";
export const ADD_COMMENT = "ADD_COMMENT";

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
