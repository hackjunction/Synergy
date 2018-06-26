export default function faqs(state = [], action) {
  console.log('kukkakauppias6');
  switch (action.type) {
    case 'GET_FAQS_SAVE':
      return action.faqs;
    default:
      return state;
  }
}
