import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getAllChallenges() {
  const challenges = yield call(ApiPosts.getChallenges);
  // save the challenges in state
  yield put({
    type: 'GET_CHALLENGES_SAVE',
    challenges: challenges.data
  });
}
export function* getChallenge(action) {
  const challenge = yield call(ApiPosts.getChallenge, action.id);
  yield put({
    type: 'GET_CHALLENGE_SAVE',
    challenge: challenge.data
  });
}
