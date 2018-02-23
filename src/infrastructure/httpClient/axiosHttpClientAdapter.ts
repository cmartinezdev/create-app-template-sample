import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL_BASE,
});

let defaultConfig = {
  baseURL: process.env.REACT_APP_API_URL_BASE,
  headers: {},
};

export const setHeaders = (headers: {}) => {
  defaultConfig.headers = headers;
};

export const sendGet = (path: string, config: {} = defaultConfig) => {
  return service.get(path, config).then(response => {
    return { status: response.status, data: response.data };
  });
};

export const sendPut = (
  path: string,
  payload: {},
  config: {} = defaultConfig,
) => {
  return service.put(path, payload, config).then(response => {
    return { status: response.status, data: response.data };
  });
};

export const sendPatch = (
  path: string,
  payload: {},
  config: {} = defaultConfig,
) => {
  return service.patch(path, payload, config).then(response => {
    return { status: response.status, data: response.data };
  });
};

export const sendPost = (
  path: string,
  payload: {},
  config: {} = defaultConfig,
) => {
  return service.post(path, payload, config).then(response => {
    return { status: response.status, data: response.data };
  });
};

export const sendDelete = (path: string, config: {} = defaultConfig) => {
  return service.delete(path, config).then(response => {
    return { status: response.status, data: response.data };
  });
};
