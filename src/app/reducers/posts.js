export default function users(state = {}, action) {
  switch (action.type) {
    case "GET_POSTS_SAVE":
      return action.posts;

    // initial state
    default:
      return state;
  }
}
