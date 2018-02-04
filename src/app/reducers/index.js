import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { posts, mediumPosts } from './posts';
import challenges from './challenges';
import tracks from './tracks';
import events from './events';
import jobs from './jobs';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts: posts,
  mediumPosts: mediumPosts,
  challenges: challenges,
  tracks: tracks,
  events: events,
  jobs: jobs
});

export default reducers;
