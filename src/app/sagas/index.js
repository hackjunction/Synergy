import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAllPost, getMediumPosts } from './posts';
import { getAllChallenges } from './challenges';
import { getAllTracks } from './tracks';
import { getEvents } from './events';

// main saga generators
export default function* sagas() {
  yield [fork(takeLatest, 'GET_POSTS', getAllPost)];
  yield [fork(takeLatest, 'GET_MEDIUM_POSTS', getMediumPosts)];
  yield [fork(takeLatest, 'GET_CHALLENGES', getAllChallenges)];
  yield [fork(takeLatest, 'GET_TRACKS', getAllTracks)];
  yield [fork(takeLatest, 'GET_EVENTS', getEvents)];
}
