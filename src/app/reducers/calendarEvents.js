export default function calendarEvents(state = [], action) {
  switch (action.type) {
    case 'GET_CALENDAREVENTS_SAVE':
      return action.calendarEvents;
    case 'CALENDAREVENT_TOGGLE':
      console.log('TOGGLE REDUCER', action);
      state = state.map(event => {
        if (event.id !== action.id) {
          return Object.assign({}, event);
        } else {
          var obj = Object.assign({}, event);
          obj.open = !obj.open;
          return obj;
        }
      });
      console.log('state:', state);
      return state;
    default:
      return state;
  }
}
