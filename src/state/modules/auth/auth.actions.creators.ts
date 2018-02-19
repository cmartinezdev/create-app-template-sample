import actionCreatorFactory from 'typescript-fsa';

import { STORE_KEY } from './auth.model';
import * as interfaces from './auth.actions.interfaces';

const actionCreator = actionCreatorFactory(STORE_KEY);

export const authenticateActionCreator = actionCreator.async<
  interfaces.AuthenticatePayloadStarted,
  interfaces.AuthenticatePayloadDone
>('AUTHENTICATE');

export const deAuthenticateActionCreator = actionCreator<
  interfaces.DeAuthenticatePayload
>('DEAUTHENTICATE');
