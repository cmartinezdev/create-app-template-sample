import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { LogEntryObject } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reducer as reduxFormReducer } from 'redux-form';

import { reducers, rootSaga } from './modules';

import history from 'src/infrastructure/history';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (): Store<{}> => {
  const initialState: object = {};
  const enhancers: Function[] = [];
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  // Log only in development
  if (process.env.NODE_ENV === 'development') {
    // Lo importamos aquí para que no esté en el bundle de producción
    const { createLogger } = require('redux-logger');
    middleware.push(
      createLogger({
        // Collapse actions that don't have errors
        collapsed: (
          getState: Function,
          action: Object,
          logEntry: LogEntryObject,
        ): Boolean => !logEntry.error,
        duration: true,
        diff: true,
      }),
    );
  }

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    // Options like actionSanitizer, stateSanitizer
  });

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  // Add the reducer to your store on the `router` key
  const rootReducer = () =>
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: reduxFormReducer,
    });

  const store = createStore(rootReducer(), initialState, composedEnhancers);

  // Run all sagas
  let sagaTasks = sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        // Replace reducer
        store.replaceReducer(rootReducer());

        // Stop and replace sagas
        sagaTasks.cancel();
        sagaTasks.done.then(() => {
          sagaTasks = sagaMiddleware.run(rootSaga);
        });
      });
    }
  }

  return store;
};

export default configureStore;
