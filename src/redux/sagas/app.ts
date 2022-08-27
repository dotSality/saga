import { takeEvery, takeLatest, takeLeading, select } from 'redux-saga/effects';
import { getCount } from '../selectors/app-selector';

const delay = (time: number) => new Promise((res) => {
  setTimeout(res, time * 1000);
});

export function* workerSaga() {
  // const count: number = yield select(getCount);
  yield delay(2);
  console.log('inc');
}

export function* watchLog() {
  yield takeLeading('app/increment', workerSaga);
}

export function* log() {
  yield watchLog();
}