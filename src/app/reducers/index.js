import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import posts from "./posts";

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  posts: posts
});
