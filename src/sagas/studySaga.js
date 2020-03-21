import { call, put } from "redux-saga/effects";
import { getCount } from "../actions/studyActions";

export function* getIncSaga() {
  const count = yield call(getCount);
  yield put({ type: "SET_COUNT", count: count });
}
