import { STORE_KEY, StateModel } from './auth.model';

/**
 * Obtiene el store del modulo actual,
 * para forzar que vaya tipado
 * @param globalState
 */
const getModuleState = (globalState: {}): StateModel => globalState[STORE_KEY];

export const isAuthenticated = (globalState: {}) => {
  return Boolean(getModuleState(globalState).token);
};

export const getToken = (globalState: {}) => {
  return getModuleState(globalState).token;
};

export const getIsAuthenticating = (globalState: {}) => {
  return getModuleState(globalState).isAuthenticating;
};

export const getIsError = (globalState: {}) => {
  return getModuleState(globalState).isError;
};
