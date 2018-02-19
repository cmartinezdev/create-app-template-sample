export interface IncrementPayload {
  by: number;
}

export interface DecrementPayload extends IncrementPayload {
  // same as original
}

export interface IncrementAsyncPayloadStarted extends IncrementPayload {
  // same as original
}

export interface IncrementAsyncPayloadDone {
  by: number;
}

export interface DecrementAsyncPayloadStarted
  extends IncrementAsyncPayloadStarted {
  // same as original
}

export interface DecrementAsyncPayloadDone extends IncrementAsyncPayloadDone {
  // same as original
}
