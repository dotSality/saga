import { takeEvery, put, call, takeLatest, takeLeading, select, fork } from 'redux-saga/effects';
import { getLatestNewsApi, getPopularNewsApi } from '../../api/app-api';
import { setLatestNews, setPopularNews } from '../slices/app-slice';

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNewsApi);
  yield put(setPopularNews(hits));
}

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNewsApi);
  yield put(setLatestNews(hits));
}

export function* handleNews() {
  yield fork(handlePopularNews);
  yield fork(handleLatestNews);
}

export function* watchLog() {
  yield takeEvery('app/getNews', handleNews);
}

export function* log() {
  yield watchLog();
}