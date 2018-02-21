import { STORE_KEY, StateModel } from './router.model';

/**
 * Obtiene el store del modulo actual,
 * para forzar que vaya tipado
 * @param globalState
 */
const getModuleState = (globalState: {}): StateModel => globalState[STORE_KEY];

export const getLocation = (globalState: {}) => {
  const location = getModuleState(globalState).location;
  return location ? location.pathname : '';
};
