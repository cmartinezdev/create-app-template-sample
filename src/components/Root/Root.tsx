import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'src/services/i18next';
import configureStore from 'src/state';
import history from 'src/services/history';

import App from 'src/components/App';

const store: Store<{}> = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
