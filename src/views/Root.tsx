import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'src/infrastructure/i18next';
import configureStore from 'src/redux';
import history from 'src/infrastructure/history';

import App from './App';

const store: Store<{}> = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
