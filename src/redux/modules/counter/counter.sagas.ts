import { delay, SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';
import {
  incrementAsyncActionCreator,
  decrementAsyncActionCreator,
} from './counter.actions.creators';
import {
  IncrementAsyncPayloadDone,
  DecrementAsyncPayloadDone,
} from './counter.actions.interfaces';
import { isType, AnyAction } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga-extended';

const incrementAsyncSaga = function*(action: AnyAction): SagaIterator {
  if (isType(action, incrementAsyncActionCreator.started)) {
    yield call(delay, 1000);

    const result: IncrementAsyncPayloadDone = {
      by: action.payload.by,
    };

    return result;
  }
};

const decrementAsyncSaga = function*(action: AnyAction): SagaIterator {
  if (isType(action, decrementAsyncActionCreator.started)) {
    yield call(delay, 1000);

    const result: DecrementAsyncPayloadDone = {
      by: action.payload.by,
    };

    return result;
  }
};

const incrementAsyncHandler = bindAsyncAction(incrementAsyncActionCreator)(
  incrementAsyncSaga,
);

const decrementAsyncHandler = bindAsyncAction(decrementAsyncActionCreator)(
  decrementAsyncSaga,
);

/**
 * Exportamos un objeto con todas las sagas,
 * ya que siempre usaremos todas a la vez
 */
export const sagas = {
  incrementAsync: function* watchIncrementAsync() {
    try {
      yield takeLatest(
        incrementAsyncActionCreator.started,
        incrementAsyncHandler,
      );
    } catch (error) {
      //
    }
  },
  decrementAsync: function* watchDecrementAsync() {
    try {
      yield takeLatest(
        decrementAsyncActionCreator.started,
        decrementAsyncHandler,
      );
    } catch (error) {
      //
    }
  },
};
