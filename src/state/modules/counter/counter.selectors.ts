import { STORE_KEY, StateModel } from './counter.model';

/**
 * Obtiene el store del modulo actual,
 * para forzar que vaya tipado
 * @param globalState
 */
const getModuleState = (globalState: {}): StateModel => globalState[STORE_KEY];

export const getCount = (globalState: {}) => {
  return getModuleState(globalState).count;
};

export const getIsIncrementing = (globalState: {}) => {
  return getModuleState(globalState).isIncrementing;
};

export const getIsDecrementing = (globalState: {}) => {
  return getModuleState(globalState).isDecrementing;
};
