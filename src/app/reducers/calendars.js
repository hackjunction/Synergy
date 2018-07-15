export default function calendarEvents(state = [], action) {
  switch (action.type) {
    case 'GET_CALENDAREVENTS_SAVE':
      return action.calendarEvents;
    default:
      return state;
  }
}
