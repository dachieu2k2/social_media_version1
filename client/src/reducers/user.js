import { SET_AVATAR_USER, SET_USER } from "../contexts/constants";

export const userReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER:
      return { ...state, userInfo: payload };

    case SET_AVATAR_USER:
      return { ...state, userInfo: { ...state.userInfo, avatar: payload } };
    default:
      throw new Error("Action not found!");
  }
};
