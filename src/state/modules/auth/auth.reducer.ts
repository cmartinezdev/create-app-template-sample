import { Action, Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import * as actionCreators from './auth.actions.creators';
import { StateModel, initialState } from './auth.model';

const reducer: Reducer<StateModel> = (
  state = initialState,
  action: Action,
): StateModel => {
  if (isType(action, actionCreators.authenticateActionCreator.started)) {
    return {
      ...state,
      isAuthenticating: true,
      isError: false,
    };
  }

  if (isType(action, actionCreators.authenticateActionCreator.done)) {
    return {
      ...state,
      token: action.payload.result.token,
      isAuthenticating: false,
      isError: false,
    };
  }

  if (isType(action, actionCreators.authenticateActionCreator.failed)) {
    return {
      ...state,
      isAuthenticating: false,
      isError: true,
    };
  }

  if (isType(action, actionCreators.deAuthenticateActionCreator)) {
    return {
      ...state,
      token: undefined,
      isError: false,
    };
  }

  return state;
};

export default reducer;
