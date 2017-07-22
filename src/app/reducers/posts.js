export function posts(state = [], action) {
  switch (action.type) {
    case 'GET_POSTS_SAVE':
      return action.posts;

    // initial state
    default:
      return state;
  }
}

export function mediumPosts(state = [], action) {
  switch (action.type) {
    case 'GET_MEDIUM_POSTS_SAVE':
      return action.posts;

    // initial state
    default:
      return state;
  }
}
