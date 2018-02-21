export const STORE_KEY = 'auth';

/**
 * type for global "Readonly".
 */
export type StateModel = Readonly<{
  token: string | undefined;
  isAuthenticating: boolean;
  isError: boolean;
}>;

/**
 * Initial store state
 */
export const initialState: StateModel = {
  token: undefined,
  isAuthenticating: false,
  isError: false,
};
