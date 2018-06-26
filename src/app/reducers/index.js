import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { posts, mediumPosts } from './posts';
import challenges from './challenges';
import partners from './partners';
import tracks from './tracks';
import events from './events';
import jobs from './jobs';
import faqs from './faqs';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts: posts,
  mediumPosts: mediumPosts,
  challenges: challenges,
  partners: partners,
  tracks: tracks,
  events: events,
  jobs: jobs,
  faqs: faqs
});

export default reducers;
