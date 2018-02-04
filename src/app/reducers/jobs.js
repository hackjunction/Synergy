export default function jobs(state = [], action) {
  switch (action.type) {
    case 'GET_JOBS_SAVE':
      return action.jobs;
    default:
      return state;
  }
}
