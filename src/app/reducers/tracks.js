export default function tracks(state = [], action) {
  switch (action.type) {
    case 'GET_TRACKS_SAVE':
      return action.tracks;

    // initial state
    default:
      return state;
  }
}
