import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts,
});

export default reducers;
