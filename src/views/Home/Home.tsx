import * as React from 'react';
import { translate, TranslationFunction, Trans } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import makeLoadable from 'src/infrastructure/makeLoadable';

import * as actions from 'src/redux/modules/auth/auth.actions';

const CounterSync = makeLoadable(
  import(/* webpackChunkName: "counter_sync" */ './CounterSync'),
);
const CounterAsync = makeLoadable(
  import(/* webpackChunkName: "counter_async" */ './CounterAsync'),
);

import NavMenu from './components/NavMenu';

import './Home.scss';

interface Props {
  t: TranslationFunction;
  deAuthenticate: typeof actions.deAuthenticate;
}

const Main: React.SFC<Props> = ({ t, deAuthenticate }) => (
  <div className="Main">
    <p className="Main-intro">
      <Trans i18nKey="getStarted">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </p>

    <NavMenu />

    <Switch>
      <Route exact={true} path="/counter_sync" component={CounterSync} />
      <Route exact={true} path="/counter_async" component={CounterAsync} />
    </Switch>

    <button
      onClick={() => {
        deAuthenticate();
      }}
    >
      {t('exit')}
    </button>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      deAuthenticate: actions.deAuthenticate,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(translate()(Main));
