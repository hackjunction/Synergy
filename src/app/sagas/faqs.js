import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

export function* getFaqs() {
  const faqs = yield call(ApiPosts.getFaqs);
  yield put({
    type: 'GET_FAQS_SAVE',
    faqs: faqs.data
  });
}
