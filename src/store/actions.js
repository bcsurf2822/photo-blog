export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

//adding
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}
