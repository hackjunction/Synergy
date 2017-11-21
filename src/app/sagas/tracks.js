import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getAllTracks() {
  const tracks = yield call(ApiPosts.getTracks);

  // save the tracks in state
  yield put({
    type: 'GET_TRACKS_SAVE',
    tracks: tracks.data
  });
}
