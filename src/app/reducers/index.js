import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { posts, mediumPosts } from './posts';
import challenges from './challenges';
import calendarEvents from './calendarEvents';
import calendarCategories from './calendarCategories';
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
  calendarEvents: calendarEvents,
  calendarCategories: calendarCategories,
  partners: partners,
  tracks: tracks,
  events: events,
  jobs: jobs,
  faqs: faqs
});

export default reducers;
