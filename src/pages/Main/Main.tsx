import * as React from 'react';
import { translate, TranslationFunction, Trans } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/state/modules/auth/auth.actions';
import * as selectors from 'src/state/modules/auth/auth.selectors';

import CounterSync from './pages/CounterSync';
import CounterAsync from './pages/CounterAsync';

import NavMenu from './components/NavMenu';

import './Main.scss';

interface Props {
  t: TranslationFunction;
  isAuthenticated: boolean;
  deAuthenticate: typeof actions.deAuthenticate;
}

const Main: React.SFC<Props> = ({ t, isAuthenticated, deAuthenticate }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
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
};

const mapStateToProps = (state: {}) => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      deAuthenticate: actions.deAuthenticate,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(translate()(Main));