export default function events(state = [], action) {
  switch (action.type) {
    case 'GET_EVENTS_SAVE':
      return action.events.slice(0, 6);

    // initial state
    default:
      return state;
  }
}
