import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

export function* getCalendarEvents() {
  const calendarEvents = yield call(ApiPosts.getCalendarEvents);
  yield put({
    type: 'GET_CALENDAREVENTS_SAVE',
    faqs: calendarEvents.data
  });
}
