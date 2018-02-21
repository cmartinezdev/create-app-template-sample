import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { Switch } from 'react-router';

import Home from '../Home';
import Login from '../Login';

import ChangeLang from './components/ChangeLang';
import Header from './components/Header';
import RouteBasedHelmet from './components/RouteBasedHelmet';
import AuthRoute, { showIfOptions } from './components/AuthRoute';

import './App.scss';

interface Props {
  t: TranslationFunction;
}

const App: React.SFC<Props> = ({ t }) => (
  <div className="App">
    <RouteBasedHelmet />

    <Header />

    <ChangeLang />

    <Switch>
      <AuthRoute
        exact={true}
        path="/login"
        component={Login}
        showIf={showIfOptions.unauthenticated}
        redirectTo="/"
      />
      <AuthRoute
        path="/"
        component={Home}
        showIf={showIfOptions.authenticated}
        redirectTo="/login"
      />
    </Switch>
  </div>
);

export default translate()(App);
