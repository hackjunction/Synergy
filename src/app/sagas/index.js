import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { getAllPost } from "./posts";

// main saga generators
export function* sagas() {
  yield [fork(takeLatest, "GET_POSTS", getAllPost)];
}
