import { all, ForkEffect } from 'redux-saga/effects';

import {
  default as counterReducer,
  STORE_KEY as COUNTER_STORE_KEY,
  sagas as counterSagas,
} from './counter';

import {
  default as authReducer,
  STORE_KEY as AUTH_STORE_KEY,
  sagas as authSagas,
} from './auth';

export const reducers = {
  [COUNTER_STORE_KEY]: counterReducer,
  [AUTH_STORE_KEY]: authReducer,
};

const initSaga = (sagasToInit: {}) =>
  Object.keys(sagasToInit).map(key => sagasToInit[key]());

const sagas: IterableIterator<ForkEffect>[] = [
  ...initSaga(counterSagas),
  ...initSaga(authSagas),
];

export function* rootSaga() {
  yield all(sagas);
}
