import actionCreatorFactory from 'typescript-fsa';

import { STORE_KEY } from './counter.model';
import * as interfaces from './counter.actions.interfaces';

const actionCreator = actionCreatorFactory(STORE_KEY);

export const incrementActionCreator = actionCreator<
  interfaces.IncrementPayload
>('INCREMENT');

export const decrementActionCreator = actionCreator<
  interfaces.DecrementPayload
>('DECREMENT');

export const incrementAsyncActionCreator = actionCreator.async<
  interfaces.IncrementAsyncPayloadStarted,
  interfaces.IncrementAsyncPayloadDone
>('INCREMENT_ASYNC');

export const decrementAsyncActionCreator = actionCreator.async<
  interfaces.DecrementAsyncPayloadStarted,
  interfaces.DecrementAsyncPayloadDone
>('DECREMENT_ASYNC');
