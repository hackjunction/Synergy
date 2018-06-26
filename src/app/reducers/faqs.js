export default function faqs(state = [], action) {
  switch (action.type) {
    case 'GET_FAQS_SAVE':
      return action.faqs;
    default:
      return state;
  }
}
