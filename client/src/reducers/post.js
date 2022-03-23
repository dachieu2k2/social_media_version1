import { SET_POST, ADD_POST, SET_ALL_USER, ADD_COMMENT, sortFn } from "../contexts/constants";

export const postReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_ALL_USER:
      return {
        ...state,
        users: payload,
        isLoadingPost: false,
      };
    case SET_POST:
      return {
        ...state,
        posts: payload,
      };
    case ADD_POST:
      // console.log(state.posts, payload);
      const newPosts = [...state.posts, payload].sort(sortFn);
      // console.log(newPosts);

      return {
        ...state,
        posts: newPosts,
        isLoadingPost: false,
      };
    case ADD_COMMENT:
      const { blogId, comment } = payload;
      const targetBlog = state.posts.find(post => post._id = blogId);
      targetBlog.comments = [...targetBlog.comments, comment].sort(sortFn);
      return {
        ...state,
      }
    default:
      throw new Error("Not found action!");
  }
};
