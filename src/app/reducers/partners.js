export default function partners(state = [], action) {
  switch (action.type) {
    case 'GET_PARTNERS_SAVE':
      var object = state.concat();
      object[action.year] = action.partners;
      return object;

    // initial state
    default:
      return state;
  }
}
