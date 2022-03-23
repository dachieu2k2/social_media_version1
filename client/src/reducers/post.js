import {
  SET_POST,
  ADD_POST,
  SET_ALL_USER,
  ADD_COMMENT,
  sortFn,
} from '../contexts/constants'

const postReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case SET_ALL_USER:
      return {
        ...state,
        users: payload,
        isLoadingPost: false,
      }
    case SET_POST:
      return {
        ...state,
        posts: payload,
      }
    case ADD_POST:
      // console.log(state.posts, payload);
      const newPosts = [...state.posts, payload].sort(sortFn)
      // console.log(newPosts);

      return {
        ...state,
        posts: newPosts,
        isLoadingPost: false,
      }
    case ADD_COMMENT:
      const { blogId, comment } = payload
      const posts = state.posts.map((post) =>
        post._id === blogId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      ).sort(sortFn);
      return {
        ...state,
        posts,
      }
    default:
      throw new Error('Not found action!')
  }
}

function logger(reducer) {
  return (state, action) => {
    const newState = reducer(state, action)
    // console.group(action.type)
    // console.log(state)
    // console.log(action.type)
    // console.log(newState)
    // console.groupEnd()
    return newState
  }
}

export default logger(postReducer)
