export const STORE_KEY = 'counter';

/**
 * type for global "Readonly".
 */
export type StateModel = Readonly<{
  count: number;
  isIncrementing: boolean;
  isDecrementing: boolean;
}>;

/**
 * Initial store state
 */
export const initialState: StateModel = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};
