export interface AuthenticatePayloadStarted {
  user: string;
  pass: string;
}

export interface AuthenticatePayloadDone {
  token: string;
}

export interface DeAuthenticatePayload {}
