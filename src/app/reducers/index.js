import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { posts, mediumPosts } from './posts';
import challenges from './challenges';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts: posts,
  mediumPosts: mediumPosts,
  challenges: challenges,
});

export default reducers;
