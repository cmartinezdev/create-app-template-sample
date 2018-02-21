import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';
import { authenticateActionCreator } from './auth.actions.creators';
import { AuthenticatePayloadDone } from './auth.actions.interfaces';
import { isType, AnyAction } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga-extended';

import { sendPost } from 'src/services/httpClient';

export const authenticateHandler = function*(action: AnyAction): SagaIterator {
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

export const sagas = {
  authenticate: function* watchAuthenticate() {
    try {
      yield takeLatest(
        authenticateActionCreator.started,
        bindAsyncAction(authenticateActionCreator)(authenticateHandler),
      );
    } catch (error) {
      //
    }
  },
};
