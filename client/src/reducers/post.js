import { SET_POST, ADD_POST } from "../contexts/constants";

export const postReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_POST:
      return {
        ...state,
        posts: payload,
        isLoadingPost: false,
      };
    case ADD_POST:
      console.log(state.posts, payload);
      const newPosts = [...state.posts, payload].sort(function (x, y) {
        if (x.createdAt < y.createdAt) {
          return 1;
        }
        if (x.createdAt > y.createdAt) {
          return -1;
        }

        return 0;
      });
      console.log(newPosts);

      return {
        ...state,
        posts: newPosts,
        isLoadingPost: false,
      };

    default:
      throw new Error("Not found action!");
  }
};
