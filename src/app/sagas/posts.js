import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getAllPost() {
  const posts = yield call(ApiPosts.getPost);

  // save the posts in state
  yield put({
    type: 'GET_POSTS_SAVE',
    posts: posts.data
  });
}

// get all the post from wordpress
export function* getMediumPosts() {
  const mediumPosts = yield call(ApiPosts.getMediumPost);

  yield put({
    type: 'GET_MEDIUM_POSTS_SAVE',
    posts: mediumPosts.data
  });
}
