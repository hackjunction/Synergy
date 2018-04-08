import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getPartners(action) {
  console.log(action);
  const partners = yield call(ApiPosts.getPartners, action.year);
  // save the challenges in state
  yield put({
    type: 'GET_PARTNERS_SAVE',
    partners: partners.data,
    year: action.year
  });
  console.log('put');
}
