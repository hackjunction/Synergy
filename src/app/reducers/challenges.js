export default function challenges(state = [], action) {
  switch (action.type) {
    case 'GET_CHALLENGES_SAVE':
      return action.challenges;
    case 'GET_CHALLENGE_SAVE':
      var object = state.concat();
      object[action.challenge.id] = action.challenge;
      //console.log("reducer", object, action);
      return object;

    // initial state
    default:
      return state;
  }
}
