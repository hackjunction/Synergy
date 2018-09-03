export default function tracks(state = [], action) {
  switch (action.type) {
    case 'GET_TRACKS_SAVE':
      return action.tracks;
    case 'TRACK_TOGGLE':
      console.log('reducer', action);
      state = state.map(track => {
        var obj = Object.assign({}, track);
        if (track.slug !== action.slug) {
          obj.open = false;
        } else {
          obj.open = !obj.open;
        }
        return obj;
      });
      console.log('state:', state);
      return state;
    // initial state
    default:
      return state;
  }
}
