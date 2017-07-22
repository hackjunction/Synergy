import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAllPost, getMediumPosts } from './posts';

// main saga generators
export default function* sagas() {
  yield [fork(takeLatest, 'GET_POSTS', getAllPost)];
  yield [fork(takeLatest, 'GET_MEDIUM_POSTS', getMediumPosts)];
}
