import * as actionCreators from './auth.actions.creators';

export const authenticate = (user: string, pass: string) => {
  return actionCreators.authenticateActionCreator.started({ user, pass });
};

export const deAuthenticate = () => {
  return actionCreators.deAuthenticateActionCreator({});
};
