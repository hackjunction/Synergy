import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

export function* getCalendars() {
  const calendars = yield call(ApiPosts.getCalendars);
  yield put({
    type: 'GET_CALENDARS_SAVE',
    faqs: calendars.data
  });
}
