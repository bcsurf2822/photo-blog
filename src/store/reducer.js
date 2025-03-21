import { combineReducers } from "redux";
import posts from "../data/posts";

const commentReducer = function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT": {
      const { postId, comment } = action;
      return {
        ...state,
        [postId]: [...(state[postId] || []), comment],
      };
    }

    default:
      return state;
  }
};

const postReducer = function postReducer(state = posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id);

    case "ADD_POST":
      return [...state, action.post];

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
