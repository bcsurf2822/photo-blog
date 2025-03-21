import posts from "../data/posts";

const postReducer = function postReducer(state = posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter(post => post.id !== action.id); // safer than using index

    case "ADD_POST":
      return [...state, action.post];

    default:
      return state;
  }
};

export default postReducer;