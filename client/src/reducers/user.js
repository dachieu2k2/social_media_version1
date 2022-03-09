const { SET_USER } = require("../contexts/constants");

export const userReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER:
      return { ...state, userInfo: payload };
    default:
      throw new Error("Action not found!");
  }
};
