import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

export function* getJobs() {
  const jobs = yield call(ApiPosts.getJobs);
  yield put({
    type: 'GET_JOBS_SAVE',
    jobs: jobs.data
  });
}
