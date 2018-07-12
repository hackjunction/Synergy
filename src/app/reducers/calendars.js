export default function calendars(state = [], action) {
  switch (action.type) {
    case 'GET_CALENDARS_SAVE':
      return action.calendars;
    default:
      return state;
  }
}
