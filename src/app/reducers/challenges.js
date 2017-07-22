export default function challenges(state = [], action) {
  switch (action.type) {
    case 'GET_CHALLENGES':
      return action.challenges;

    // initial state
    default:
      return state;
  }
}
