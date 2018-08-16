export default function calendarEvents(
  state = { hacktour: true, junctionx: true, techrace: true, hacktalks: true, terminal: true },
  action
) {
  switch (action.type) {
    case 'CALENDARCATEGORY_TOGGLE':
      state = Object.assign({}, state);
      state[action.category] = !state[action.category];
      console.log('state:', state);
      return state;
    default:
      return state;
  }
}
