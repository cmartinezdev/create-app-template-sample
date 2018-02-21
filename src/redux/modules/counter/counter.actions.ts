import * as actionCreators from './counter.actions.creators';

export const increment = (amount: number) => {
  return actionCreators.incrementActionCreator({ by: amount });
};

export const decrement = (amount: number) => {
  return actionCreators.decrementActionCreator({ by: amount });
};

export const incrementAsync = (amount: number) => {
  return actionCreators.incrementAsyncActionCreator.started({ by: amount });
};

export const decrementAsync = (amount: number) => {
  return actionCreators.decrementAsyncActionCreator.started({ by: amount });
};
