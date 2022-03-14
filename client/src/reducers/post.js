import { SET_POST } from "../contexts/constants";

export const postReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_POST:
      return { ...state, posts: payload };

    default:
      throw new Error("Not found action!");
  }
};
