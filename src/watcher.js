import { takeLatest } from "redux-saga/effects";

import { getIncSaga } from "./sagas/studySaga";

export default function* actionWatcher() {
  yield takeLatest("INCREMENT", getIncSaga);
}
