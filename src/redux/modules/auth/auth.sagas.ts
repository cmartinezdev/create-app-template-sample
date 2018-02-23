import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { authenticateActionCreator } from './auth.actions.creators';
import { AuthenticatePayloadDone } from './auth.actions.interfaces';
import { isType, AnyAction } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga-extended';
import { push } from 'react-router-redux';

import { sendPost } from 'src/infrastructure/httpClient';

const authenticateSaga = function*(action: AnyAction): SagaIterator {
  if (isType(action, authenticateActionCreator.started)) {
    const res = yield call(sendPost, 'https://reqres.in/api/login', {
      email: action.payload.user,
      password: action.payload.pass,
    });

    if (res.status >= 400) {
      throw new Error(`Server error: ${res.status} ${res.statusText}`);
    }

    const result: AuthenticatePayloadDone = {
      token: res.data.token,
    };

    return result;
  }
};

const redirectSaga = function*(action: AnyAction): SagaIterator {
  if (isType(action, authenticateActionCreator.done)) {
    yield put(push('/'));

    return;
  }
};

const authenticateHandler = bindAsyncAction(authenticateActionCreator)(
  authenticateSaga,
);

const redirectHandler = redirectSaga;

export const sagas = {
  authenticate: function* watchAuthenticate() {
    try {
      yield takeLatest(authenticateActionCreator.started, authenticateHandler);
    } catch (error) {
      //
    }
  },
  redirect: function* watchAuthenticateRedirect() {
    try {
      yield takeEvery(authenticateActionCreator.done, redirectHandler);
    } catch (error) {
      //
    }
  },
};
