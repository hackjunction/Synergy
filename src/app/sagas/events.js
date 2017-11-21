import { call, put } from 'redux-saga/effects';
import * as api from '../../lib/api';

// get all the post from wordpress
export function* getEvents() {
  const events = yield call(api.getEvents);

  // save the posts in state
  yield put({
    type: 'GET_EVENTS_SAVE',
    events: events.data
  });
}
