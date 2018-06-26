import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

export function* getFaqs() {
  console.log('kukkakauppias');
  const faqs = yield call(ApiPosts.getFaqs);
  console.log('kukkakauppias5');
  yield put({
    type: 'GET_FAQS_SAVE',
    faqs: faqs.data
  });
}
